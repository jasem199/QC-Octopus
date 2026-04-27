"use client";

import { useState } from "react";

interface SaveFastCTAProps {
  onSave: () => void;
}

export default function SaveFastCTA({ onSave }: SaveFastCTAProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    onSave();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div
      className="fixed left-0 right-0 bg-white z-50"
      style={{
        bottom: 0,
        boxShadow: "0 -2px 12px rgba(0,0,0,0.07)",
        padding: "12px 16px",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <button
        id="save-fast-btn"
        className="w-full flex items-center justify-center font-semibold text-[16px] text-[#1A1A1A] rounded-[14px] transition-transform duration-[160ms] ease-out cursor-pointer"
        style={{
          height: 52,
          backgroundColor: saved ? "#a8e65c" : "#D2FB6A",
          transform: isPressed ? "scale(0.98)" : "scale(1)",
        }}
        onPointerDown={() => setIsPressed(true)}
        onPointerUp={() => setIsPressed(false)}
        onPointerLeave={() => setIsPressed(false)}
        onClick={handleClick}
      >
        {saved ? "✓ Saved!" : "Save my prediction"}
      </button>
    </div>
  );
}
