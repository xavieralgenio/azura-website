import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

interface HeaderProps {
  onBookDemoClick?: () => void;
}

export default function Header({ onBookDemoClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const navigateTo = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Product", path: "/see-azura" },
    { label: "Pricing", path: "/#pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo("/")}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-blue-900 hidden sm:inline">Azura AI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigateTo(item.path)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex border-blue-300 text-blue-600 hover:bg-blue-50"
            onClick={() => navigateTo("/start-free-trial")}
          >
            Free Trial
          </Button>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => navigateTo("/book-demo")}
          >
            Book Demo
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-blue-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-blue-600" />
            ) : (
              <Menu className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <Button
                onClick={() => navigateTo("/start-free-trial")}
                variant="outline"
                className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                size="sm"
              >
                Free Trial
              </Button>
              <Button
                onClick={() => navigateTo("/book-demo")}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="sm"
              >
                Book Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
