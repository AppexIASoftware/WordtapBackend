"use client";

import Link from "next/link";
import { Search, Menu, Smartphone, LogIn } from "lucide-react";

interface AppTopbarProps {
  onToggleMobile?: () => void;
}

export function AppTopbar({ onToggleMobile }: AppTopbarProps) {
  return (
    <header className="h-14 bg-card/80 backdrop-blur border-b border-border-default flex items-center justify-between px-3 md:px-6 z-20 flex-shrink-0 gap-2">
      {/* Izquierda: Menú móvil y buscador omnibox */}
      <div className="flex items-center gap-2 md:gap-3 flex-1 max-w-md min-w-0">
        {onToggleMobile && (
          <button
            type="button"
            onClick={onToggleMobile}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-card-hover border border-border-default transition-colors flex-shrink-0 cursor-pointer"
            title="Abrir Navegación"
          >
            <Menu className="w-4 h-4" />
          </button>
        )}

        <div className="relative w-full cursor-pointer min-w-0 overflow-hidden">
          <div className="w-full pl-9 pr-3 md:pr-8 py-1.5 bg-canvas rounded-xl border border-border-default text-xs text-slate-subtle flex items-center justify-between hover:border-border-subtle transition-colors truncate">
            <span className="flex items-center gap-2 truncate">
              <Search className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">Buscar lecciones o alumnos...</span>
            </span>
            <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-card border border-border-default text-[10px] font-mono text-slate-muted flex-shrink-0">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Derecha: Estado, indicador de rol y acciones */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-subtle font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-brand" />
          <span>Autoguardado activo</span>
        </div>

        {/* Indicador de rol en barra superior */}
        <div
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-brand/10 text-emerald-brand border border-emerald-brand/20 font-mono text-xs font-bold"
          title="Modo Docente Activo"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-brand animate-pulse" />
          <span>Modo Docente</span>
        </div>

        <div className="h-4 w-px bg-border-default hidden sm:block" />

        {/* Acceso rápido a simulador móvil */}
        <button
          type="button"
          onClick={() => alert("Simulador Playtest Móvil (Mock)")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border border-emerald-brand/40 text-xs font-semibold text-emerald-brand hover:bg-emerald-brand/10 transition-colors shadow-sm cursor-pointer"
          title="Abrir Simulador de Playtest Móvil (ADR-09, ADR-10)"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-brand" />
          <span className="hidden md:inline">Playtest Móvil</span>
        </button>

        {/* Enlace a pantalla de inicio de sesión */}
        <Link
          href="/login"
          className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border border-border-default hover:border-emerald-brand/40 text-xs font-medium text-slate-muted hover:text-emerald-brand transition-colors cursor-pointer"
          title="Ir a Pantalla de Login"
        >
          <LogIn className="w-3.5 h-3.5" />
          <span>Login Screen</span>
        </Link>
      </div>
    </header>
  );
}
