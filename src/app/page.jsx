"use client";
import React from "react";
import GlobalStyles from "../components/global-styles";
import GlobalHeader from "../components/global-header";

function MainComponent() {
  return (
    <div className="min-h-screen font-inter overflow-hidden relative">
      <GlobalStyles />
      <GlobalHeader activePage="/" />
      <div className="relative">
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-white p-8 rounded-lg mb-12">
                <img
                  src="https://ucarecdn.com/57b8154e-92f3-4fb4-a901-46954d5f0cec/-/format/auto/"
                  alt="ZENITH Logo"
                  className="h-96 w-auto"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 text-[#FF7043] leading-tight">
                  Where Strategy, Creativity, and Technology Converge
                </h1>
                <p className="text-xl mb-8 text-[#222222] max-w-3xl mx-auto">
                  Drawing wisdom from nature's most adaptable innovators, we
                  craft strategies that transcend conventional limits.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="/about"
                    className="bg-[#FF7043] hover:bg-[#E64A19] text-white px-8 py-3 rounded transition-colors duration-300"
                  >
                    About Us
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-[#FF7043] hover:bg-[#FF7043] text-[#FF7043] hover:text-white px-8 py-3 rounded transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#222222] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#FF7043]">
              Our Guardians
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  icon: "paw",
                  name: "The Zebra",
                  guardian: "Inky",
                  role: "Design Maverick",
                  value: "Boldness",
                  desc: "Stand out fearlessly. Striking design that balances uniqueness and relevance.",
                },
                {
                  icon: "eye",
                  name: "The Owl",
                  guardian: "Cosmo",
                  role: "Chief Strategist",
                  value: "Wisdom",
                  desc: "Strategize with clarity. Data-driven insights meet cultural fluency and foresight.",
                },
                {
                  icon: "feather",
                  name: "The Eagle",
                  guardian: "Ace",
                  role: "Visionary CEO",
                  value: "Leadership",
                  desc: "Lead with vision. Soar above challenges with strategic dominance.",
                },
                {
                  icon: "fire",
                  name: "The Fox",
                  guardian: "Buddy",
                  role: "Creative Alchemist",
                  value: "Creativity",
                  desc: "Disrupt boldly. Imagination fuels campaigns that captivate and convert.",
                },
                {
                  icon: "shield-alt",
                  name: "The Turtle",
                  guardian: "Byte",
                  role: "Tech Sentinel",
                  value: "Resilience",
                  desc: "Build unshakably. Secure, scalable tech foundations for future-proof growth.",
                },
              ].map((guardian, index) => (
                <div
                  key={index}
                  className="bg-[#333333] p-6 text-white rounded-lg hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-[#FF7043] icon-float">
                    <i className={`fas fa-${guardian.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{guardian.name}</h3>
                  <div className="text-[#FF7043] font-medium mb-2">
                    {guardian.guardian}
                  </div>
                  <div className="text-sm text-gray-300 mb-2">
                    {guardian.role}
                  </div>
                  <div className="text-sm font-bold text-[#FF7043] mb-2">
                    {guardian.value}
                  </div>
                  <p className="text-sm text-gray-300">{guardian.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#FF7043]">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-[#FF7043] p-6 text-[#222222] flex flex-col items-center text-center">
                <div className="text-4xl text-[#FF7043] icon-float mb-6">
                  <i className="fas fa-paw"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Zebra-Striped Design
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">Led by Inky</div>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      Full-spectrum design
                    </li>
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      Brand identity
                    </li>
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      Visual innovation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-[#FF7043] p-6 text-[#222222] flex flex-col items-center text-center">
                <div className="text-4xl text-[#FF7043] icon-float mb-6">
                  <i className="fas fa-fire"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fox Creative Labs</h3>
                  <div className="text-sm text-gray-600 mb-4">Led by Buddy</div>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      Creative campaigns
                    </li>
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      Content creation
                    </li>
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      Innovation design
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-[#FF7043] p-6 text-[#222222] flex flex-col items-center text-center">
                <div className="text-4xl text-[#FF7043] icon-float mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    TurtleTech Solutions
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">Led by Byte</div>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      Tech infrastructure
                    </li>
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      Security solutions
                    </li>
                    <li className="flex items-center justify-center">
                      <i className="fas fa-check text-[#FF7043] mr-2"></i>
                      System optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="/services"
                className="inline-block bg-[#FF7043] hover:bg-[#E64A19] text-white px-8 py-3 rounded"
              >
                See All Services
              </a>
            </div>
          </div>
        </div>

        <section className="bg-white py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FF7043]">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {[
              {
                icon: "clipboard",
                title: "Planning",
                desc: "Strategic project planning",
              },
              {
                icon: "paintbrush",
                title: "Design",
                desc: "Creative design process",
              },
              {
                icon: "code",
                title: "Development",
                desc: "Efficient implementation",
              },
              {
                icon: "rocket",
                title: "Launch",
                desc: "Successful deployment",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#FF7043] p-6 text-[#222222] text-center"
              >
                <div className="text-2xl text-[#FF7043] icon-float mb-4">
                  <i className={`fas fa-${step.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
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