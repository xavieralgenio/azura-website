import { ReactNode, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage?: string;
  breadcrumbs?: Array<{ label: string; path?: string }>;
}

export default function DashboardLayout({
  children,
  currentPage,
  breadcrumbs,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Global Navbar */}
      <DashboardNavbar currentPage={currentPage} />

      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar isOpen={sidebarOpen} onToggle={setSidebarOpen} />

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-0" : "lg:ml-0"}`}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {index > 0 && <span className="text-slate-400">/</span>}
                    {crumb.path ? (
                      <a
                        href={crumb.path}
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        {crumb.label}
                      </a>
                    ) : (
                      <span className="text-slate-600 font-medium">{crumb.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Page Content */}
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
