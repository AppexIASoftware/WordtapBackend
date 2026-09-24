export type UserRole = "instructor" | "moderator" | "admin";

export interface DemoAccount {
  id: UserRole;
  label: string;
  name: string;
  email: string;
  password: string;
  roleHint: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}
