// Define categories for skills filtering
export type SkillCategory = "all" | "frontend" | "backend" | "tools";

// Interface for individual skill item
export interface SkillItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools";
  description: string;
  badge: string;
  iconName: string;
}

// Interface for navigation links
export interface NavItem {
  label: string;
  href: string;
}
