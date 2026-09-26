"use client";

import { GitPullRequest, Clock } from "lucide-react";

export function CourseApprovalsView() {
  const prs = [
    {
      id: "pr-108",
      title: "B1 Conversational Travel — Unidades 3 y 4",
      submittedDate: "23 Sep 2026, 16:30",
      reviewer: "Lic. Elena Ramos (Moderadora de Calidad)",
      status: "pending",
      statusLabel: "En Revisión Pedagógica",
      changes: "18 nuevas tarjetas interactivas, 2 audios corregidos",
      notes: "Revisión de par mínimo /θ/ en lección 3 en curso.",
    },
    {
      id: "pr-092",
      title: "Inglés Básico Gratuito A1 — Lanzamiento Inicial",
      submittedDate: "10 Ago 2026",
      reviewer: "Lic. Elena Ramos",
      status: "approved",
      statusLabel: "Aprobado & Publicado",
      changes: "4 lecciones completas, 54 unidades de vocabulario",
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* Encabezado */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <span>Mis Solicitudes de Publicación (PRs)</span>
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Pipeline Docente
          </span>
        </h1>
        <p className="text-sm text-slate-muted mt-1">
          Seguimiento de cursos y lecciones enviados al equipo de moderación pedagógica antes de publicarse en la app móvil.
        </p>
      </div>

      {/* Lista de solicitudes de publicación */}
      <div className="space-y-4">
        {prs.map((pr) => {
          const isPending = pr.status === "pending";

          return (
            <div
              key={pr.id}
              className={`p-5 rounded-2xl bg-card border space-y-3 shadow-sm transition-all ${
                isPending
                  ? "border-amber-500/30 hover:border-amber-500/50"
                  : "border-border-default hover:border-border-subtle"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <GitPullRequest
                    className={`w-4 h-4 ${
                      isPending ? "text-amber-400" : "text-emerald-brand"
                    }`}
                  />
                  <h3 className="text-base font-bold text-white">{pr.title}</h3>
                  <span className="font-mono text-xs text-slate-subtle">({pr.id})</span>
                </div>

                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                    isPending
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                      : "bg-emerald-brand/20 text-emerald-brand border-emerald-brand/30"
                  }`}
                >
                  {pr.statusLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-muted pt-2 border-t border-border-default">
                <div>
                  <span className="text-slate-subtle">Enviado:</span>{" "}
                  <strong className="text-slate-200">{pr.submittedDate}</strong>
                </div>
                <div>
                  <span className="text-slate-subtle">Revisor Asignado:</span>{" "}
                  <strong className="text-slate-200">{pr.reviewer}</strong>
                </div>
                <div>
                  <span className="text-slate-subtle">Cambios:</span>{" "}
                  <strong className="text-slate-200">{pr.changes}</strong>
                </div>
              </div>

              {pr.notes && (
                <div className="p-3 rounded-xl bg-canvas border border-amber-500/20 text-xs text-amber-200/90 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{pr.notes}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
