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
    <footer className="mx-auto flex w-full max-w-screen-2xl justify-between border-t border-white/30 px-4 py-6">
      <Link
        href="/"
        className="group relative inline-flex shrink-0 items-center gap-3"
      >
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/4082806"
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-lg mix-blend-luminosity grayscale"
          />
        </div>
        <div className="font-medium leading-4 tracking-tight transition-opacity delay-75 group-hover:opacity-60 group-active:opacity-70">
          Miro Rauhala
        </div>
      </Link>
      <div>
        <button
          className="mx-auto block w-10 p-1 [-webkit-tap-highlight-color:transparent]"
          onClick={toggleEmoji}
        >
          {emoji}
        </button>
      </div>
    </footer>
  );
};
