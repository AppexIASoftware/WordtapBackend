export interface TeacherKPI {
  id: string;
  title: string;
  badgeText: string;
  badgeVariant?: "emerald" | "mint" | "default";
  value: string;
  subValue: string;
  footerDotColor?: string;
  footerText: string;
  actionText?: string;
}

export interface HeatmapItem {
  term: string;
  errorRate: number;
  phonetics: string;
  grammarType: string;
  note: string;
  status: "critical" | "warning" | "moderate";
}

export interface CoursePipelineItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeVariant: "emerald" | "amber";
  actionLabel?: string;
}
