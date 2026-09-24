"use client";

import { useState } from "react";
import { DemoAccount, LoginCredentials, UserRole } from "../types";

export const DEMO_ACCOUNTS: Record<UserRole, DemoAccount> = {
  instructor: {
    id: "instructor",
    label: "Docente",
    name: "Prof. Mateo Silva",
    email: "mateo.silva@wordtap.app",
    password: "ProfMateo2026!",
    roleHint: "Rol: Docente Autorizado • Autoría de cursos, cohortes y bancos propios",
  },
  moderator: {
    id: "moderator",
    label: "Moderadora",
    name: "Lic. Elena Ramos",
    email: "elena.ramos@wordtap.app",
    password: "ModElena2026!",
    roleHint: "Rol: Moderadora de Contenidos • Cola de aprobación, reportes y revisión pedagógica",
  },
  admin: {
    id: "admin",
    label: "Admin",
    name: "Carlos Mendoza",
    email: "carlos.mendoza@wordtap.app",
    password: "AdminMaster2026!",
    roleHint: "Rol: Super Administrador • Gobernanza, Stripe, AdMob y RBAC",
  },
};

export function useLogin() {
  const [selectedRole, setSelectedRole] = useState<UserRole>("instructor");
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: DEMO_ACCOUNTS.instructor.email,
    password: DEMO_ACCOUNTS.instructor.password,
    rememberMe: true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const selectRole = (role: UserRole) => {
    setSelectedRole(role);
    const demo = DEMO_ACCOUNTS[role];
    setCredentials((prev) => ({
      ...prev,
      email: demo.email,
      password: demo.password,
    }));
  };

  const handleEmailChange = (email: string) => {
    setCredentials((prev) => ({ ...prev, email }));
  };

  const handlePasswordChange = (password: string) => {
    setCredentials((prev) => ({ ...prev, password }));
  };

  const handleRememberMeChange = (rememberMe: boolean) => {
    setCredentials((prev) => ({ ...prev, rememberMe }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!credentials.email.trim() || !credentials.password) {
      setStatusMessage("Por favor ingresá tu correo y contraseña.");
      return;
    }

    setIsLoading(true);
    setStatusMessage("Validando credenciales...");

    // Simulación de autenticación (BFF / Identity en siguientes fases)
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage(`Sesión iniciada con éxito como ${selectedRole}`);
    }, 600);
  };

  const handleGoogleSso = () => {
    setIsLoading(true);
    setStatusMessage("Conectando con Google Workspace...");
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage("Autenticado con Google Workspace");
    }, 600);
  };

  return {
    selectedRole,
    credentials,
    showPassword,
    isLoading,
    statusMessage,
    currentDemo: DEMO_ACCOUNTS[selectedRole],
    selectRole,
    handleEmailChange,
    handlePasswordChange,
    handleRememberMeChange,
    togglePasswordVisibility,
    handleSubmit,
    handleGoogleSso,
  };
}
