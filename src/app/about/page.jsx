"use client";
import React from "react";
import GlobalStyles from "../../components/global-styles";
import GlobalHeader from "../../components/global-header";

function MainComponent() {
  return (
    <div className="min-h-screen font-inter overflow-hidden relative">
      <GlobalStyles />
      <GlobalHeader activePage="/about" />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-5xl font-bold text-center text-[#FD7634] mb-12">
                Company Overview
              </h2>
              <p className="text-xl text-[#050517] leading-relaxed max-w-4xl mx-auto text-center">
                Zenith Agency is a forward-thinking digital solutions partner
                inspired by nature's most adaptable innovators. Drawing wisdom
                from the owl's foresight, the fox's creativity, the turtle's
                resilience, the zebra's boldness, and the eagle's leadership, we
                craft strategies that transcend conventional limits. Our team
                merges data-driven precision with imaginative flair to deliver
                transformative growth for brands in the modern marketplace.
              </p>
            </div>
          </div>
          <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-5xl font-bold text-center text-[#FD7634] mb-16">
                Vision & Mission
              </h2>
              <div className="space-y-12">
                <div className="border-2 border-[#FD7634] rounded-2xl p-12 w-full">
                  <div className="flex items-center mb-8">
                    <i className="far fa-eye text-4xl text-[#FD7634] mr-6"></i>
                    <h2 className="text-4xl font-bold text-[#050517]">
                      Vision
                    </h2>
                  </div>
                  <p className="text-[#050517] text-xl leading-relaxed">
                    To redefine digital excellence by harmonizing strategy,
                    creativity, and technology—mirroring the symbiotic
                    brilliance of nature's greatest innovators.
                  </p>
                </div>
                <div className="border-2 border-[#FD7634] rounded-2xl p-12 w-full">
                  <div className="flex items-center mb-8">
                    <i className="fas fa-bullseye text-4xl text-[#FD7634] mr-6"></i>
                    <h2 className="text-4xl font-bold text-[#050517]">
                      Mission
                    </h2>
                  </div>
                  <p className="text-[#050517] text-xl leading-relaxed">
                    To empower brands with agile, insight-led strategies that
                    reflect the owl's analytical rigor, the fox's inventive
                    spark, and the turtle's enduring resilience, ensuring
                    lasting competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#222222] py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl font-bold mb-8 text-center text-[#fc7734]">
              Meet the Guardians
            </h2>
            <p className="text-3xl text-center text-white mb-16">
              How Five Misfit Guardians Rewrote the Rules of Digital Excellence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "fas fa-paw",
                  animal: "The Zebra",
                  name: "Inky",
                  role: "Design Maverick",
                  value: "Boldness",
                  desc: "Transforming brand identities with bold, market-defining aesthetics",
                },
                {
                  icon: "fa-eye",
                  animal: "The Owl",
                  name: "Cosmo",
                  role: "Chief Strategist",
                  value: "Wisdom",
                  desc: "Crafting data-driven strategies with unparalleled market insight",
                },
                {
                  icon: "fas fa-feather",
                  animal: "The Eagle",
                  name: "Ace",
                  role: "Vision Director",
                  value: "Leadership",
                  desc: "Guiding brands to new heights with strategic excellence",
                },
                {
                  icon: "fas fa-fire",
                  animal: "The Fox",
                  name: "Buddy",
                  role: "Innovation Lead",
                  value: "Creativity",
                  desc: "Pioneering breakthrough solutions in digital landscapes",
                },
                {
                  icon: "fa-shield",
                  animal: "The Turtle",
                  name: "Byte",
                  role: "Tech Architect",
                  value: "Resilience",
                  desc: "Building robust digital foundations that stand the test of time",
                },
              ].map((guardian, index) => (
                <div
                  key={index}
                  className="bg-[#333333] p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
                >
                  <i
                    className={`${
                      guardian.animal === "The Turtle"
                        ? "fas fa-shield-alt"
                        : `far ${guardian.icon}`
                    } text-[#fc7734] text-4xl mb-6 icon-float`}
                  ></i>
                  <h3 className="text-[#fc7734] text-2xl font-bold mb-2">
                    {guardian.animal}
                  </h3>
                  <h4 className="text-white text-xl font-bold mb-1">
                    {guardian.name}
                  </h4>
                  <p className="text-gray-300 text-lg mb-4">{guardian.role}</p>
                  <div className="bg-[#fc7734] px-4 py-1 rounded-full mb-4">
                    <span className="text-white font-bold">
                      {guardian.value}
                    </span>
                  </div>
                  <p className="text-white text-lg">{guardian.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-6xl font-bold text-center text-[#fc7734] mb-16">
                Why We Roar Louder
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "fas fa-paw",
                    title: "Creative Excellence",
                    desc: "Crafting distinctive brand experiences that captivate audiences and inspire meaningful connections.",
                  },
                  {
                    icon: "fa-eye",
                    title: "Strategic Vision",
                    desc: "Transforming market insights into actionable strategies that drive measurable growth and lasting impact.",
                  },
                  {
                    icon: "fas fa-feather",
                    title: "Visionary Leadership",
                    desc: "Guiding brands through digital transformation with confidence and strategic foresight.",
                  },
                  {
                    icon: "fas fa-fire",
                    title: "Digital Innovation",
                    desc: "Pioneering cutting-edge solutions that push boundaries and redefine industry standards.",
                  },
                  {
                    icon: "fa-shield-alt",
                    title: "Technical Mastery",
                    desc: "Building robust digital infrastructure that ensures scalability, security, and seamless performance.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center border-2 border-[#fc7734]"
                  >
                    <i
                      className={`${
                        item.icon === "fa-shield-alt" ? "fas" : "far"
                      } ${item.icon} text-[#fc7734] text-4xl mb-6 icon-float`}
                    ></i>
                    <h3 className="text-[#333333] text-2xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
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
        .shield-icon {
          background: linear-gradient(90deg, #fc7734 50%, transparent 50%);
          -webkit-background-clip: text;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;