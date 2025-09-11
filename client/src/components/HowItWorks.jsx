import React from "react";
import {
  MagnifyingGlassIcon,
  UserPlusIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const HowItWorks = () => {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: "Search",
      description:
        "Browse verified Fundis by location, skill, and rating. Use filters to find exactly what you need.",
      color: "text-pink-500",
    },
    {
      icon: UserPlusIcon,
      title: "Hire",
      description:
        "Connect directly with your chosen Fundi. Discuss your project and agree on terms through our secure platform.",
      color: "text-pink-400",
    },
    {
      icon: CreditCardIcon,
      title: "Pay",
      description:
        "Pay securely through M-Pesa integration. Money is held safely until work is completed to your satisfaction.",
      color: "text-pink-300",
    },
  ];

  return (
    <section id='how-it-works' className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How FundiFind{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting quality work done has never been easier. Follow these simple
            steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white/30 backdrop-blur-md rounded-3xl p-8 text-center shadow-md transition hover:scale-105 group"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-300 rounded-full flex items-center justify-center text-white font-bold shadow">
                    {index + 1}
                  </div>
                </div>

                <div
                  className={`w-16 h-16 mx-auto mb-6 ${step.color} bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-300 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
