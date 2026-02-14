import React, { useMemo, useState } from 'react';
import { MessageSquare, X, Send, KeyRound, Trash2 } from 'lucide-react';

type ChatRole = 'user' | 'assistant';
type ApiRole = 'system' | 'user' | 'assistant';

interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface ApiMessage {
  role: ApiRole;
  content: string;
}

interface OpenRouterChoice {
  message?: {
    content?: string;
  };
  finish_reason?: string | null;
}

interface OpenRouterResponse {
  choices?: OpenRouterChoice[];
  error?: {
    message?: string;
  };
}

interface ModelCallResult {
  content: string;
  finishReason: string;
}

const STORAGE_KEY = 'bastion_openrouter_api_key';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_MODELS = [
  'stepfun/step-3.5-flash:free',
  'deepseek/deepseek-r1-0528:free',
  'qwen/qwen-2.5-72b-instruct:free',
  'mistralai/mistral-7b-instruct:free',
];
const CONTINUE_PROMPT =
  'Continua exactamente donde lo dejaste. No repitas. Mantiene el mismo formato y cierra la respuesta por completo.';

const BASTION_CONTEXT = `
BASTION Public Context:
- BASTION QUANT: infraestructura de trading cuantitativo institucional.
- Estado principal: roadmap activo hasta fase 6.0 (paper -> canary -> produccion).
- Foco: seguridad operativa, trazabilidad, disciplina de ejecucion y control de riesgo.

- SENTINEL: programa separado de inteligencia macro (post-6.0).
- Principio: SENTINEL emite contexto/recomendaciones; QUANT ejecuta.
- No debe presentarse como motor de ejecucion.

- FORGE: programa separado de investigacion de estrategias (post-6.0).
- Rol: descubrir, validar y evolucionar estrategias.
- FORGE no ejecuta ordenes, entrega paquetes de estrategia para QUANT.

Style Guide:
- Responde en espanol claro y profesional.
- Usa markdown simple y limpio (negritas y listas cuando aporte claridad).
- No inventes funciones no descritas; si falta informacion, dilo.
- Priorizacion: seguridad, governance y claridad operativa.
`;

const renderInlineMarkdown = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={`bold-${index}`} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={`txt-${index}`}>{part}</React.Fragment>;
  });
};

const renderMessageContent = (content: string): React.ReactNode[] => {
  const blocks: React.ReactNode[] = [];
  const lines = content.split('\n');
  const bullets: string[] = [];

  const flushBullets = (seed: number) => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={`ul-${seed}`} className="list-disc pl-5 space-y-1">
        {bullets.map((item, idx) => (
          <li key={`li-${seed}-${idx}`}>{renderInlineMarkdown(item)}</li>
        ))}
      </ul>
    );
    bullets.length = 0;
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBullets(idx);
      blocks.push(<div key={`spacer-${idx}`} className="h-2" />);
      return;
    }

    if (trimmed.startsWith('- ')) {
      bullets.push(trimmed.slice(2));
      return;
    }

    flushBullets(idx);
    blocks.push(
      <p key={`p-${idx}`} className="leading-relaxed">
        {renderInlineMarkdown(trimmed)}
      </p>
    );
  });

  flushBullets(lines.length + 1);
  return blocks;
};

