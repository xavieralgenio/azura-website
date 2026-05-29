import { useLocation } from "wouter";
import {
  BarChart3,
  MessageSquare,
  Calendar,
  BookOpen,
  Settings,
  Zap,
  Plug,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface DashboardSidebarProps {
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
}

export default function DashboardSidebar({ isOpen = true, onToggle }: DashboardSidebarProps) {
  const [, setLocation] = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Overview",
      icon: BarChart3,
      path: "/dashboard",
      section: "main",
    },
    {
      label: "Conversations Inbox",
      icon: MessageSquare,
      path: "/dashboard/conversations",
      section: "main",
    },
    {
      label: "Bookings",
      icon: Calendar,
      path: "/dashboard/bookings",
      section: "main",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      path: "/dashboard/analytics",
      section: "main",
    },
    {
      label: "Knowledge Base",
      icon: BookOpen,
      path: "/dashboard/knowledge",
      section: "settings",
    },
    {
      label: "AI Settings",
      icon: Zap,
      path: "/dashboard/ai-settings",
      section: "settings",
    },
    {
      label: "Integrations",
      icon: Plug,
      path: "/dashboard/integrations",
      section: "settings",
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
      section: "settings",
    },
  ];

  const handleNavigation = (path: string) => {
    setLocation(path);
  };

  const sections = {
    main: { title: "Main", items: menuItems.filter((item) => item.section === "main") },
    settings: { title: "Configuration", items: menuItems.filter((item) => item.section === "settings") },
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => onToggle?.(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-16 left-0 h-[calc(100vh-4rem)] bg-slate-50 border-r border-slate-200 transition-all duration-300 z-30 ${
          isOpen ? "w-64" : "w-0 lg:w-64"
        } overflow-hidden lg:overflow-auto`}
      >
        <div className="p-6 space-y-8">
          {Object.entries(sections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <nav className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = window.location.pathname === item.path;

                  return (
                    <button
                      key={item.path}
                      onClick={() => {
                        handleNavigation(item.path);
                        if (window.innerWidth < 1024) {
                          onToggle?.(false);
                        }
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-blue-100 text-blue-600 font-medium shadow-sm"
                          : "text-slate-700 hover:bg-white hover:text-blue-600"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="flex-1 text-left text-sm">{item.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden top-16"
          onClick={() => onToggle?.(false)}
        />
      )}
    </>
  );
}
