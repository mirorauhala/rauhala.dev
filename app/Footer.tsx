"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export const Footer = () => {
  const [emoji, setEmoji] = useState("🇫🇮");

  const toggleEmoji = () => {
    const finnishDeveloperEmoji = [
      "🇫🇮",
      "👨‍💻",
      "❤️",
      "🚀",
      "💡",
      "📝",
      "📚",
      "💾",
      "💭",
      "🌱",
    ];

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
    <footer className="mx-auto mt-12 flex max-w-screen-2xl justify-between border-t border-stone-200 py-6 px-4 dark:border-white/30">
      <Link
        href="/"
        className="relative inline-flex shrink-0 items-center gap-3"
      >
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/4082806"
            alt="Avatar"
            width={48}
            height={48}
            className="rounded-xl mix-blend-luminosity grayscale"
          />
        </div>
        <div className="text-xl font-medium leading-4 tracking-tight">
          Miro Rauhala
        </div>
      </Link>
      <div>
        <button
          className="mx-auto block w-10 p-1 text-gray-500 [-webkit-tap-highlight-color:transparent]"
          onClick={toggleEmoji}
        >
          {emoji}
        </button>
      </div>
    </footer>
  );
};
