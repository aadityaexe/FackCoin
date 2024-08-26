import { useState } from "react";
import msg_icon from "./Contact-assets/msg-icon.png";
import mail_icon from "./Contact-assets/mail-icon.png";
import phone_icon from "./Contact-assets/phone-icon.png";
import location_icon from "./Contact-assets/location-icon.png";
import white_arrow from "./Contact-assets/white-arrow.png";

import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5315aff3-6490-4eeb-8d17-8ecf0d43e224");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative pt-20">
      <div className="container mx-auto my-5 p-5 max-w-[90%] flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="flex-[0_0_48%] text-black bg-white/60 p-5 rounded-lg transition-transform duration-300 hover:backdrop-blur-sm hover:scale-105 animate-from-left">
          <h3 className="text-xl font-medium flex items-center mb-5 text-black">
            Send us a message <img src={msg_icon} alt="" className="ml-2 w-9" />
          </h3>
          <p className="max-w-[450px] leading-relaxed">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            Wifuwki.
          </p>
          <ul>
            <li className="flex items-center my-5 animate-from-left">
              <img src={mail_icon} alt="" className="mr-2 w-6" />
              faxlover5@gmail.com
            </li>
            <li className="flex items-center my-5 animate-from-right">
              <img src={phone_icon} alt="" className="mr-2 w-6" />
              +91 6262173362
            </li>
            <li className="flex items-center my-5 animate-from-right">
              <img src={location_icon} alt="" className="mr-2 w-6" />
              Naval Kishor Nagar Khabra
            </li>
          </ul>
        </div>
        <div className="flex-[0_0_48%] text-black bg-white/60 p-5 rounded-lg transition-transform duration-300 hover:backdrop-blur-sm hover:scale-105 animate-from-bottom">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block font-medium animate-from-top">
                Your name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="block w-full bg-indigo-100 p-4 border-0 outline-none mt-1"
              />
            </div>
            <div>
              <label className="block font-medium animate-from-top">
                Your phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                required
                className="block w-full bg-indigo-100 p-4 border-0 outline-none mt-1"
              />
            </div>
            <div>
              <label className="block font-medium animate-from-top">
                Write your messages here
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
                className="block w-full bg-indigo-100 p-4 border-0 outline-none mt-1 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center bg-blue-900 text-white py-3 px-6 mt-4 hover:bg-blue-700 transition-colors duration-300"
            >
              Submit now <img src={white_arrow} alt="" className="ml-2 w-4" />
            </button>
          </form>
          <span className="block mt-5 text-center">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
