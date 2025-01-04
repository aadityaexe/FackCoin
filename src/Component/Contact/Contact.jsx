import { useState } from "react";
import msg_icon from "./Contact-assets/msg-icon.png";
import mail_icon from "./Contact-assets/mail-icon.png";
import phone_icon from "./Contact-assets/phone-icon.png";
import location_icon from "./Contact-assets/location-icon.png";
import white_arrow from "./Contact-assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
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
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative pt-20 z-0">
      <div className="container mx-auto my-5 p-5 max-w-[90%] flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="flex-[0_0_48%] text-black bg-white/60 p-5 rounded-lg">
          <h3 className="text-xl font-medium flex items-center mb-5 text-black">
            Send us a message <img src={msg_icon} alt="" className="ml-2 w-9" />
          </h3>
          <p className="max-w-[450px] leading-relaxed  text-black rounded-xl">
            Feel free to reach out through the contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service.
          </p>
          <ul>
            <li className="flex items-center my-5  text-black rounded-xl">
              <img src={mail_icon} alt="" className="mr-2 w-6" />
              faxlover5@gmail.com
            </li>
            <li className="flex items-center my-5  text-black rounded-xl">
              <img src={phone_icon} alt="" className="mr-2 w-6" />
              +91 6262173362
            </li>
            <li className="flex items-center my-5  text-black rounded-xl">
              <img src={location_icon} alt="" className="mr-2 w-6" />
              Naval Kishor Nagar Khabra
            </li>
          </ul>
        </div>
        <div className="flex-[0_0_48%] text-black bg-white/60 p-5 rounded-lg">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Your name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="block w-full bg-indigo-100 p-4 border-0 outline-none mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">Your phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                required
                className="block w-full bg-indigo-100 p-4 border-0 outline-none mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">
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
              className="inline-flex items-center rounded-md  text-black py-3 px-6 mt-4 bg-gray-400 hover:bg-gray-600"
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
