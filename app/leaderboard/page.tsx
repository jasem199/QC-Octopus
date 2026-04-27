"use client";

import { useState } from "react";
import {
  leaderboardDaily,
  leaderboardWeekly,
  leaderboardAllTime,
  userRankDaily,
  userRankWeekly,
  userRankAllTime,
  LeaderboardEntry,
} from "@/lib/data";
import FlagBadge from "@/components/FlagBadge";

const tabs = ["Daily", "Weekly", "All Time"] as const;
type TabType = (typeof tabs)[number];

const dataMap: Record<TabType, LeaderboardEntry[]> = {
  Daily: leaderboardDaily,
  Weekly: leaderboardWeekly,
  "All Time": leaderboardAllTime,
};

const userRankMap: Record<TabType, LeaderboardEntry> = {
  Daily: userRankDaily,
  Weekly: userRankWeekly,
  "All Time": userRankAllTime,
};

// Map flag emoji to country code for FlagBadge
const flagToCode: Record<string, string> = {
  "🇧🇷": "BRA",
  "🇲🇽": "MEX",
  "🇳🇱": "NED",
  "🇫🇷": "FRA",
  "🇯🇵": "JPN",
  "🏴\u200D☠️": "ENG",
  "🇩🇪": "GER",
  "🇺🇾": "URU",
  "🇳🇬": "NGA",
  "🇨🇦": "CAN",
  "🇪🇸": "ESP",
  "🇦🇷": "ARG",
  "🇲🇦": "MAR",
  "🇺🇸": "USA",
  "🇭🇷": "CRO",
  "🇸🇳": "SEN",
  "🇰🇷": "KOR",
  "🇦🇺": "AUS",
  "🇵🇹": "POR",
  "🇨🇴": "COL",
};

function getFlagCode(flag: string): string {
  return flagToCode[flag] || "USA";
}

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Daily");
  const entries = dataMap[activeTab];
  const userRank = userRankMap[activeTab];

  return (
    <div className="flex flex-col min-h-full">
      {/* Sticky Tabs + Your Rank */}
      <div className="sticky top-[56px] z-30" style={{ background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(12px)" }}>

        {/* Tab Bar */}
        <div className="flex w-full border-b border-[rgba(0,0,0,0.06)]">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center text-[14px] relative transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-[#1A1A1A] font-semibold"
                    : "text-[#9A9A9A] font-normal"
                }`}
              >
                {tab}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full transition-all duration-200"
                    style={{
                      width: "40%",
                      height: 3,
                      background: "#D2FB6A",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Your Rank Card */}
        <div className="px-4 pt-4 pb-4">
          <div
            className="bg-white rounded-[16px] p-4"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <span className="text-[12px] text-[#9A9A9A] font-normal">
              Your Rank
            </span>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[24px] font-semibold text-[#1A1A1A]">
                #{userRank.rank}
              </span>
              <span className="text-[24px] font-semibold text-[#1A1A1A]">
                {userRank.points} pts
              </span>
            </div>
            <span className="text-[12px] text-[#9A9A9A] font-normal mt-1 block">
              Submitted: {userRank.submittedAgo}
            </span>
          </div>
        </div>
      </div>

      {/* Rank List */}
      <div className="px-4 pb-4">
        <div 
          className="bg-white rounded-[16px] px-4 overflow-hidden"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
        >
          {entries.map((entry, idx) => (
            <div
              key={`${activeTab}-${entry.rank}`}
              className={`flex items-center h-[56px] animate-fade-in ${
                idx !== entries.length - 1 ? "border-b border-[rgba(0,0,0,0.06)]" : ""
              }`}
            >
              {/* Rank */}
              <div className="w-8 shrink-0">
                {entry.rank <= 3 ? (
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-[6px] text-[11px] font-semibold text-[#1A1A1A]"
                    style={{ background: "#D2FB6A" }}
                  >
                    {entry.rank}
                  </span>
                ) : (
                  <span className="text-[14px] font-semibold text-[#1A1A1A]">
                    {entry.rank}
                  </span>
                )}
              </div>

              {/* User */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <FlagBadge code={getFlagCode(entry.flag)} size={20} />
                <span className="text-[15px] font-normal text-[#1A1A1A] truncate">
                  {entry.username}
                </span>
              </div>

              {/* Points */}
              <span className="text-[15px] font-semibold text-[#1A1A1A] shrink-0 ml-2">
                {entry.points}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