const BastionChatbot: React.FC = () => {
  const initialKey = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) ?? '' : '';
  const [isOpen, setIsOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [apiKey, setApiKey] = useState(initialKey);
  const [keySavedAt, setKeySavedAt] = useState<number | null>(initialKey ? Date.now() : null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Soy el asistente de BASTION. Puedo responder sobre QUANT, SENTINEL y FORGE. Configura tu API key de OpenRouter para empezar.',
    },
  ]);

  const hasKey = useMemo(() => apiKey.trim().length > 0, [apiKey]);

  const saveApiKey = () => {
    const normalized = apiKeyInput.trim();
    setApiKey(normalized);
    if (normalized) {
      localStorage.setItem(STORAGE_KEY, normalized);
      setApiKeyInput('');
      setKeySavedAt(Date.now());
    } else {
      localStorage.removeItem(STORAGE_KEY);
      setKeySavedAt(null);
    }
  };

  const clearApiKey = () => {
    setApiKey('');
    setApiKeyInput('');
    setKeySavedAt(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const callModel = async (model: string, messages: ApiMessage[]): Promise<ModelCallResult> => {
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'BASTION QUANT Web',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.25,
        max_tokens: 900,
      }),
    });

    let data: OpenRouterResponse = {};
    try {
      data = (await response.json()) as OpenRouterResponse;
    } catch {
      data = {};
    }

    if (!response.ok) {
      const apiError = data?.error?.message || `Error ${response.status}`;
      throw new Error(apiError);
    }

    const choice = data?.choices?.[0];
    return {
      content: choice?.message?.content?.trim() ?? '',
      finishReason: (choice?.finish_reason ?? 'stop').toString(),
    };
  };

  const sendMessage = async () => {
    const prompt = input.trim();
    if (!prompt || loading) return;

    if (!hasKey) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Falta la API key de OpenRouter. Pegala arriba, pulsa "Guardar key" y vuelve a enviar.',
        },
      ]);
      return;
    }

    const userMsg: ChatMessage = { role: 'user', content: prompt };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const requestMessages: ApiMessage[] = [
        { role: 'system', content: BASTION_CONTEXT },
        ...nextMessages.slice(-12).map((m) => ({
          role: m.role,
          content: m.content,
        })),
      ];

      let content = '';
      let lastError = 'No hay respuesta del proveedor.';

      for (const model of OPENROUTER_MODELS) {
        try {
          let chainMessages = [...requestMessages];
          let assembled = '';

          for (let pass = 0; pass < 3; pass++) {
            const result = await callModel(model, chainMessages);
            if (!result.content) break;

            assembled = assembled ? `${assembled}\n${result.content}` : result.content;

            if (result.finishReason === 'length' || result.finishReason === 'max_tokens') {
              chainMessages = [
                ...chainMessages,
                { role: 'assistant', content: assembled },
                { role: 'user', content: CONTINUE_PROMPT },
              ];
              continue;
            }
            break;
          }

          if (assembled) {
            content = assembled;
            break;
          }
        } catch (error) {
          const apiError = error instanceof Error ? error.message : 'Error desconocido';
          lastError = `${model}: ${apiError}`;
        }
      }

      if (!content) {
        throw new Error(lastError);
      }

      const assistantMsg: ChatMessage = {
        role: 'assistant',
        content,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Error desconocido';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `No pude consultar OpenRouter: ${msg}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group w-14 h-14 rounded-full border border-accentCyan/40 bg-bgSecondary/90 backdrop-blur-md flex items-center justify-center text-accentCyan hover:bg-accentCyan/15 hover:border-accentCyan transition-all shadow-[0_0_22px_rgba(6,182,212,0.25)]"
          aria-label="Abrir chat BASTION"
        >
          <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
        </button>
      )}

      {isOpen && (
        <div className="w-[92vw] max-w-[420px] h-[70vh] max-h-[680px] rounded-2xl border border-white/10 bg-[#0a0f1d]/95 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div>
              <p className="text-white font-display font-bold text-sm">BASTION Assistant</p>
              <p className="text-[11px] font-mono text-textSecondary">QUANT / SENTINEL / FORGE</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="Cerrar chat"
            >
              <X size={16} />
            </button>
          </div>

          <div className="px-3 py-2 border-b border-white/10 bg-black/20">
            <div className="flex items-center gap-2 mb-2">
              <KeyRound size={14} className="text-accentGold" />
              <span className="text-[11px] font-mono text-textSecondary">OpenRouter API Key (local)</span>
              {hasKey && (
                <span className="text-[10px] font-mono text-accentSuccess">
                  {keySavedAt ? 'guardada' : 'activa'}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="sk-or-v1-..."
                className="flex-1 px-2 py-2 rounded-md bg-white/5 border border-white/10 text-xs text-white outline-none focus:border-accentCyan"
              />
              <button
                onClick={saveApiKey}
                className="px-3 py-2 rounded-md bg-accentCyan/20 border border-accentCyan/30 text-accentCyan text-xs font-mono hover:bg-accentCyan/30 transition-colors"
              >
                Guardar
              </button>
              {hasKey && (
                <button
                  onClick={clearApiKey}
                  className="px-2 py-2 rounded-md bg-accentDanger/20 border border-accentDanger/30 text-accentDanger hover:bg-accentDanger/30 transition-colors"
                  aria-label="Eliminar key"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div key={`${m.role}-${i}`} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-accentCyan/20 border border-accentCyan/30 text-white'
                      : 'bg-white/5 border border-white/10 text-textPrimary'
                  }`}
                >
                  {renderMessageContent(m.content)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-xl px-3 py-2 text-sm bg-white/5 border border-white/10 text-textSecondary">
                  Pensando...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 bg-black/20">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    void sendMessage();
                  }
                }}
                placeholder="Pregunta sobre QUANT, SENTINEL o FORGE..."
                className="flex-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white outline-none focus:border-accentCyan"
              />
              <button
                onClick={() => void sendMessage()}
                disabled={loading}
                className="px-3 py-2 rounded-md bg-accentCyan/20 border border-accentCyan/30 text-accentCyan disabled:opacity-60 hover:bg-accentCyan/30 transition-colors"
                aria-label="Enviar"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BastionChatbot;
