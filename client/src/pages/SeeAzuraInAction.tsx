import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { trackEvent } from "@/lib/api";

interface Message {
  type: "guest" | "azura";
  text: string;
  delay: number;
}

const demoConversation: Message[] = [
  { type: "guest", text: "Do you have rooms this weekend?", delay: 0 },
  { type: "azura", text: "Great question! We have several room types available. What dates are you looking at?", delay: 2000 },
  { type: "guest", text: "May 18-20 for 2 guests", delay: 4500 },
  { type: "azura", text: "Perfect! We have Deluxe Ocean View and Suite options. Deluxe is $250/night, Suite is $350/night. Which interests you?", delay: 7000 },
  { type: "guest", text: "Deluxe Ocean View sounds great. Can I book it?", delay: 9500 },
  { type: "azura", text: "Absolutely! I'll secure your reservation. I have your details from our chat. Confirming: 2 guests, May 18-20, Deluxe Ocean View at $250/night. Total: $750. Shall I complete the booking?", delay: 12000 },
  { type: "guest", text: "Yes, please proceed", delay: 14500 },
  { type: "azura", text: "✓ Booking confirmed! Reservation #AZ-2024-5847. Confirmation email sent. Welcome to our resort! 🎉", delay: 17000 },
];

export default function SeeAzuraInAction() {
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    trackEvent("product_demo_viewed");

    // Simulate message typing
    const timeouts: NodeJS.Timeout[] = [];

    demoConversation.forEach((msg, index) => {
      const timeout = setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
        if (index === demoConversation.length - 1) {
          setIsComplete(true);
        }
      }, msg.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            See Azura AI in Action
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Watch how Azura AI handles a complete guest booking conversation in real-time.
          </p>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Chat Demo */}
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
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    <p>Starting conversation...</p>
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.type === "guest" ? "justify-end" : "justify-start"} animate-fade-in`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-3 max-w-xs ${
                          msg.type === "guest"
                            ? "bg-slate-900 text-white rounded-tr-none"
                            : "bg-amber-100 text-slate-900 rounded-tl-none"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="bg-white border-t border-slate-200 p-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  disabled
                  className="flex-1 bg-slate-100 rounded-lg px-4 py-2 text-sm outline-none text-slate-400"
                />
                <button disabled className="bg-amber-600 text-white rounded-lg px-4 py-2 transition-colors opacity-50">
                  Send
                </button>
              </div>
            </div>

            {/* Features Explanation */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  What You Just Saw
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    🤖 Conversational Receptionist
                  </h3>
                  <p className="text-slate-700">
                    Azura AI understands natural language, asks clarifying questions, and provides personalized responses just like a real receptionist.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    📅 Automated Booking Capture
                  </h3>
                  <p className="text-slate-700">
                    Collects guest details, checks availability, applies pricing, and completes reservations—all within the conversation.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    💾 Persistent Guest Memory
                  </h3>
                  <p className="text-slate-700">
                    Remembers guest preferences and history across multiple conversations for personalized future interactions.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    📊 Multi-Channel Messaging
                  </h3>
                  <p className="text-slate-700">
                    Works seamlessly across your website chat, WhatsApp, Facebook Messenger, and other platforms.
                  </p>
                </div>
              </div>

              {isComplete && (
                <div className="pt-8 space-y-4 animate-fade-in">
                  <p className="text-slate-600 text-sm">
                    Ready to automate your resort's reception?
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setLocation("/book-demo")}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      size="lg"
                    >
                      Book Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      onClick={() => setLocation("/start-free-trial")}
                      variant="outline"
                      className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50"
                      size="lg"
                    >
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Diagram */}
      <div className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            How Azura AI Works
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Guest Message
                  </h3>
                  <p className="text-slate-600">
                    Guest sends a message through chat, WhatsApp, or your website
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-green-600"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    LLM Understanding
                  </h3>
                  <p className="text-slate-600">
                    Advanced AI understands intent, context, and extracts key information
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-purple-600"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Agent Decision
                  </h3>
                  <p className="text-slate-600">
                    Determines best response: answer question, collect info, or escalate to human
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-orange-600"></div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Booking Execution
                  </h3>
                  <p className="text-slate-600">
                    Completes booking, sends confirmation, and updates your system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Reception?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join leading resorts using Azura AI to increase bookings and reduce staff workload.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setLocation("/book-demo")}
              className="bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              Book Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={() => setLocation("/start-free-trial")}
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              size="lg"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
