"use client";
import React from "react";
import GlobalHeader from "../../components/global-header";

function MainComponent() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const isFormValid = () => {
    return formData.name && formData.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/963968515137?text=${whatsappMessage}`, "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white font-inter overflow-hidden relative">
      <GlobalHeader activePage="/contact" />
      <div className="absolute inset-0 bg-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-16 pt-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-[#FD7634] mb-12 font-montserrat tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-[#050517] leading-relaxed max-w-4xl mx-auto text-center font-inter">
            Ready to elevate your digital presence? Our team of experts is here
            to help transform your vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white border-2 border-[#FF5722] p-10 rounded-[8px] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-bold text-black mb-8 font-montserrat">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white text-black border-2 border-gray-200 rounded-[8px] focus:border-[#FF5722] focus:ring-[#FF5722] focus:outline-none form-input-transition font-inter"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-white text-black border-2 border-gray-200 rounded-[8px] focus:border-[#FF5722] focus:ring-[#FF5722] focus:outline-none form-input-transition font-inter"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={!isFormValid()}
                className="w-full !bg-[#FF5722] hover:!bg-[#FF5722]/90 text-white font-semibold py-4 rounded-[8px] transition-colors font-inter disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message on WhatsApp
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-8 h-full">
            <div className="bg-white border-2 border-[#FF5722] p-8 rounded-[8px] flex-1 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-6 font-montserrat">
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:+963968515137"
                  className="flex items-center text-black font-inter hover:text-[#FF5722] transition-colors cursor-pointer"
                >
                  <i className="fa fa-phone w-8 text-[#FF5722]"></i>
                  <span>+963968515137</span>
                </a>
                <a
                  href="mailto:zenith.agency11@gmail.com"
                  className="flex items-center text-black font-inter hover:text-[#FF5722] transition-colors cursor-pointer"
                >
                  <i className="fa fa-envelope w-8 text-[#FF5722]"></i>
                  <span>zenith.agency11@gmail.com</span>
                </a>
                <div className="flex items-center text-black font-inter">
                  <i className="fa fa-map-marker w-8 text-[#FF5722]"></i>
                  <span>Damascus, Syria</span>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-[#FF5722] p-8 rounded-[8px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-8 font-montserrat">
                Connect With Us
              </h3>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.linkedin.com/company/zenith-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white p-4 rounded-full w-[52px] h-[52px] flex items-center justify-center transition-all duration-300 social-icon-hover cursor-pointer"
                >
                  <i className="fab fa-linkedin-in text-3xl"></i>
                </a>
                <a
                  href="https://twitter.com/ZenithAgency713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white p-4 rounded-full w-[52px] h-[52px] flex items-center justify-center transition-all duration-300 social-icon-hover cursor-pointer"
                >
                  <i className="fab fa-twitter text-3xl"></i>
                </a>
                <a
                  href="https://www.facebook.com/ZENiTHAgency7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white p-4 rounded-full w-[52px] h-[52px] flex items-center justify-center transition-all duration-300 social-icon-hover cursor-pointer"
                >
                  <i className="fab fa-facebook-f text-3xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/zenith_agency7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white p-4 rounded-full w-[52px] h-[52px] flex items-center justify-center transition-all duration-300 social-icon-hover cursor-pointer"
                >
                  <i className="fab fa-instagram text-3xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .form-input-transition {
          transition: all 0.3s ease-in-out;
        }
        .social-icon-hover {
          transition: transform 0.3s ease-in-out;
        }
        .social-icon-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;