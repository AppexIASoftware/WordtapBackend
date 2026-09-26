"use client";

import { Gamepad2, Play, Sparkles } from "lucide-react";

export function GamificationView() {
  const gameModes = [
    {
      id: "word-match",
      name: "WordMatch",
      category: "Pares & Fonética",
      description: "Emparejamiento contrarreloj de términos L2 con significado L1 o transcripción IPA.",
      rounds: "10 pares",
      level: "A1 - B2",
      activeBadge: "Popular",
    },
    {
      id: "word-memory",
      name: "WordMemory",
      category: "Memoria Visual & Auditiva",
      description: "Volteo de cartas con audio nativo al descubrir el par correcto.",
      rounds: "8 pares",
      level: "Todos",
      activeBadge: "Recomendado",
    },
    {
      id: "speed-tap",
      name: "SpeedTap",
      category: "Reflejos & Ortografía",
      description: "Identificación veloz de la grafía correcta descartando distractores comunes.",
      rounds: "15 palabras",
      level: "B1 - C1",
      activeBadge: "Desafío",
    },
    {
      id: "sentence-builder",
      name: "SentenceBuilder",
      category: "Sintaxis & Estructura",
      description: "Construcción de oraciones en orden gramatical exacto con fichas arrastrables.",
      rounds: "5 oraciones",
      level: "A2 - B2",
    },
    {
      id: "phonetic-challenger",
      name: "Phonetic Challenger",
      category: "Discriminación Fonética",
      description: "Diferenciación de pares mínimos complejos (/θ/ vs /s/, /iː/ vs /ɪ/).",
      rounds: "10 audios",
      level: "B1 - C2",
    },
    {
      id: "false-friend-hunter",
      name: "False Friend Hunter",
      category: "Trampas Léxicas",
      description: "Detección de falsos cognados recurrentes entre hispanohablantes (actually, exit, attend).",
      rounds: "8 preguntas",
      level: "A2 - B2",
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              Juegos & Modos de Gamificación
            </h1>
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-dark/50 text-emerald-brand border border-emerald-brand/30">
              12 Modos
            </span>
          </div>
          <p className="text-sm text-slate-muted mt-1">
            Minijuegos interactivos que transforman los bancos del Content Vault en sesiones de práctica adictiva y medible.
          </p>
        </div>

        <button
          type="button"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-brand to-mint-brand text-canvas font-bold text-xs flex items-center gap-1.5 shadow-glow-emerald cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Configurar Reglas Globales</span>
        </button>
      </div>

      {/* Cuadrícula de modos de juego */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gameModes.map((game) => (
          <div
            key={game.id}
            className="p-5 rounded-2xl bg-card border border-border-default hover:border-emerald-brand/50 transition-all shadow-sm flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-brand uppercase font-bold tracking-wider">
                  {game.category}
                </span>
                {game.activeBadge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-brand/10 text-emerald-brand border border-emerald-brand/20">
                    {game.activeBadge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-emerald-brand transition-colors flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-emerald-brand" />
                <span>{game.name}</span>
              </h3>

              <p className="text-xs text-slate-muted leading-relaxed">
                {game.description}
              </p>
            </div>

            <div className="pt-3 border-t border-border-default flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-subtle font-mono text-[11px]">
                <span>{game.rounds}</span>
                <span>•</span>
                <span>{game.level}</span>
              </div>

              <button
                type="button"
                className="px-3 py-1 rounded-lg bg-canvas border border-border-default hover:border-emerald-brand text-slate-200 hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
              >
                <Play className="w-3 h-3 text-emerald-brand" />
                <span>Testear</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
