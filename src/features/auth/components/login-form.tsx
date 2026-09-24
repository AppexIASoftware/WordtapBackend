"use client";

import { useLogin } from "../hooks/use-login";
import { DemoAccountsSelector } from "./demo-accounts-selector";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";

export function LoginForm() {
  const {
    selectedRole,
    credentials,
    showPassword,
    isLoading,
    statusMessage,
    selectRole,
    handleEmailChange,
    handlePasswordChange,
    handleRememberMeChange,
    togglePasswordVisibility,
    handleSubmit,
    handleGoogleSso,
  } = useLogin();

  return (
    <div className="bg-card border border-border-default rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-brand via-mint-brand to-emerald-dark absolute top-0 left-0" />

      <div>
        <h2 className="text-base font-bold text-white">Iniciar Sesión</h2>
        <p className="text-xs text-slate-muted mt-0.5">
          Ingresa tus credenciales institucionales o selecciona un perfil demo.
        </p>
      </div>

      {/* Demo Accounts Selector Tabs (1-Clic) */}
      <DemoAccountsSelector
        selectedRole={selectedRole}
        onSelectRole={selectRole}
      />

      {/* Feedback banner */}
      {statusMessage && (
        <div className="p-2.5 rounded-xl bg-emerald-brand/10 border border-emerald-brand/30 text-xs text-emerald-brand font-medium">
          {statusMessage}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="login-email"
            className="text-xs font-semibold text-slate-300"
          >
            Correo Corporativo / Institucional
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-muted">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id="login-email"
              required
              value={credentials.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-canvas rounded-xl border border-border-default focus:border-emerald-brand focus:ring-1 focus:ring-emerald-brand text-xs text-white placeholder-slate-500 transition-colors outline-none"
              placeholder="tu.nombre@wordtap.app"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="login-password"
              className="text-xs font-semibold text-slate-300"
            >
              Contraseña
            </label>
            <button
              type="button"
              onClick={() => alert(`Enlace de recuperación enviado a ${credentials.email}`)}
              className="text-[11px] text-emerald-brand hover:underline cursor-pointer"
            >
              ¿Olvidaste tu clave?
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-muted">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="login-password"
              required
              value={credentials.password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              className="w-full pl-9 pr-10 py-2 bg-canvas rounded-xl border border-border-default focus:border-emerald-brand focus:ring-1 focus:ring-emerald-brand text-xs text-white placeholder-slate-500 transition-colors font-mono outline-none"
              placeholder="••••••••••••"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-muted hover:text-white cursor-pointer"
              title="Mostrar/Ocultar contraseña"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Remember me */}
        <div className="flex items-center gap-2 pt-0.5">
          <input
            type="checkbox"
            id="login-remember-me"
            checked={credentials.rememberMe}
            onChange={(e) => handleRememberMeChange(e.target.checked)}
            className="w-3.5 h-3.5 rounded bg-canvas border-border-default text-emerald-brand focus:ring-0 cursor-pointer accent-emerald-500"
          />
          <label
            htmlFor="login-remember-me"
            className="text-xs text-slate-muted select-none cursor-pointer"
          >
            Mantener sesión activa (30 días)
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-brand to-mint-brand text-canvas font-bold text-xs hover:opacity-90 transition-all shadow-glow-emerald cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <span>
            {isLoading ? "Validando credenciales..." : "Ingresar a Wordtap Studio"}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="border-t border-border-default w-full" />
        <span className="bg-card px-3 text-[10px] uppercase font-mono text-slate-subtle absolute">
          o con tu cuenta
        </span>
      </div>

      {/* Google Workspace SSO Button */}
      <button
        type="button"
        onClick={handleGoogleSso}
        disabled={isLoading}
        className="w-full py-2.5 px-4 rounded-xl bg-canvas border border-border-default hover:border-slate-500 text-xs font-semibold text-slate-200 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-50"
      >
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>Continuar con Google Workspace</span>
      </button>

      {/* Security Notice */}
      <div className="pt-2 border-t border-border-default/60 flex items-start gap-2 text-[10px] text-slate-subtle">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-brand flex-shrink-0 mt-0.5" />
        <p>
          Aislamiento estricto por RBAC (ADR-30). Token JWT firmado con HMAC-SHA256
          y rotación automática de sesión.
        </p>
      </div>
    </div>
  );
}
