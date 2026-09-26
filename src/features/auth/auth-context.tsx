"use client";

import React, { createContext, useContext, useState } from "react";
import { UserRole, UserProfile, AuthContextValue } from "./types";
import { DEMO_ACCOUNTS } from "./hooks/use-login";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState<UserRole>("instructor");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const getProfile = (role: UserRole): UserProfile => {
    const acc = DEMO_ACCOUNTS[role];
    return {
      id: acc.id,
      name: acc.name,
      email: acc.email,
      role: acc.id,
      title: acc.title,
      avatarInitials: acc.avatarInitials,
      scope: acc.scope,
    };
  };

  const [user, setUser] = useState<UserProfile>(() => getProfile("instructor"));

  const switchRole = (role: UserRole) => {
    setCurrentRole(role);
    setUser(getProfile(role));
  };

  const login = (role: UserRole = "instructor") => {
    setIsAuthenticated(true);
    switchRole(role);
    router.push(role === "instructor" ? "/teacher" : "/dashboard");
  };

  const logout = () => {
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        currentRole,
        isAuthenticated,
        switchRole,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
