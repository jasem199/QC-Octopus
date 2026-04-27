"use client";

import { Match } from "@/lib/data";
import { formatKickoffTime } from "@/lib/data";
import ScoreWheelPicker from "./ScoreWheelPicker";
import FlagBadge from "./FlagBadge";

interface MatchCardProps {
  match: Match;
  scoreA: number;
  scoreB: number;
  onScoreAChange: (value: number) => void;
  onScoreBChange: (value: number) => void;
}

export default function MatchCard({
  match,
  scoreA,
  scoreB,
  onScoreAChange,
  onScoreBChange,
}: MatchCardProps) {
  return (
    <div
      className={`${match.pointsEarned !== undefined
        ? "bg-green-950/80 border-green-500/20"
        : "bg-zinc-900/90 border-white/5"
        } backdrop-blur-xl border rounded-[22px] p-2 transition-all duration-300 flex flex-col justify-center h-[136px] opacity-100`}
      style={{
        boxShadow: match.pointsEarned !== undefined
          ? "0 4px 20px rgba(0,255,0,0.05)"
          : "0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* Group Header (Centered) */}
      <div className="flex justify-center mb-1.5">
        <span className="text-[11px] text-white/40 font-bold tracking-widest uppercase">
          {match.group}
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex items-center justify-between">
        {/* Team A Column */}
        <div className="flex flex-col items-center gap-1 w-20 shrink-0">
          <div className="w-12 h-12 flex items-center justify-center">
            <FlagBadge code={match.teamA.code} size={40} />
          </div>
          <span className="text-[11px] font-semibold text-white/80 truncate w-full text-center">
            {match.teamA.name}
          </span>
        </div>

        {/* Score A */}
        <div className="flex-1 flex justify-center">
          {match.isLocked ? (
            <span className="text-[34px] font-bold text-white">
              {match.actualScoreA !== undefined ? match.actualScoreA : (scoreA === -1 ? "-" : scoreA)}
            </span>
          ) : (
            <ScoreWheelPicker
              value={scoreA}
              onChange={onScoreAChange}
              disabled={match.isLocked}
            />
          )}
        </div>

        {/* Center Info (Kickoff/Status) */}
        <div className="flex flex-col items-center gap-0.5 px-1 shrink-0">
          <span className="text-[11px] font-bold text-white/90">
            {formatKickoffTime(match.kickoff)}
          </span>
          {match.isLocked ? (
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-white/40 font-medium leading-tight">Full-time</span>
              {match.pointsEarned !== undefined && (
                <span className={`text-[11px] font-bold mt-0.5 leading-none ${match.pointsEarned < 0 ? "text-red-500" : "text-[#D2FB6A]"}`}>
                  {match.pointsEarned > 0 ? `+${match.pointsEarned}` : match.pointsEarned}
                </span>
              )}
            </div>
          ) : (
            <span className="text-[10px] text-white/40 font-medium">Upcoming</span>
          )}
        </div>

        {/* Score B */}
        <div className="flex-1 flex justify-center">
          {match.isLocked ? (
            <span className="text-[34px] font-bold text-white">
              {match.actualScoreB !== undefined ? match.actualScoreB : (scoreB === -1 ? "-" : scoreB)}
            </span>
          ) : (
            <ScoreWheelPicker
              value={scoreB}
              onChange={onScoreBChange}
              disabled={match.isLocked}
            />
          )}
        </div>

        {/* Team B Column */}
        <div className="flex flex-col items-center gap-1 w-20 shrink-0">
          <div className="w-12 h-12 flex items-center justify-center">
            <FlagBadge code={match.teamB.code} size={40} />
          </div>
          <span className="text-[11px] font-semibold text-white/80 truncate w-full text-center">
            {match.teamB.name}
          </span>
        </div>
      </div>

      {/* Prediction Footer */}
      {match.isLocked && match.pointsEarned !== undefined && (
        <div className="flex justify-center mt-1.5">
          <span className="text-[10px] text-white/40 font-medium italic">
            My prediction {scoreA}-{scoreB}
          </span>
        </div>
      )}
    </div>
  );
}
