import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  onBookDemoClick?: () => void;
  onZoomClick?: () => void;
}

export default function Hero({ onBookDemoClick, onZoomClick }: HeroProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663505550514/SgdDVpMHDBqsjgKfRZy2cQ/azura-hero-bg-TicvuJJFjkj3Kh2mg5fRjk.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className={`${isAnimating ? "animate-fade-in-up" : ""}`}>


          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Your Resort's Autonomous AI Receptionist
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Azura AI understands guest questions, answers instantly, and completes bookings automatically—24/7. Increase direct bookings while reducing staff workload.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-base"
              onClick={onBookDemoClick}
            >
              Book Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base"
              onClick={() => window.location.href = "/#pricing"}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div>
              <div className="font-bold text-slate-900">92%</div>
              <div>Booking Completion</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div>
              <div className="font-bold text-slate-900">&lt;2s</div>
              <div>Response Time</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div>
              <div className="font-bold text-slate-900">24/7</div>
              <div>Always Available</div>
            </div>
          </div>
        </div>

        {/* Right: Chat Demo */}
        <div
          className={`relative ${isAnimating ? "animate-slide-in-right" : ""}`}
        >
          <div className="relative">
            {/* Chat Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    Azura AI
                  </div>
                  <div className="text-slate-300 text-xs">Online</div>
                </div>
              </div>

              <div className="p-6 space-y-4 h-96 overflow-y-auto bg-slate-50">
                {/* Guest Message */}
                <div className="flex justify-end">
                  <div className="bg-slate-900 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                    <p className="text-sm">
                      Hi, I'd like to book a room for next weekend
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-amber-100 text-slate-900 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                    <p className="text-sm">
                      Great! I'd be happy to help. How many guests will be
                      staying?
                    </p>
                  </div>
                </div>

                {/* Guest Response */}
                <div className="flex justify-end">
                  <div className="bg-slate-900 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                    <p className="text-sm">Two adults and one child</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-amber-100 text-slate-900 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                    <p className="text-sm">
                      Perfect! Which room type interests you?
                    </p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex justify-end">
                  <div className="bg-slate-900 text-white rounded-2xl rounded-tr-none px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-t border-slate-200 p-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-100 rounded-lg px-4 py-2 text-sm outline-none"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-4 py-2 transition-colors">
                  Send
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full px-4 py-2 font-semibold text-sm shadow-lg">
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
