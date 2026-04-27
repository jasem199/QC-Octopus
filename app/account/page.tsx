"use client";

import { currentUser } from "@/lib/data";
import { useState } from "react";

// Chevron icon
function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9A9A9A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

// Toggle component
function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative w-[44px] h-[26px] rounded-full transition-colors duration-200 cursor-pointer ${
        enabled ? "bg-[#D2FB6A]" : "bg-[#E5E5E5]"
      }`}
    >
      <div
        className={`absolute top-[3px] w-[20px] h-[20px] rounded-full bg-white shadow transition-transform duration-200 ${
          enabled ? "translate-x-[21px]" : "translate-x-[3px]"
        }`}
      />
    </button>
  );
}

// Settings row component
function SettingsRow({
  label,
  value,
  hasToggle,
  toggleValue,
  onToggle,
}: {
  label: string;
  value?: string;
  hasToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (v: boolean) => void;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`flex items-center justify-between h-[52px] border-b border-[rgba(0,0,0,0.06)] transition-colors duration-[180ms] cursor-pointer ${
        isActive ? "bg-[#F5F5F5]" : "bg-transparent"
      }`}
      onPointerDown={() => setIsActive(true)}
      onPointerUp={() => setTimeout(() => setIsActive(false), 180)}
      onPointerLeave={() => setIsActive(false)}
    >
      <span className="text-[15px] font-normal text-[#1A1A1A]">{label}</span>
      <div className="flex items-center gap-2">
        {value && (
          <span className="text-[14px] text-[#9A9A9A]">{value}</span>
        )}
        {hasToggle && onToggle ? (
          <Toggle enabled={toggleValue ?? false} onChange={onToggle} />
        ) : (
          <ChevronRight />
        )}
      </div>
    </div>
  );
}

export default function AccountPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="flex flex-col min-h-full pt-4">

      <div className="px-4">
        {/* Profile Block */}
        <div
          className="bg-white rounded-[16px] p-4 flex items-center gap-4"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
        >
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-semibold text-[#1A1A1A] shrink-0"
            style={{ background: "#D2FB6A" }}
          >
            {currentUser.avatarInitials}
          </div>
          <div className="flex flex-col">
            <span className="text-[17px] font-semibold text-[#1A1A1A]">
              {currentUser.username}
            </span>
            <span className="text-[13px] text-[#9A9A9A]">
              Joined {currentUser.joinedDate}
            </span>
          </div>
        </div>

        {/* Stats Block */}
        <div
          className="bg-white rounded-[16px] mt-4 flex"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
        >
          {/* Total Points */}
          <div className="flex-1 flex flex-col items-center justify-center py-4 border-r border-[rgba(0,0,0,0.06)]">
            <span className="text-[20px] font-semibold text-[#1A1A1A]">
              {currentUser.totalPoints.toLocaleString()}
            </span>
            <span className="text-[12px] text-[#9A9A9A] mt-0.5">Points</span>
          </div>

          {/* Rank */}
          <div className="flex-1 flex flex-col items-center justify-center py-4 border-r border-[rgba(0,0,0,0.06)]">
            <span className="text-[20px] font-semibold text-[#1A1A1A]">
              #{currentUser.allTimeRank}
            </span>
            <span className="text-[12px] text-[#9A9A9A] mt-0.5">Rank</span>
          </div>

          {/* Predictions */}
          <div className="flex-1 flex flex-col items-center justify-center py-4">
            <span className="text-[20px] font-semibold text-[#1A1A1A]">
              {currentUser.predictionsSubmitted}/{currentUser.totalPredictions}
            </span>
            <span className="text-[12px] text-[#9A9A9A] mt-0.5">
              Predicted
            </span>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mt-6">
          <span className="text-[11px] uppercase text-[#9A9A9A] font-normal tracking-wider mb-2 block">
            Preferences
          </span>
          <SettingsRow
            label="Notification Settings"
            hasToggle
            toggleValue={notificationsEnabled}
            onToggle={setNotificationsEnabled}
          />
          <SettingsRow label="Timezone" value="UTC+6" />
        </div>

        {/* App Section */}
        <div className="mt-6">
          <span className="text-[11px] uppercase text-[#9A9A9A] font-normal tracking-wider mb-2 block">
            App
          </span>
          <SettingsRow label="About / How Scoring Works" />
          <SettingsRow label="Privacy Policy" />
          <SettingsRow label="Terms of Use" />
        </div>

        {/* Log Out Button */}
        <button
          className="w-full h-[52px] rounded-[14px] text-[15px] font-semibold mt-8 transition-colors duration-[180ms] cursor-pointer"
          style={{
            background: "#FFF0F0",
            color: "#E55050",
          }}
        >
          Log Out
        </button>

        {/* Bottom Safe Area */}
        <div className="h-8" />
      </div>
    </div>
  );
}
