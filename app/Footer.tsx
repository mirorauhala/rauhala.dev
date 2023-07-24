"use client";
import { useState } from "react";

export const Footer = () => {
  const [emoji, setEmoji] = useState("🇫🇮");

  const toggleEmoji = () => {
    const finnishDeveloperEmoji = ["🇫🇮", "👨‍💻", "❤️", "🧖‍♂️"];

    const index = finnishDeveloperEmoji.indexOf(emoji);
    if (index > -1) {
      finnishDeveloperEmoji.splice(index, 1);
    }

    const randomEmoji =
      finnishDeveloperEmoji[
        Math.floor(Math.random() * finnishDeveloperEmoji.length)
      ];

    setEmoji(randomEmoji!);
  };

  return (
    <footer className="mx-auto max-w-4xl border-t dark:border-white/20 py-6 flex justify-center">
      <button className="p-2 text-gray-500" onClick={toggleEmoji}>
        {emoji}
      </button>
    </footer>
  );
};
