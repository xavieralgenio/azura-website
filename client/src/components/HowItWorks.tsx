import { MessageCircle, Brain, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Guest Messages",
      description:
        "A guest reaches out through your website chat, Facebook Messenger, or WhatsApp with a question or booking request.",
    },
    {
      icon: Brain,
      title: "Azura Understands & Acts",
      description:
        "Azura AI analyzes the message, understands intent, retrieves relevant information, and generates a personalized response.",
    },
    {
      icon: CheckCircle,
      title: "Booking Confirmed Automatically",
      description:
        "If it's a booking, Azura collects details, confirms availability, and saves the reservation directly to your system.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            How Azura AI Works
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Three simple steps to autonomous guest management and increased bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg relative z-10">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon className="w-10 h-10 text-green-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-700 mb-6">
            All of this happens in seconds, 24/7, without human intervention.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 rounded-full">
            <span className="text-sm font-semibold text-green-900">
              ⚡ Average Response Time: &lt;2 seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
