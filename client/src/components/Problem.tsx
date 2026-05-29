import { Clock, Users, MessageSquare, Zap } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Slow Responses",
      description: "Guests wait hours for replies, leading to lost bookings and frustration.",
    },
    {
      icon: Users,
      title: "Staff Overload",
      description: "Your team is drowning in repetitive inquiries and manual booking processes.",
    },
    {
      icon: MessageSquare,
      title: "Missed Bookings",
      description: "Incomplete reservations and fragmented communication channels cost revenue.",
    },
    {
      icon: Zap,
      title: "24/7 Expectations",
      description: "Guests expect instant support, but your team can't be available around the clock.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            The Hospitality Challenge
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Modern guests demand instant, personalized responses. Traditional reception can't keep up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
