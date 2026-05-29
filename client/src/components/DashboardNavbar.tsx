import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, Settings, User } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";

interface DashboardNavbarProps {
  currentPage?: string;
}

export default function DashboardNavbar({ currentPage }: DashboardNavbarProps) {
  const [, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "Product", path: "/see-azura" },
    { label: "Demo", path: "/book-demo" },
    { label: "Free Trial", path: "/start-free-trial" },
    { label: "Dashboard", path: "/dashboard" },
  ];

  const handleNavigation = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    setIsProfileOpen(false);
    try {
      await signOut();
      setLocation("/");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Unable to log out. Please try again.");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleNavigation("/")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-blue-900 hidden sm:inline">Azura AI</span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.label
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Profile & Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Profile Menu */}
          <div className="hidden md:flex items-center gap-4 relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-slate-700 hidden sm:inline">
                Account
              </span>
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                <button
                  onClick={() => {
                    setLocation("/dashboard/settings");
                    setIsProfileOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-slate-200"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-blue-600" />
            ) : (
              <Menu className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === link.label
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-slate-200 pt-3 mt-3">
              <button
                onClick={() => {
                  setLocation("/dashboard/settings");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
