"use client";

import { useState } from "react";
import { AlertTriangle, Search } from "lucide-react";

export function StudentsProgressView() {
  const [selectedCohort, setSelectedCohort] = useState("b1-intensivo");

  const students = [
    {
      id: "std-1",
      name: "Sofía Valenzuela",
      email: "sofia.valenzuela@gmail.com",
      joined: "12 Mar 2026",
      lastActive: "Hoy, 10:24 AM",
      progress: "84%",
      accuracy: "92%",
      stumbles: 2,
      cefr: "B1.2",
    },
    {
      id: "std-2",
      name: "Martín Benítez",
      email: "martin.benitez@outlook.com",
      joined: "15 Mar 2026",
      lastActive: "Ayer, 18:40 PM",
      progress: "65%",
      accuracy: "71%",
      stumbles: 7,
      cefr: "B1.1",
    },
    {
      id: "std-3",
      name: "Camila Navarro",
      email: "c.navarro@student.edu",
      joined: "18 Mar 2026",
      lastActive: "Hoy, 08:15 AM",
      progress: "90%",
      accuracy: "96%",
      stumbles: 1,
      cefr: "B1.2",
    },
    {
      id: "std-4",
      name: "Rodrigo Morales",
      email: "rodrigo.m@empresa.com",
      joined: "20 Mar 2026",
      lastActive: "Hace 3 días",
      progress: "42%",
      accuracy: "64%",
      stumbles: 9,
      cefr: "A2.4",
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>Progreso de Alumnos & Aulas</span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Cohortes
            </span>
          </h1>
          <p className="text-sm text-slate-muted mt-1">
            Diagnóstico pedagógico en tiempo real, detección de rezagados y lista de tropiezos comunes (Stumble List).
          </p>
        </div>

        {/* Selector de cohorte y aula */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-subtle">Aula:</span>
          <select
            value={selectedCohort}
            onChange={(e) => setSelectedCohort(e.target.value)}
            className="bg-card border border-border-default rounded-xl px-3 py-2 text-xs text-white font-semibold focus:outline-none focus:border-emerald-brand cursor-pointer"
          >
            <option value="b1-intensivo">Inglés B1 - Intensivo Noche (24 alumnos)</option>
            <option value="a1-manana">Inglés A1 - Principiantes Mañana (18 alumnos)</option>
            <option value="b2-conversational">Inglés B2 - Conversacional Fin de Semana (12 alumnos)</option>
          </select>
        </div>
      </div>

      {/* Alerta de tropiezos recurrentes (Stumble List) */}
      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-white">
              Stumble List Activa en esta cohorte (64% fallos en pares mínimos)
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              3 de tus alumnos presentan tropiezos críticos continuos en las palabras: <strong>thought</strong>, <strong>through</strong> y <strong>thorough</strong>.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="px-3.5 py-1.5 rounded-xl bg-rose-500 text-white font-bold text-xs hover:bg-rose-600 transition-colors flex-shrink-0 cursor-pointer"
        >
          Generar Tarea de Refuerzo
        </button>
      </div>

      {/* Tabla de alumnos */}
      <div className="bg-card border border-border-default rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-border-default flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-card-hover/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-subtle" />
            <input
              type="text"
              placeholder="Buscar alumno por nombre o correo..."
              className="w-full pl-8 pr-3 py-1.5 bg-canvas rounded-xl border border-border-default text-xs text-white placeholder-slate-500 focus:border-emerald-brand outline-none"
            />
          </div>
          <span className="text-xs font-mono text-slate-subtle">
            Mostrando <strong>{students.length}</strong> alumnos inscritos
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-canvas/60 text-slate-subtle font-mono uppercase text-[10px] border-b border-border-default">
              <tr>
                <th className="p-3.5 pl-5">Estudiante</th>
                <th className="p-3.5">Nivel CEFR</th>
                <th className="p-3.5">Progreso</th>
                <th className="p-3.5">Precisión</th>
                <th className="p-3.5">Tropiezos</th>
                <th className="p-3.5">Última Actividad</th>
                <th className="p-3.5 pr-5 text-right">Detalle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              {students.map((std) => (
                <tr key={std.id} className="hover:bg-card-hover/40 transition-colors">
                  <td className="p-3.5 pl-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center font-bold text-[11px] text-white">
                        {std.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{std.name}</p>
                        <p className="text-[10px] text-slate-subtle font-mono">{std.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3.5 font-mono text-emerald-brand font-bold">{std.cefr}</td>
                  <td className="p-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-canvas rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-brand rounded-full" style={{ width: std.progress }} />
                      </div>
                      <span className="font-mono text-[11px] text-slate-200">{std.progress}</span>
                    </div>
                  </td>
                  <td className="p-3.5 font-mono text-white font-bold">{std.accuracy}</td>
                  <td className="p-3.5 font-mono">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        std.stumbles > 5
                          ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                          : "bg-canvas text-slate-muted border border-border-default"
                      }`}
                    >
                      {std.stumbles} palabras
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-muted text-[11px]">{std.lastActive}</td>
                  <td className="p-3.5 pr-5 text-right">
                    <button
                      type="button"
                      className="px-2.5 py-1 rounded-lg bg-canvas border border-border-default hover:border-emerald-brand text-slate-200 hover:text-white transition-colors cursor-pointer"
                    >
                      Ver Perfil
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
