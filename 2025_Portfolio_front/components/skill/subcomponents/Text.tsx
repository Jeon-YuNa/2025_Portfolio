"use client";

import { useScrambleText } from "@/hooks/useScrambleText";

const Text = ({ text }: { text: string }) => {
  const { displayText, startScramble } = useScrambleText(text);

  return (
    <span
      className="text font-bold text-2xl rounded-sm cursor-pointer"
      onMouseEnter={startScramble}
    >
      {displayText}
    </span>
  );
};

export default Text;
