"use client";

import { useState, useCallback } from "react";
import { matches, groupMatchesByDate, Prediction } from "@/lib/data";
import MatchCard from "@/components/MatchCard";
import AdBanner from "@/components/AdBanner";
import SaveFastCTA from "@/components/SaveFastCTA";

export default function MatchdayPage() {
  // Predictions state — keyed by match ID
  const [predictions, setPredictions] = useState<Record<string, Prediction>>(
    () => {
      const initial: Record<string, Prediction> = {};
      for (const match of matches) {
        let initialScoreA = -1;
        let initialScoreB = -1;

        if (match.id === "m1") {
          initialScoreA = 1;
          initialScoreB = 1;
        } else if (match.id === "m2") {
          initialScoreA = 1;
          initialScoreB = 0;
        }

        initial[match.id] = {
          matchId: match.id,
          scoreA: initialScoreA,
          scoreB: initialScoreB,
        };
      }
      return initial;
    }
  );

  const handleScoreChange = useCallback(
    (matchId: string, team: "A" | "B", value: number) => {
      setPredictions((prev) => ({
        ...prev,
        [matchId]: {
          ...prev[matchId],
          [team === "A" ? "scoreA" : "scoreB"]: value,
        },
      }));
    },
    []
  );

  const handleSave = useCallback(() => {
    // In production, this would submit to a backend
    console.log("Saving predictions:", predictions);
  }, [predictions]);

  const dateGroups = groupMatchesByDate(matches);

  // Flatten all matches for ad banner insertion counting
  let globalCardIndex = 0;

  return (
    <div className="flex flex-col min-h-full">
      {/* Match List */}
      <div className="px-4 pb-4">
        {dateGroups.map((group, groupIdx) => (
          <div key={group.label}>
            {/* Date Header */}
            <div
              className={`text-[13px] font-semibold text-white drop-shadow-md ${
                groupIdx === 0 ? "mt-4" : "mt-6"
              } mb-2`}
            >
              {group.label}
            </div>

            {/* Match Cards */}
            {group.matches.map((match) => {
              globalCardIndex++;
              const prediction = predictions[match.id];
              const showAd = globalCardIndex % 3 === 0;

              return (
                <div key={match.id}>
                  <div className="mb-1.5">
                    <MatchCard
                      match={match}
                      scoreA={prediction.scoreA}
                      scoreB={prediction.scoreB}
                      onScoreAChange={(v) =>
                        handleScoreChange(match.id, "A", v)
                      }
                      onScoreBChange={(v) =>
                        handleScoreChange(match.id, "B", v)
                      }
                    />
                  </div>
                  {showAd && <AdBanner />}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Save Fast CTA */}
      <SaveFastCTA onSave={handleSave} />
    </div>
  );
}
