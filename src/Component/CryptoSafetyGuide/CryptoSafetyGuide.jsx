import { Link } from "react-router-dom";

const CryptoSafetyGuide = () => {
  return (
    <section className=" text-white py-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl bg-slate-700 rounded-lg p-5 text-gray-100 font-bold text-center mb-8">
          Crypto Safety Guide
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-[#1b2522] rounded-lg">
          {/* Common Scams */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-white font-semibold mb-4">
              Common Scams
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>🚩 Phishing Emails</li>
              <li>💰 Fake Exchanges</li>
              <li>📈 Ponzi Schemes</li>
              <li>🛑 Impersonation Scams</li>
            </ul>
          </div>

          {/* Wallet Security */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-white font-semibold mb-4">
              Wallet Security
            </h3>
            <ul className="space-y-2 ">
              <li>🔒 Use hardware wallets</li>
              <li>🗝 Keep private keys secure</li>
              <li>📱 Enable 2FA</li>
            </ul>
          </div>

          {/* Exchange Safety */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-white font-semibold mb-4">
              Exchange Safety
            </h3>
            <ul className="space-y-2 ">
              <li>✅ Verify exchange legitimacy</li>
              <li>🌐 Avoid unverified platforms</li>
              <li>🧾 Check reviews</li>
            </ul>
          </div>

          {/* Avoid Fake Apps */}
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-white font-semibold mb-4">
              Avoid Fake Apps
            </h3>
            <p className="rounded-xl bg-black">
              Always download apps from official sources like the App Store or
              Google Play.
            </p>
          </div>

          {/* Recognizing Red Flags */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-white font-semibold mb-4">
              Recognizing Red Flags
            </h3>
            <ul className="space-y-2 ">
              <li>❌ Unrealistic promises</li>
              <li>❗ Urgent requests</li>
              <li>📩 Unsolicited messages</li>
            </ul>
          </div>

          {/* Interactive Quiz */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-white font-semibold mb-4">
              Test Your Skills
            </h3>
            <p className="text-white rounded-xl  bg-black">
              Take our quiz to recognize scams and learn best practices.
            </p>
            <Link to={"/quiz"}>
              {" "}
              <button className="mt-4 bg-gray-400 hover:bg-gray-600 text-black py-2 px-4 rounded-lg  focus:ring focus:ring-pink-400">
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSafetyGuide;
