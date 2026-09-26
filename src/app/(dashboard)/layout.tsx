import { DashboardShell } from "@/components/layout/dashboard-shell";

export const metadata = {
  title: "Dashboard Pedagógico — Wordtap Studio",
  description: "Monitoreo en tiempo real de retención, rendimiento y pipeline de cursos.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
