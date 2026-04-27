"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Matchday",
    href: "/",
    icon: (active: boolean) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#1A1A1A" : "#9A9A9A"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m12 7-1.5 2.5 1.5 2.5 3-1-1.5-4z" />
        <path d="m12 17-1.5-2.5 1.5-2.5 3 1-1.5 4z" />
        <path d="m7 12 2.5-1.5 2.5 1.5-1 3-4-1.5z" />
        <path d="m17 12-2.5-1.5-2.5 1.5 1 3 4-1.5z" />
      </svg>
    ),
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
    icon: (active: boolean) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#1A1A1A" : "#9A9A9A"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 21V11" />
        <path d="M12 21V6" />
        <path d="M16 21v-8" />
      </svg>
    ),
  },
  {
    label: "Account",
    href: "/account",
    icon: (active: boolean) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#1A1A1A" : "#9A9A9A"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-white z-40 flex items-center justify-around"
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        height: 56,
      }}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-[180ms]"
          >
            {item.icon(isActive)}
            <span
              className={`text-[10px] ${
                isActive
                  ? "text-[#1A1A1A] font-semibold"
                  : "text-[#9A9A9A] font-normal"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
