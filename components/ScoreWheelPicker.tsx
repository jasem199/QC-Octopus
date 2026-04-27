"use client";

import { useRef, useEffect, useState } from "react";

interface ScoreWheelPickerProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const ITEM_HEIGHT = 36;
const VISIBLE_ITEMS = 3;

export default function ScoreWheelPicker({
  value,
  onChange,
  disabled = false,
}: ScoreWheelPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startY = useRef(0);
  const scrollStart = useRef(0);

  const values = Array.from({ length: 12 }, (_, i) => i - 1);

  // Initial scroll position
  useEffect(() => {
    if (!containerRef.current) return;
    const targetScroll = (value + 1) * ITEM_HEIGHT;
    containerRef.current.scrollTop = targetScroll;
  }, []);

  // Synchronize scroll position when value changes externally
  useEffect(() => {
    if (!containerRef.current || isDraggingRef.current) return;
    const targetScroll = (value + 1) * ITEM_HEIGHT;
    if (Math.abs(containerRef.current.scrollTop - targetScroll) > 1) {
      containerRef.current.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  }, [value]);

  const handleScroll = () => {
    if (!containerRef.current || isDraggingRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const newVal = Math.round(scrollTop / ITEM_HEIGHT) - 1;
    if (newVal !== value && newVal >= -1 && newVal <= 10) {
      onChange(newVal);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    isDraggingRef.current = true;
    startY.current = e.clientY;
    scrollStart.current = containerRef.current?.scrollTop || 0;
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const deltaY = startY.current - e.clientY;
    containerRef.current.scrollTop = scrollStart.current + deltaY;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    containerRef.current?.releasePointerCapture(e.pointerId);

    const scrollTop = containerRef.current?.scrollTop || 0;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const newVal = index - 1;
    const snappedScroll = index * ITEM_HEIGHT;
    
    containerRef.current?.scrollTo({ top: snappedScroll, behavior: "smooth" });

    if (newVal !== value && newVal >= -1 && newVal <= 10) {
      onChange(newVal);
    }
  };

  const handleItemClick = (val: number) => {
    if (disabled) return;
    onChange(val);
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-[12px] overflow-hidden select-none transition-opacity ${
        disabled ? "pointer-events-none" : "opacity-100"
      }`}
      style={{
        width: 52,
        height: ITEM_HEIGHT * VISIBLE_ITEMS,
        background: "transparent",
      }}
    >
      <div
        ref={containerRef}
        className="wheel-picker w-full h-full overflow-y-scroll"
        style={{
          paddingTop: ITEM_HEIGHT,
          paddingBottom: ITEM_HEIGHT,
        }}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {values.map((val) => {
          const isSelected = val === value;
          const displayVal = val === -1 ? "-" : val;
          return (
            <div
              key={val}
              className={`wheel-picker-item flex items-center justify-center cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "text-white font-bold"
                  : "text-white/30 font-medium"
              }`}
              style={{
                height: ITEM_HEIGHT,
                fontSize: isSelected ? 34 : 18,
              }}
              onClick={() => handleItemClick(val)}
            >
              {displayVal}
            </div>
          );
        })}
      </div>
    </div>
  );
}
