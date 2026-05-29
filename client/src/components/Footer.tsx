import { Mail, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-blue-200 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-white">Azura AI</span>
            </div>
            <p className="text-sm text-blue-300">
              Your resort's autonomous AI receptionist.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-white transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Dashboard
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  API Docs
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Security
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Status Page
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-8 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-blue-300 mb-4 md:mb-0">
            © {currentYear} Azura AI. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <button className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            <button className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
