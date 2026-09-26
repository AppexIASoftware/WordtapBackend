import { HEATMAP_TERMS } from "../data/mock-teacher-data";
import { ChevronRight } from "lucide-react";

export function TeacherDifficultyHeatmap() {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border-default space-y-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span>Heatmap de Dificultad en Puzzles & Juegos</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-dark/60 text-emerald-brand border border-emerald-brand/30 font-bold">
              Algoritmo SRS
            </span>
          </h3>
          <p className="text-xs text-slate-muted mt-0.5">
            Términos con mayor tasa de error en &apos;WordMatch&apos; y &apos;WordMemory&apos;. Haz clic en cualquier término para generar un refuerzo.
          </p>
        </div>
        <button
          type="button"
          className="text-xs font-semibold text-emerald-brand hover:text-mint-brand transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>Ver todo el vocabulario</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Cuadrícula de tarjetas de términos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {HEATMAP_TERMS.map((item) => {
          const isCritical = item.status === "critical";
          const isWarning = item.status === "warning";

          const borderClass = isCritical
            ? "border-rose-500/30 hover:border-rose-500"
            : isWarning
            ? "border-amber-500/30 hover:border-amber-500"
            : "border-border-default hover:border-border-subtle";

          const textClass = isCritical
            ? "group-hover:text-rose-400"
            : isWarning
            ? "group-hover:text-amber-400"
            : "group-hover:text-emerald-400";

          const badgeClass = isCritical
            ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
            : isWarning
            ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
            : "bg-card text-slate-muted border-border-default";

          const progressBg = isCritical
            ? "bg-rose-500"
            : isWarning
            ? "bg-amber-500"
            : "bg-emerald-brand";

          return (
            <div
              key={item.term}
              className={`p-3.5 rounded-xl bg-canvas border ${borderClass} transition-all cursor-pointer group`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm font-bold text-white ${textClass} transition-colors`}>
                  {item.term}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${badgeClass}`}
                >
                  {item.errorRate}% Fallos
                </span>
              </div>
              <p className="text-xs text-slate-muted mt-1">
                {item.phonetics} • {item.grammarType}
              </p>
              <div className="mt-2.5 h-1.5 w-full bg-card rounded-full overflow-hidden">
                <div
                  className={`h-full ${progressBg} rounded-full`}
                  style={{ width: `${item.errorRate}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
