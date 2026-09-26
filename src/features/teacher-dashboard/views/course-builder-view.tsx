"use client";

import { useState } from "react";
import {
  Plus,
  DollarSign,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Download,
  Database,
  FileEdit,
  Volume2,
} from "lucide-react";

export function CourseBuilderView() {
  const [activeCourse, setActiveCourse] = useState("c-2");
  const [selectedLesson, setSelectedLesson] = useState("l-1");

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden">
      {/* Barra superior de acciones */}
      <div className="h-14 border-b border-border-default bg-card px-4 md:px-6 flex items-center justify-between flex-shrink-0 gap-3">
        <div className="flex items-center gap-2.5 overflow-x-auto">
          <span className="text-xs font-mono text-slate-muted uppercase tracking-wider flex-shrink-0">
            Curso Activo:
          </span>
          <select
            value={activeCourse}
            onChange={(e) => setActiveCourse(e.target.value)}
            className="bg-canvas border border-border-default rounded-xl px-3 py-1.5 text-xs text-white font-semibold focus:outline-none focus:border-emerald-brand cursor-pointer flex-shrink-0"
          >
            <option value="c-1">Inglés Básico Gratuito (A1 Beginner)</option>
            <option value="c-2">Curso Premium WordTap (B1 Intermediate)</option>
            <option value="c-3">B1 Conversational Travel (Borrador Docente)</option>
          </select>

          <button
            type="button"
            className="px-2.5 py-1.5 rounded-xl bg-emerald-brand text-canvas font-bold text-xs hover:bg-mint-brand transition-colors flex items-center gap-1 cursor-pointer shadow-sm flex-shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Nuevo Curso</span>
          </button>

          {/* Indicador de aula vinculada */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 font-mono text-[11px] font-bold cursor-pointer hover:bg-purple-500/20 transition-all flex-shrink-0"
            title="Aula asociada a este curso"
          >
            <span>🏫</span>
            <span>Aula: Inglés B1 - Intensivo Noche (24 alumnos)</span>
          </div>

          <span className="hidden xl:inline text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-brand/10 text-emerald-brand font-bold border border-emerald-brand/20 flex-shrink-0">
            100% Nativo Interactivo (ADR-04)
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            className="px-3 py-1.5 rounded-xl bg-canvas border border-border-default hover:border-emerald-brand text-xs font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-brand" />
            <span>Precio:</span>
            <span className="text-emerald-brand font-mono font-bold">$19.99 USD</span>
          </button>

          <button
            type="button"
            className="hidden md:flex px-3 py-1.5 rounded-xl bg-canvas border border-border-default hover:border-border-subtle text-xs font-medium text-slate-300 transition-colors items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar</span>
          </button>

          <button
            type="button"
            className="px-3 py-1.5 rounded-xl bg-card border border-emerald-brand/50 hover:border-emerald-brand text-emerald-brand hover:bg-emerald-brand/10 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Simulador Móvil</span>
          </button>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-xl bg-emerald-brand text-canvas font-bold text-xs hover:bg-mint-brand transition-colors flex items-center gap-1.5 shadow-glow-emerald cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Publicar Lección</span>
          </button>
        </div>
      </div>

      {/* Cuadrícula en 2 columnas */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden min-h-0">
        {/* Columna 1: Estructura del curso (3 cols) */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 border-r border-border-default bg-card/40 flex flex-col overflow-y-auto">
          <div className="p-3.5 border-b border-border-default flex items-center justify-between bg-card-hover/40 flex-shrink-0">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-muted font-mono">
                Estructura del Curso
              </span>
              <p className="text-[10px] text-slate-subtle">4 unidades • 12 lecciones</p>
            </div>
            <button
              type="button"
              className="px-2.5 py-1 rounded-lg bg-canvas border border-border-default hover:border-emerald-brand text-xs font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3 h-3" />
              <span>Lección</span>
            </button>
          </div>

          {/* Alerta de tropiezos del aula vinculada */}
          <div className="mx-3 mt-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs space-y-1 flex-shrink-0">
            <div className="flex items-center gap-1.5 font-bold">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>Alerta de Aula Vinculada (Stumble List)</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Alumnos del <strong>Aula Inglés B1 Intensivo</strong> tienen 64% de fallos en <em>&apos;thought vs through&apos;</em>.
            </p>
          </div>

          {/* Lista de lecciones del curso */}
          <div className="p-3 space-y-2 flex-1 overflow-y-auto">
            {[
              { id: "l-1", title: "1. Past Habits & Irregular Verbs", steps: 8, badge: "Activa" },
              { id: "l-2", title: "2. Travel Conversations & Airport Check-in", steps: 6, badge: "Lista" },
              { id: "l-3", title: "3. Idiomatic Phrasal Verbs in Action", steps: 10, badge: "Borrador" },
              { id: "l-4", title: "4. Business English Negotiations", steps: 5, badge: "Borrador" },
            ].map((lesson) => {
              const isSelected = selectedLesson === lesson.id;
              return (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-card border-emerald-brand text-white shadow-sm"
                      : "bg-canvas border-border-default text-slate-300 hover:border-border-subtle"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">{lesson.title}</span>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold ${
                        isSelected
                          ? "bg-emerald-brand/20 text-emerald-brand"
                          : "bg-card text-slate-subtle"
                      }`}
                    >
                      {lesson.badge}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-subtle font-mono mt-1">
                    {lesson.steps} tarjetas interactivas
                  </p>
                </div>
              );
            })}
          </div>

          {/* Acciones inferiores de la estructura */}
          <div className="p-3 border-t border-border-default bg-card/60 space-y-2 flex-shrink-0">
            <button
              type="button"
              className="w-full py-2.5 rounded-xl bg-emerald-brand text-canvas font-bold text-xs hover:bg-mint-brand transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Database className="w-3.5 h-3.5" />
              <span>+ Importar desde Content Vault</span>
            </button>
            <button
              type="button"
              className="w-full py-2 rounded-xl bg-canvas border border-border-default hover:border-emerald-brand/40 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileEdit className="w-3.5 h-3.5" />
              <span>Redactar Tarjeta Manual</span>
            </button>
          </div>
        </div>

        {/* Columna 2: Lienzo de trabajo / Editor (9 cols) */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 bg-canvas flex flex-col overflow-y-auto p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border-default">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Lección: Past Habits & Irregular Verbs</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-brand/10 text-emerald-brand font-bold border border-emerald-brand/20">
                  Nivel B1
                </span>
              </h2>
              <p className="text-xs text-slate-muted mt-0.5">
                Editando tarjeta 1 de 8 • Enfoque en discriminación de fonemas /θ/ y pares mínimos.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-subtle">
              <span>Autoguardado: <strong>13:48:12</strong></span>
            </div>
          </div>

          {/* Formulario y editor de tarjeta interactiva */}
          <div className="bg-card border border-border-default rounded-2xl p-6 space-y-5 shadow-sm max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Palabra / Expresión Clave (L2)
                </label>
                <input
                  type="text"
                  defaultValue="thought"
                  className="w-full px-3 py-2 bg-canvas rounded-xl border border-border-default text-xs text-white focus:border-emerald-brand outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Traducción / Significado (L1)
                </label>
                <input
                  type="text"
                  defaultValue="pensamiento / pasado de think"
                  className="w-full px-3 py-2 bg-canvas rounded-xl border border-border-default text-xs text-white focus:border-emerald-brand outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Transcripción Fonética (IPA)</label>
                <input
                  type="text"
                  defaultValue="/θɔːt/"
                  className="w-full px-3 py-2 bg-canvas rounded-xl border border-border-default text-xs text-white font-mono focus:border-emerald-brand outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Categoría Gramatical</label>
                <select className="w-full px-3 py-2 bg-canvas rounded-xl border border-border-default text-xs text-white focus:border-emerald-brand outline-none cursor-pointer">
                  <option>Pasado Irregular</option>
                  <option>Sustantivo</option>
                  <option>Phrasal Verb</option>
                  <option>Adjetivo</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Minijuego de Práctica</label>
                <select className="w-full px-3 py-2 bg-canvas rounded-xl border border-border-default text-xs text-emerald-brand font-semibold focus:border-emerald-brand outline-none cursor-pointer">
                  <option>WordMatch (Pares fonéticos)</option>
                  <option>WordMemory</option>
                  <option>SpeedTap</option>
                  <option>Phonetic Challenger</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Oración Ejemplo de Contexto
              </label>
              <textarea
                rows={2}
                defaultValue="I thought about the problem all night before finding the solution."
                className="w-full px-3 py-2 bg-canvas rounded-xl border border-border-default text-xs text-white focus:border-emerald-brand outline-none resize-none"
              />
            </div>

            <div className="p-3 rounded-xl bg-canvas border border-border-default flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-emerald-brand" />
                <span className="text-xs text-slate-300">Audio sintetizado TTS (Acento UK / US disponible)</span>
              </div>
              <button
                type="button"
                className="px-3 py-1 rounded-lg bg-emerald-brand/10 text-emerald-brand hover:bg-emerald-brand/20 text-xs font-bold font-mono transition-colors cursor-pointer"
              >
                Reproducir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
