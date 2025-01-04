import { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the safest way to store your cryptocurrency?",
      options: [
        "On an exchange platform",
        "In a hot wallet",
        "In a cold wallet",
        "In your email account",
      ],
      answer: "In a cold wallet",
    },
    {
      question: "How can you identify a phishing website?",
      options: [
        "It has a secure HTTPS link",
        "It asks for your private keys",
        "It loads quickly",
        "It offers customer support",
      ],
      answer: "It asks for your private keys",
    },
    {
      question:
        "What should you do if someone asks for your wallet seed phrase?",
      options: [
        "Share it if they seem trustworthy",
        "Ignore and report the request",
        "Store it in an online document",
        "Post it on social media",
      ],
      answer: "Ignore and report the request",
    },
    {
      question: "What does 2FA stand for?",
      options: [
        "Two-Factor Authentication",
        "Two-Factor Analysis",
        "Two-Factor Algorithm",
        "Two-Factor Access",
      ],
      answer: "Two-Factor Authentication",
    },
    {
      question: "What is a common type of crypto fraud?",
      options: ["Rug Pull", "Pump and Dump", "Phishing", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What does a blockchain do?",
      options: [
        "Stores digital currency",
        "Keeps a public ledger of transactions",
        "Creates wallets",
        "Hacks exchanges",
      ],
      answer: "Keeps a public ledger of transactions",
    },
    {
      question: "Why should you use a hardware wallet?",
      options: [
        "To speed up transactions",
        "To trade more easily",
        "To protect assets offline",
        "To access your crypto on any device",
      ],
      answer: "To protect assets offline",
    },
    {
      question: "What is social engineering in crypto fraud?",
      options: [
        "Using advanced algorithms",
        "Manipulating people to give up confidential info",
        "Creating fake wallets",
        "None of the above",
      ],
      answer: "Manipulating people to give up confidential info",
    },
    {
      question: "What is a dusting attack?",
      options: [
        "A type of ransomware",
        "A scam involving small transactions",
        "A wallet freezing technique",
        "A blockchain algorithm",
      ],
      answer: "A scam involving small transactions",
    },
    {
      question: "Why should you avoid public Wi-Fi for crypto transactions?",
      options: [
        "It is too slow",
        "It can expose your data to hackers",
        "It increases transaction fees",
        "It doesn't affect crypto transactions",
      ],
      answer: "It can expose your data to hackers",
    },
    {
      question: "What is a private key?",
      options: [
        "A secure password for your wallet",
        "The public identifier for your wallet",
        "A method of encrypting emails",
        "None of the above",
      ],
      answer: "A secure password for your wallet",
    },
    {
      question: "What is a crypto airdrop?",
      options: [
        "An unexpected market crash",
        "A marketing tactic to distribute free tokens",
        "A type of wallet",
        "A sudden price increase",
      ],
      answer: "A marketing tactic to distribute free tokens",
    },
    {
      question: "What is the purpose of a smart contract?",
      options: [
        "To enforce agreements automatically",
        "To protect your crypto assets",
        "To enhance wallet security",
        "To speed up transactions",
      ],
      answer: "To enforce agreements automatically",
    },
    {
      question: "How can you verify the legitimacy of a crypto project?",
      options: [
        "Check the team’s background",
        "Read the whitepaper",
        "Look for audits",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is a crypto rug pull?",
      options: [
        "A sudden token price surge",
        "A scam where developers abandon a project",
        "A transaction delay",
        "A type of wallet hack",
      ],
      answer: "A scam where developers abandon a project",
    },
    {
      question: "What is the importance of DYOR in crypto?",
      options: [
        "To avoid high fees",
        "To understand and minimize risks",
        "To make transactions faster",
        "To reduce tax liability",
      ],
      answer: "To understand and minimize risks",
    },
    {
      question: "What should you do if you fall for a crypto scam?",
      options: [
        "Report it to authorities",
        "Recover funds through blockchain tracing",
        "Alert your wallet provider",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the role of a decentralized exchange?",
      options: [
        "To provide anonymity in transactions",
        "To facilitate peer-to-peer trading",
        "To store crypto safely",
        "To conduct smart contract audits",
      ],
      answer: "To facilitate peer-to-peer trading",
    },
    {
      question: "Why is it dangerous to click on random links in emails?",
      options: [
        "They might contain malware",
        "They might lead to phishing sites",
        "They might compromise your wallet",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the purpose of a seed phrase?",
      options: [
        "To create a wallet address",
        "To recover your wallet",
        "To speed up transactions",
        "To track blockchain activity",
      ],
      answer: "To recover your wallet",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white p-4">
      <h1 className="text-4xl font-bold mb-6 bg-black text-white p-5 rounded-xl">
        Crypto Safety Quiz
      </h1>
      <div className="bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-md">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h2>
            <p className="mb-4 bg-black rounded-lg p-4">
              You scored {score} out of {questions.length}.
            </p>
            <button
              onClick={restartQuiz}
              className="bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl text-black font-bold mb-4">
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p className="mb-6 bg-black rounded-xl">
              {questions[currentQuestion].question}
            </p>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="block w-full bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
