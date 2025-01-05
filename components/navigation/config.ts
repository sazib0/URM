import {
  LayoutDashboard,
  Box,
  LineChart,
  FileText,
  DollarSign,
  Link2,
  Settings,
  HelpCircle,
} from "lucide-react";

export const navigationConfig = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Resources",
    icon: Box,
    items: [
      { title: "Inventory", href: "/resources/inventory" },
      { title: "Allocation", href: "/resources/allocation" },
      { title: "Utilization", href: "/resources/utilization" },
    ],
  },
  {
    title: "Planning",
    icon: LineChart,
    items: [
      { title: "Capacity Planning", href: "/planning/capacity" },
      { title: "Forecasting", href: "/planning/forecasting" },
    ],
  },
  {
    title: "Reports",
    icon: FileText,
    items: [
      { title: "Resource Reports", href: "/reports/resources" },
      { title: "Financial Reports", href: "/reports/financial" },
      { title: "Custom Reports", href: "/reports/custom" },
    ],
  },
  {
    title: "Financials",
    icon: DollarSign,
    items: [
      
    ],
  },
  { title: "Integrations", href: "/integrations", icon: Link2 },
  {
    title: "Settings",
    icon: Settings,
    items: [
      { title: "User Management", href: "/settings/users" },
      { title: "Roles & Permissions", href: "/settings/roles" },
      { title: "System Preferences", href: "/settings/preferences" },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    items: [
      { title: "Help Center", href: "/support/help" },
      { title: "Documentation", href: "/support/docs" },
      { title: "Contact Support", href: "/support/contact" },
    ],
  },
];