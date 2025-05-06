"use client";
import React from "react";



export default function Index() {
  return (function MainComponent() {
  const colors = {
    primary: "#FF7043",
    primaryDark: "#E64A19",
    primaryAlt: "#fc7734",
    primaryAlt2: "#FD7634",
    black: "#222222",
    text: "#050517",
    white: "#FFFFFF",
    blacks: {
      100: "#666666",
      200: "#555555",
      300: "#444444",
      400: "#333333",
      500: "#2A2A2A",
      600: "#222222",
      700: "#1A1A1A",
      800: "#111111",
      900: "#000000",
    },
    whites: {
      100: "#FFFFFF",
      200: "#FAFAFA",
      300: "#F5F5F5",
      400: "#F0F0F0",
      500: "#EBEBEB",
      600: "#E6E6E6",
      700: "#E0E0E0",
      800: "#DBDBDB",
      900: "#D6D6D6",
    },
    oranges: {
      100: "#FEE8DA",
      200: "#FDD1B5",
      300: "#FCB990",
      400: "#FAA26B",
      500: "#F98B46",
      600: "#fc7734",
      700: "#E56420",
      800: "#D44F12",
      900: "#C33A03",
    },
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#333333",
    },
  };

  const icons = {
    zebra: "fa-paw",
    owl: "fa-eye",
    eagle: "fa-feather",
    fox: "fa-fire",
    turtle: "fas fa-shield-alt",
    planning: "clipboard",
    design: "paintbrush",
    development: "code",
    launch: "rocket",
    vision: "eye",
    mission: "bullseye",
    social: {
      twitter: "twitter",
      linkedin: "linkedin",
      instagram: "instagram",
      facebook: "facebook",
    },
  };

  return (
    <style jsx global>{`
      :root {
        --color-primary: ${colors.primary};
        --color-primary-dark: ${colors.primaryDark};
        --color-primary-alt: ${colors.primaryAlt};
        --color-primary-alt2: ${colors.primaryAlt2};
        --color-black: ${colors.black};
        --color-text: ${colors.text};
        --color-white: ${colors.white};
        
        --color-black-100: ${colors.blacks[100]};
        --color-black-200: ${colors.blacks[200]};
        --color-black-300: ${colors.blacks[300]};
        --color-black-400: ${colors.blacks[400]};
        --color-black-500: ${colors.blacks[500]};
        --color-black-600: ${colors.blacks[600]};
        --color-black-700: ${colors.blacks[700]};
        --color-black-800: ${colors.blacks[800]};
        --color-black-900: ${colors.blacks[900]};

        --color-white-100: ${colors.whites[100]};
        --color-white-200: ${colors.whites[200]};
        --color-white-300: ${colors.whites[300]};
        --color-white-400: ${colors.whites[400]};
        --color-white-500: ${colors.whites[500]};
        --color-white-600: ${colors.whites[600]};
        --color-white-700: ${colors.whites[700]};
        --color-white-800: ${colors.whites[800]};
        --color-white-900: ${colors.whites[900]};

        --color-orange-100: ${colors.oranges[100]};
        --color-orange-200: ${colors.oranges[200]};
        --color-orange-300: ${colors.oranges[300]};
        --color-orange-400: ${colors.oranges[400]};
        --color-orange-500: ${colors.oranges[500]};
        --color-orange-600: ${colors.oranges[600]};
        --color-orange-700: ${colors.oranges[700]};
        --color-orange-800: ${colors.oranges[800]};
        --color-orange-900: ${colors.oranges[900]};

        --color-gray-100: ${colors.gray[100]};
        --color-gray-200: ${colors.gray[200]};
        --color-gray-300: ${colors.gray[300]};
        --color-gray-400: ${colors.gray[400]};
        --color-gray-500: ${colors.gray[500]};
        --color-gray-600: ${colors.gray[600]};
        --color-gray-700: ${colors.gray[700]};
        --color-gray-800: ${colors.gray[800]};
        --color-gray-900: ${colors.gray[900]};
      }

      body {
        color: var(--color-black);
        background: var(--color-white);
      }

      .bg-pattern {
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c20 0 40 20 50 50s10 30 50 30' stroke='%23000000' stroke-width='1' fill='none' stroke-opacity='0.1'/%3E%3C/svg%3E");
        opacity: 0.1;
      }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }

      .icon-float {
        animation: float 3s ease-in-out infinite;
      }

      .icon-pulse {
        animation: pulse 2s ease-in-out infinite;
      }

      .hover-scale {
        transition: transform 0.3s ease-in-out;
      }

      .hover-scale:hover {
        transform: scale(1.05);
      }

      .guardian-icon {
        font-size: 2rem;
        color: var(--color-orange-600);
        margin: 0.5rem;
      }
    `}</style>
  );
},

function StoryComponent() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold mb-4">Global Styles</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-md font-semibold mb-2">Animations</h3>
            <div className="flex gap-4">
              <div className="icon-float p-4 bg-[var(--color-primary)] text-[var(--color-white)] rounded">
                Float Animation
              </div>
              <div className="icon-pulse p-4 bg-[var(--color-primary-dark)] text-[var(--color-white)] rounded">
                Pulse Animation
              </div>
              <div className="hover-scale p-4 bg-[var(--color-primary)] text-[var(--color-white)] rounded">
                Scale on Hover
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">Black Scale</h3>
            <div className="flex gap-2">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                <div
                  key={weight}
                  className={`w-10 h-10 rounded bg-[var(--color-black-${weight})]`}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">White Scale</h3>
            <div className="flex gap-2 bg-[var(--color-gray-200)] p-2 rounded">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                <div
                  key={weight}
                  className={`w-10 h-10 rounded bg-[var(--color-white-${weight})]`}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">Orange Scale</h3>
            <div className="flex gap-2">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                <div
                  key={weight}
                  className={`w-10 h-10 rounded bg-[var(--color-orange-${weight})]`}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">Gray Scale</h3>
            <div className="flex gap-2">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                <div
                  key={weight}
                  className={`w-10 h-10 rounded bg-[var(--color-gray-${weight})]`}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">Icons</h3>
            <div className="flex gap-4">
              <i className="far fa-paw text-[#fc7734] text-4xl icon-float"></i>
              <i className="far fa-eye text-[#fc7734] text-4xl icon-float"></i>
              <i className="far fa-feather text-[#fc7734] text-4xl icon-float"></i>
              <i className="far fa-fire text-[#fc7734] text-4xl icon-float"></i>
              <i className="fas fa-shield-alt text-[#fc7734] text-4xl icon-float"></i>
            </div>
          </div>
        </div>
      </div>
      <MainComponent />
    </div>
  );
});
}