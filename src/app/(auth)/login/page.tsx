import { LoginForm } from "@/features/auth/components/login-form";

export const metadata = {
  title: "Iniciar Sesión — Wordtap Studio",
  description: "Portal de Autoría Docente, Moderación y Gobernanza",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-canvas text-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Main Container */}
      <main className="w-full max-w-md my-auto py-8 space-y-6 flex-shrink-0">
        {/* Branding */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-brand to-mint-brand flex items-center justify-center text-canvas font-black text-2xl shadow-glow-emerald mx-auto">
            W
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center justify-center gap-2">
              <span>Wordtap</span>
              <span className="text-xs px-2 py-0.5 rounded-lg bg-emerald-dark/60 text-emerald-brand border border-emerald-brand/30 font-mono">
                Studio
              </span>
            </h1>
            <p className="text-xs text-slate-muted mt-1">
              Plataforma de Autoría Docente, Moderación & Gobernanza
            </p>
          </div>
        </div>

        {/* Login Form Feature */}
        <LoginForm />
      </main>
    </div>
  );
}
