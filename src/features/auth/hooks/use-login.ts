"use client";

import { useState } from "react";
import { DemoAccount, LoginCredentials, UserRole } from "../types";
import { useRouter } from "next/navigation";
import { useAuth } from "../auth-context";

export const DEMO_ACCOUNTS: Record<UserRole, DemoAccount> = {
  instructor: {
    id: "instructor",
    label: "Docente",
    name: "Prof. Mateo Silva",
    email: "mateo.silva@wordtap.app",
    password: "ProfMateo2026!",
    roleHint: "Rol: Docente Autorizado • Autoría de cursos, cohortes y bancos propios",
    title: "Docente Autorizado",
    avatarInitials: "MS",
    scope: "Portal Docente: studio.wordtap.app",
  },
  moderator: {
    id: "moderator",
    label: "Moderadora",
    name: "Lic. Elena Ramos",
    email: "elena.ramos@wordtap.app",
    password: "ModElena2026!",
    roleHint: "Rol: Moderadora de Contenidos • Cola de aprobación, reportes y revisión pedagógica",
    title: "Moderadora Oficial (Calidad)",
    avatarInitials: "ER",
    scope: "Consola de Revisión: approvals.wordtap.app",
  },
  admin: {
    id: "admin",
    label: "Admin",
    name: "Carlos Morales",
    email: "admin@wordtap.app",
    password: "AdminMaster2026!",
    roleHint: "Rol: Super Administrador • Gobernanza, Stripe, AdMob y RBAC",
    title: "Super Administrador",
    avatarInitials: "CM",
    scope: "Consola de Gobernanza: admin.wordtap.app",
  },
};

export function useLogin() {
  const router = useRouter();
  const auth = useAuth();
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

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!credentials.email.trim()) {
      setStatusMessage("Por favor ingresá tu correo institucional.");
      return;
    }

    setIsLoading(true);
    setStatusMessage("Validando credenciales...");

    let role = selectedRole || "instructor";
    if (credentials.email.includes("elena") || credentials.email.includes("moderator")) {
      role = "moderator";
    } else if (credentials.email.includes("admin")) {
      role = "admin";
    }

    setTimeout(() => {
      setIsLoading(false);
      auth.login(role);
    }, 200);
  };

  const handleGoogleSso = () => {
    setIsLoading(true);
    setStatusMessage("Conectando con Google Workspace...");
    setTimeout(() => {
      setIsLoading(false);
      auth.login("instructor");
    }, 200);
  };

  const bypassToDashboard = () => {
    auth.login(selectedRole);
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
    bypassToDashboard,
  };
}
