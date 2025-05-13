import React, { useEffect, useState } from "react";

const emojiList = ["🃏"];

function Joker() {
  const [joke, setJoke] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [emoji, setEmoji] = useState("🃏");

  const URL = "https://official-joke-api.appspot.com/jokes/random";

  const fetchJoke = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setJoke({
        setup: json.setup,
        punchline: json.punchline,
      });
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
    setEmoji(emojiList[Math.floor(Math.random() * emojiList.length)]);
  }, []);

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-yellow-100 to-pink-200 text-gray-900"
      } min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500`}
    >
      {/* Theme Toggle (Small & Clean) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-xs px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform"
        title="Toggle Theme"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      {/* Header */}
      <header className="mb-10 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-pink-100 dark:bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center shadow-md mb-4 animate-wiggle">
            <span className="text-4xl">{emoji}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 dark:text-pink-400 tracking-wider mb-2">
            JokeSplash
          </h1>
          <p className="text-base md:text-lg font-medium italic">
            The ultimate laugh generator 💥
          </p>
        </div>
      </header>

      {/* Joke Card */}
      <div
        className={`bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-xl w-full text-center transition-transform transform hover:scale-105 duration-300`}
      >
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            {joke.setup || "Loading a good one..."}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            {joke.punchline}
          </p>
        </div>

        <button
          onClick={fetchJoke}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Give me another
        </button>
      </div>
    </div>
  );
}

export default Joker;
