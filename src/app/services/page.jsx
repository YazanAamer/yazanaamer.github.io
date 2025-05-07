"use client";
import React from "react";
import GlobalHeader from "../../components/global-header";

function MainComponent() {
  const processSteps = [
    {
      icon: "far fa-lightbulb",
      title: "Discovery",
      desc: "Understanding your goals and vision",
    },
    {
      icon: "fas fa-pencil-ruler",
      title: "Strategy",
      desc: "Creating a tailored action plan",
    },
    {
      icon: "fas fa-code",
      title: "Development",
      desc: "Building innovative solutions",
    },
    {
      icon: "fas fa-rocket",
      title: "Launch",
      desc: "Deploying and optimizing results",
    },
  ];

  return (
    <div className="min-h-screen font-inter overflow-hidden relative">
      <GlobalHeader activePage="/services" />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 relative">
          <div className="text-center mb-32">
            <h1 className="text-5xl font-extrabold text-[#FF7043] mb-6">
              Our Services
            </h1>
            <h2 className="text-4xl font-bold text-black mb-8">
              Transforming Visions into Digital Reality
            </h2>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
              We deliver comprehensive digital solutions that drive business
              growth and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              {
                icon: "fas fa-paint-brush",
                title: "Brand Identity & Design",
                services: [
                  "Logo/UI/UX design",
                  "Visual storytelling",
                  "Rebranding",
                ],
              },
              {
                icon: "fas fa-laptop",
                title: "Technology Solutions",
                services: [
                  "Custom app development",
                  "ERP integration",
                  "Cybersecurity",
                ],
              },
              {
                icon: "fas fa-bullhorn",
                title: "Digital Marketing Mastery",
                services: [
                  "SEO/SEM",
                  "Social media management",
                  "Influencer partnerships",
                ],
              },
              {
                icon: "fas fa-chart-bar",
                title: "Client Growth Optimization",
                services: [
                  "Customer journey mapping",
                  "ROI analytics",
                  "Retention strategies",
                ],
              },
              {
                icon: "fas fa-globe",
                title: "Global Market Expansion",
                services: [
                  "Localization",
                  "Multilingual SEO",
                  "International campaign strategy",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#FF7043] p-12 transition-all duration-300 hover:border-[#E64A19]"
              >
                <div className="text-5xl mb-8 icon-float">
                  <i className={`${service.icon} text-[#FF7043]`}></i>
                </div>
                <h3 className="text-xl font-bold mb-6 text-black">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-start text-black">
                      <i className="far fa-check-circle text-[#FF7043] mr-3 mt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#222222]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-32">
              <h2 className="text-4xl font-bold text-center text-white mb-16">
                Our Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-[#222222] border-2 border-[#FF7043] p-8 text-center"
                  >
                    <i
                      className={`${step.icon} text-4xl text-[#FF7043] mb-6 icon-float`}
                    ></i>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white text-lg">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mb-32 py-16 bg-white border-2 border-[#FF7043]">
            <h2 className="text-4xl font-bold mb-8 text-black">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-12 text-black">
              Let's create innovative solutions together
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#FF7043] text-white px-12 py-4 text-xl rounded hover:bg-[#E64A19] transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <></>
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .icon-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;