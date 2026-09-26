"use client";

import { useState } from "react";
import { Search, Plus, Volume2, Gamepad2 } from "lucide-react";

export function VaultView() {
  const [selectedBank, setSelectedBank] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const banks = [
    { id: "all", label: "Todos los Bancos", count: 54 },
    { id: "vocab", label: "Vocabulario A1-C2", count: 18 },
    { id: "phrasal", label: "Phrasal Verbs", count: 12 },
    { id: "idioms", label: "Idioms & Modismos", count: 8 },
    { id: "slang", label: "Slang Urbano", count: 6 },
    { id: "false-friends", label: "Falsos Amigos", count: 5 },
    { id: "collocations", label: "Colocaciones", count: 5 },
  ];

  const items = [
    { id: 1, term: "thought", translation: "pensamiento / pasado de think", ipa: "/θɔːt/", cefr: "A2", bank: "Vocabulario", fails: "68%" },
    { id: 2, term: "through", translation: "a través de / por", ipa: "/θruː/", cefr: "B1", bank: "Vocabulario", fails: "62%" },
    { id: 3, term: "get up", translation: "levantarse", ipa: "/ɡet ʌp/", cefr: "A1", bank: "Phrasal Verbs", fails: "51%" },
    { id: 4, term: "hit the sack", translation: "irse a dormir", ipa: "/hɪt ðə sæk/", cefr: "B2", bank: "Idioms & Modismos", fails: "34%" },
    { id: 5, term: "actually", translation: "en realidad (no actualmente)", ipa: "/ˈæk.tʃu.ə.li/", cefr: "B1", bank: "Falsos Amigos", fails: "48%" },
    { id: 6, term: "take for granted", translation: "dar por sentado", ipa: "/teɪk fɔː ˈɡrɑːn.tɪd/", cefr: "C1", bank: "Colocaciones", fails: "29%" },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              Banco Unificado de Contenidos
            </h1>
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-dark/50 text-emerald-brand border border-emerald-brand/30">
              Content Vault
            </span>

            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-card rounded-xl border border-border-default text-xs font-mono">
              <span className="text-slate-subtle text-[10px] uppercase font-bold">Par Lingüístico:</span>
              <span className="text-emerald-brand font-bold">Español (L1) → Inglés (L2)</span>
            </div>
          </div>
          <p className="text-sm text-slate-muted mt-1">
            Núcleo universal de unidades de aprendizaje para alimentar lecciones y minijuegos con niveles automáticos.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3.5 py-2 rounded-xl bg-card border border-border-default hover:border-emerald-brand text-xs font-bold text-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-brand" />
            <span>Crear Minijuego</span>
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-xl bg-emerald-brand text-canvas font-bold text-xs hover:bg-mint-brand transition-colors flex items-center gap-1.5 shadow-glow-emerald cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Nuevo Ítem</span>
          </button>
        </div>
      </div>

      {/* Pestañas de bancos de contenido */}
      <div className="p-3.5 rounded-2xl bg-card border border-border-default space-y-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          {banks.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setSelectedBank(b.id)}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                selectedBank === b.id
                  ? "bg-emerald-brand text-canvas font-bold shadow-sm"
                  : "bg-canvas text-slate-muted hover:text-white border border-border-default"
              }`}
            >
              {b.label} <span className="font-mono text-[10px] opacity-75">({b.count})</span>
            </button>
          ))}
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="pt-3 border-t border-border-default flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-subtle" />
            <input
              type="text"
              placeholder="Buscar por término, traducción o IPA..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-canvas rounded-xl border border-border-default text-xs text-white placeholder-slate-500 focus:border-emerald-brand outline-none"
            />
          </div>
          <span className="text-xs font-mono text-slate-subtle">
            Mostrando <strong>{filteredItems.length}</strong> de 54 unidades
          </span>
        </div>
      </div>

      {/* Tabla de contenidos del banco */}
      <div className="bg-card border border-border-default rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-canvas/60 text-slate-subtle font-mono uppercase text-[10px] border-b border-border-default">
              <tr>
                <th className="p-3.5 pl-5">Término L2</th>
                <th className="p-3.5">Fonética (IPA)</th>
                <th className="p-3.5">Traducción L1</th>
                <th className="p-3.5">Banco</th>
                <th className="p-3.5">Nivel CEFR</th>
                <th className="p-3.5">Error SRS</th>
                <th className="p-3.5 pr-5 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-card-hover/40 transition-colors">
                  <td className="p-3.5 pl-5 font-bold text-white flex items-center gap-2">
                    <span>{item.term}</span>
                    <button
                      type="button"
                      className="p-1 rounded hover:bg-emerald-brand/10 text-emerald-brand cursor-pointer"
                      title="Reproducir audio"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                  <td className="p-3.5 font-mono text-slate-muted">{item.ipa}</td>
                  <td className="p-3.5 text-slate-300">{item.translation}</td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded-lg bg-canvas text-slate-subtle font-mono text-[10px] border border-border-default">
                      {item.bank}
                    </span>
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-brand/10 text-emerald-brand font-mono font-bold text-[10px] border border-emerald-brand/20">
                      {item.cefr}
                    </span>
                  </td>
                  <td className="p-3.5 font-mono font-bold text-rose-400">{item.fails}</td>
                  <td className="p-3.5 pr-5 text-right">
                    <button
                      type="button"
                      className="px-2.5 py-1 rounded-lg bg-canvas border border-border-default hover:border-emerald-brand text-slate-200 hover:text-white transition-colors cursor-pointer"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
