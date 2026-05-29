import {
  MessageSquare,
  Brain,
  Calendar,
  BarChart3,
  Users,
  Zap,
  Smartphone,
  Shield,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Natural Language Understanding",
      description:
        "Understands conversational questions, handles vague requests, and maintains context across conversations.",
    },
    {
      icon: MessageSquare,
      title: "Conversational Receptionist",
      description:
        "Answers FAQs, explains amenities, provides pricing instantly, and operates 24/7 without fatigue.",
    },
    {
      icon: Calendar,
      title: "Intelligent Booking Management",
      description:
        "Detects booking intent automatically, collects required information, and prevents incomplete reservations.",
    },
    {
      icon: BarChart3,
      title: "Administrative Dashboard",
      description:
        "Unified conversation inbox, analytics & reporting, human takeover option, and booking oversight calendar.",
    },
    {
      icon: Users,
      title: "Persistent Guest Memory",
      description:
        "Remembers returning guests, personalizes conversations, and builds long-term relationships.",
    },
    {
      icon: Zap,
      title: "Agentic Task Execution",
      description:
        "Saves bookings automatically, updates reservations, and executes backend actions seamlessly.",
    },
    {
      icon: Smartphone,
      title: "Multi-Channel Communication",
      description:
        "Integrates with Facebook Messenger, website chat, and WhatsApp (coming soon).",
    },
    {
      icon: Shield,
      title: "Hybrid AI Architecture",
      description:
        "Combines LLM reasoning with structured booking logic and persistent memory for reliability.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Powerful Capabilities
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Azura AI combines cutting-edge AI with hospitality expertise to deliver
            results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all border border-slate-200 hover:border-green-300 group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
