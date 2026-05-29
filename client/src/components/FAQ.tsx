import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does Azura AI work?",
    answer: "Azura AI uses advanced natural language processing to understand guest inquiries and respond instantly. It can handle common questions about rooms, availability, pricing, and can even complete bookings automatically. Our system learns from your resort's specific information and policies.",
  },
  {
    question: "Can Azura AI integrate with my existing booking system?",
    answer: "Yes! Azura AI integrates with most major booking systems and property management software. We support custom integrations as well. Our team will help you set up the connection during onboarding.",
  },
  {
    question: "What languages does Azura AI support?",
    answer: "Azura AI supports 25+ languages including English, Spanish, French, German, Chinese, Japanese, and more. You can enable multiple languages for your guests.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! Every plan includes a 14-day free trial with full access to all features. No credit card required to start.",
  },
  {
    question: "How long does setup take?",
    answer: "Setup typically takes 2-4 hours. Our onboarding team will guide you through connecting your booking system, uploading your resort information, and training the AI on your specific policies.",
  },
  {
    question: "What if guests need to speak to a human?",
    answer: "Azura AI seamlessly hands off conversations to your team when needed. You can set up rules for when to escalate to human agents, and your staff gets full context of the conversation.",
  },
  {
    question: "How secure is guest data?",
    answer: "We use enterprise-grade encryption and comply with GDPR, CCPA, and other data protection regulations. All data is stored securely and never shared with third parties.",
  },
  {
    question: "Can I customize Azura AI for my resort?",
    answer: "Absolutely! You can customize responses, set specific policies, configure pricing rules, and train the AI on your resort's unique offerings and procedures.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Find answers to common questions about Azura AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="text-left font-semibold text-slate-900 text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
