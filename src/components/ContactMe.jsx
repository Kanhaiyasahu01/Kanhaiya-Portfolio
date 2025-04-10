import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const ContactMe = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(""); // Clear any previous result

    const formData = new FormData(event.target);
    formData.append("access_key", "3bc77d76-4dca-443c-a41b-4014582801fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        toast.success("Message Sent Successfully");
      } else {
        console.log("Error", data);
        toast.error("Message not sent");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Message not sent");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" w-10/12 mx-auto">
      <div className="w-full mx-auto p-4 my-10">
        <div 
          className={`flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Left Column - Text Content with fade-in animation */}
          <div className={`w-full md:w-1/2 text-white transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6 text-blue-100">
              <h1 className="text-4xl md:text-5xl font-bold text-teal-200 mb-2 animate-fadeIn text-richblack-50">
                Get in touch
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-teal-200 mb-6 animate-fadeIn animation-delay-200 text-richblack-50">
                with me.
              </h2>
              <p className="text-lg md:text-xl font-medium text-teal-300 mb-8 animate-fadeIn animation-delay-400 text-richblack-50">
                Let's Build Something Amazing Together
              </p>
              <div className={`space-y-5 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="text-teal-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-richblack-50">
                      Email
                    </h3>
                    <a
                      href="mailto:kanhaiyasahutools@gmail.com"
                      className="text-teal-100 hover:text-teal-300 transition-colors text-sm md:text-base "
                    >
                      kanhaiyasahutools@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="text-teal-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-white">
                      Location
                    </h3>
                    <p className="text-teal-100 text-sm md:text-base">
                      Bilaspur, Chhattisgarh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Card with enhanced styling and animations */}
          <div className={`w-full md:w-1/2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
  <div className="bg-zinc-900 backdrop-blur-md rounded-lg p-6 shadow-xl shadow-blue-800 border border-richblack-100 border-opacity-20   
                transform transition-all duration-500 
                hover:scale-105
                hover:shadow-xl hover:border-blue-600 hover:shadow-blue-500/30 group">
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="transform transition-all duration-300 hover:translate-y-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-richblack-100 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-3 rounded-md bg-gradient-to-b from-richblack-700 to-richblack-900 border border-richblack-100 border-opacity-30 
                   placeholder-richblack-400 focus:ring-2 
                   transition-all duration-300 hover:border-blue-400 
                   shadow-lg shadow-blue-900/40 
                   hover:shadow-blue-500/50
                   ring-offset-2 ring-offset-richblack-800"
          placeholder="Your Name"
        />
      </div>
      <div className="transform transition-all duration-300 hover:translate-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-richblack-100 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-3 rounded-md bg-gradient-to-b from-richblack-700 to-richblack-900 border border-richblack-100 border-opacity-30 
                   placeholder-richblack-400 focus:ring-2 
                   transition-all duration-300 hover:border-blue-400 
                   shadow-lg shadow-blue-900/40 
                   hover:shadow-blue-500/50
                   ring-offset-2 ring-offset-richblack-800"
          placeholder="Your Email"
        />
      </div>
      <div className="transform transition-all duration-300 hover:translate-y-1">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-richblack-100 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          className="w-full p-3 rounded-md bg-gradient-to-b from-richblack-700 to-richblack-900 border border-richblack-100 border-opacity-30 
                   placeholder-richblack-400 focus:ring-2 
                   transition-all duration-300 hover:border-blue-400 
                   shadow-lg shadow-blue-900/40 
                   hover:shadow-blue-500/50
                   ring-offset-2 ring-offset-richblack-800 resize-y"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md 
                 hover:bg-blue-500 hover:scale-105 
                 transition-all duration-300 
                 disabled:bg-blue-300 disabled:cursor-not-allowed
                 transform hover:-translate-y-1 
                 shadow-lg shadow-blue-900/40 hover:shadow-blue-500/50
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : "Send Message"}
      </button>
    </form>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};