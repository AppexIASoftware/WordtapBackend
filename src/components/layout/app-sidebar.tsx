"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Layers,
  Database,
  Gamepad2,
  Users,
  Flame,
  GitPullRequest,
  GraduationCap,
  ShieldCheck,
  Shield,
  LogOut,
  X,
} from "lucide-react";

interface AppSidebarProps {
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export function AppSidebar({ isOpenMobile, onCloseMobile }: AppSidebarProps) {
  const pathname = usePathname();

  const isRouteActive = (route: string) => {
    if (route === "/teacher") return pathname === "/teacher";
    return pathname.startsWith(route);
  };

  const getLinkClasses = (route: string) => {
    const active = isRouteActive(route);
    return `w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all cursor-pointer ${
      active
        ? "bg-emerald-dark/30 text-emerald-brand border border-emerald-brand/30 font-semibold"
        : "text-slate-muted hover:bg-card-hover hover:text-slate-100 font-medium"
    }`;
  };

  return (
    <>
      {/* Fondo oscuro para móvil */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 flex-shrink-0 bg-card border-r border-border-default flex flex-col justify-between transition-transform duration-300 z-50 ${
          isOpenMobile ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Cabecera de marca y espacio de trabajo */}
        <div className="p-4 border-b border-border-default space-y-3">
          <div className="flex items-center justify-between">
            <Link href="/teacher" className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-brand to-mint-brand flex items-center justify-center text-canvas font-black text-base shadow-glow-emerald flex-shrink-0">
                W
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                  Wordtap{" "}
                  <span className="text-xs px-1.5 py-0.2 rounded bg-emerald-dark/60 text-emerald-brand border border-emerald-brand/30 font-mono">
                    Studio
                  </span>
                </span>
                <span className="text-[10px] text-slate-subtle font-mono">
                  CMS & Portal Docente
                </span>
              </div>
            </Link>

            {onCloseMobile && (
              <button
                type="button"
                onClick={onCloseMobile}
                className="lg:hidden p-1.5 rounded-lg text-slate-muted hover:text-white hover:bg-card-hover cursor-pointer"
                title="Cerrar menú"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Selector de rol de espacio de trabajo (Docente / Mod / Admin) */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-canvas rounded-xl border border-border-default text-xs font-medium">
            <button
              type="button"
              className="flex items-center justify-center gap-1 py-1.5 rounded-lg bg-card text-emerald-brand shadow-sm font-semibold truncate cursor-pointer"
              title="Modo Docente (Activo)"
            >
              <GraduationCap className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">Docente</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-1 py-1.5 rounded-lg text-slate-muted hover:text-slate-200 truncate cursor-pointer"
              title="Modo Moderador"
            >
              <ShieldCheck className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">Mod</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-1 py-1.5 rounded-lg text-slate-muted hover:text-slate-200 truncate cursor-pointer"
              title="Modo Administrador"
            >
              <Shield className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">Admin</span>
            </button>
          </div>
        </div>

        {/* Navegación desplazable */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4">
          {/* GRUPO 1: MI ESPACIO DOCENTE */}
          <div>
            <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-subtle mb-1.5 font-mono">
              Mi Espacio Docente
            </p>
            <nav className="space-y-0.5">
              <Link href="/teacher" className={getLinkClasses("/teacher")}>
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard Pedagógico</span>
                </div>
              </Link>
            </nav>
          </div>

          {/* GRUPO 2: GESTIÓN EDUCATIVA (CMS) */}
          <div>
            <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-subtle mb-1.5 font-mono">
              Gestión Educativa (CMS)
            </p>
            <nav className="space-y-0.5">
              <Link href="/teacher/builder" className={getLinkClasses("/teacher/builder")}>
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4" />
                  <span>Creador de Cursos</span>
                </div>
                <span className="text-[10px] bg-emerald-brand/20 text-emerald-brand px-1.5 py-0.5 rounded font-mono font-bold">
                  CMS
                </span>
              </Link>

              <Link href="/teacher/vault" className={getLinkClasses("/teacher/vault")}>
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4" />
                  <span>Banco de Contenidos</span>
                </div>
                <span className="text-[10px] text-slate-subtle font-mono font-bold">
                  54 ítems
                </span>
              </Link>

              <Link href="/teacher/gamification" className={getLinkClasses("/teacher/gamification")}>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-4 h-4" />
                  <span>Juegos & Modos</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-dark/40 text-emerald-brand border border-emerald-brand/30">
                  12 Modos
                </span>
              </Link>
            </nav>
          </div>

          {/* GRUPO 3: MIS ESTUDIANTES */}
          <div>
            <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-subtle mb-1.5 font-mono">
              Mis Estudiantes
            </p>
            <nav className="space-y-0.5">
              <Link href="/teacher/students" className={getLinkClasses("/teacher/students")}>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4" />
                  <span>Progreso de Alumnos</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-brand animate-pulse" />
              </Link>

              <Link href="/teacher#heatmap" className={getLinkClasses("/teacher#heatmap")}>
                <div className="flex items-center gap-3">
                  <Flame className="w-4 h-4" />
                  <span>Heatmap de Errores</span>
                </div>
              </Link>
            </nav>
          </div>

          {/* GRUPO 4: ESTADO DE PUBLICACIÓN */}
          <div>
            <div className="flex items-center justify-between px-3 mb-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-subtle font-mono">
                Mis Cursos Enviados
              </span>
              <span className="text-[9px] bg-amber-brand/10 text-amber-brand px-1 rounded font-mono font-bold">
                En Revisión
              </span>
            </div>
            <nav className="space-y-0.5">
              <Link href="/teacher/approvals" className={getLinkClasses("/teacher/approvals")}>
                <div className="flex items-center gap-3">
                  <GitPullRequest className="w-4 h-4" />
                  <span>Mis Solicitudes (PRs)</span>
                </div>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-amber-brand/20 text-amber-brand font-bold font-mono">
                  1
                </span>
              </Link>
            </nav>
          </div>
        </div>

        {/* Perfil de usuario en el pie del menú (Prof. Mateo Silva) */}
        <div className="p-3 border-t border-border-default bg-card/60">
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-brand to-mint-brand flex items-center justify-center text-canvas font-bold text-xs flex-shrink-0">
                MS
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-200 truncate">
                  Prof. Mateo Silva
                </p>
                <p className="text-[10px] text-slate-subtle truncate">
                  Docente Autorizado
                </p>
              </div>
            </div>

            <Link
              href="/login"
              className="p-1.5 rounded-lg text-slate-muted hover:text-red-400 hover:bg-card-hover transition-colors cursor-pointer flex-shrink-0"
              title="Cerrar Sesión / Cambiar Usuario"
            >
              <LogOut className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
