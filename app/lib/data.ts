// Mock data for WC 2026 Score Predictor

export interface Team {
  name: string;
  flag: string;
  code: string;
}

export interface Match {
  id: string;
  teamA: Team;
  teamB: Team;
  group: string;
  kickoff: Date;
  isLocked: boolean;
  pointsEarned?: number;
  actualScoreA?: number;
  actualScoreB?: number;
}

export interface Prediction {
  matchId: string;
  scoreA: number;
  scoreB: number;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  flag: string;
  points: number;
  submittedAgo: string;
}

export interface UserProfile {
  username: string;
  avatarInitials: string;
  joinedDate: string;
  totalPoints: number;
  allTimeRank: number;
  predictionsSubmitted: number;
  totalPredictions: number;
}

// Teams
const teams: Record<string, Team> = {
  USA: { name: "United States", flag: "🇺🇸", code: "USA" },
  MEX: { name: "Mexico", flag: "🇲🇽", code: "MEX" },
  CAN: { name: "Canada", flag: "🇨🇦", code: "CAN" },
  BRA: { name: "Brazil", flag: "🇧🇷", code: "BRA" },
  ARG: { name: "Argentina", flag: "🇦🇷", code: "ARG" },
  GER: { name: "Germany", flag: "🇩🇪", code: "GER" },
  FRA: { name: "France", flag: "🇫🇷", code: "FRA" },
  ENG: { name: "England", flag: "🏴\u200D☠️", code: "ENG" },
  ESP: { name: "Spain", flag: "🇪🇸", code: "ESP" },
  POR: { name: "Portugal", flag: "🇵🇹", code: "POR" },
  JPN: { name: "Japan", flag: "🇯🇵", code: "JPN" },
  KOR: { name: "South Korea", flag: "🇰🇷", code: "KOR" },
  AUS: { name: "Australia", flag: "🇦🇺", code: "AUS" },
  NGA: { name: "Nigeria", flag: "🇳🇬", code: "NGA" },
  MAR: { name: "Morocco", flag: "🇲🇦", code: "MAR" },
  SEN: { name: "Senegal", flag: "🇸🇳", code: "SEN" },
  NED: { name: "Netherlands", flag: "🇳🇱", code: "NED" },
  CRO: { name: "Croatia", flag: "🇭🇷", code: "CRO" },
  URU: { name: "Uruguay", flag: "🇺🇾", code: "URU" },
  COL: { name: "Colombia", flag: "🇨🇴", code: "COL" },
};

// Helper to create dates
function matchDate(dayOffset: number, hour: number, minute: number = 0): Date {
  const now = new Date();
  const date = new Date(now);
  date.setDate(date.getDate() + dayOffset);
  date.setHours(hour, minute, 0, 0);
  return date;
}

// Matches — a realistic schedule spread across today, tomorrow, and day after
export const matches: Match[] = [
  // Today's matches (some locked, some still open)
  {
    id: "m1",
    teamA: teams.USA,
    teamB: teams.MEX,
    group: "Group A",
    kickoff: matchDate(0, 10, 0),
    isLocked: true,
    pointsEarned: 50,
    actualScoreA: 1,
    actualScoreB: 1,
  },
  {
    id: "m2",
    teamA: teams.BRA,
    teamB: teams.CRO,
    group: "Group B",
    kickoff: matchDate(0, 13, 0),
    isLocked: true,
    pointsEarned: 25,
    actualScoreA: 2,
    actualScoreB: 1,
  },
  {
    id: "m3",
    teamA: teams.FRA,
    teamB: teams.AUS,
    group: "Group C",
    kickoff: matchDate(0, 16, 0),
    isLocked: false,
  },
  {
    id: "m4",
    teamA: teams.ARG,
    teamB: teams.NGA,
    group: "Group D",
    kickoff: matchDate(0, 19, 0),
    isLocked: false,
  },
  {
    id: "m5",
    teamA: teams.ESP,
    teamB: teams.JPN,
    group: "Group E",
    kickoff: matchDate(0, 22, 0),
    isLocked: false,
  },

  // Tomorrow's matches
  {
    id: "m6",
    teamA: teams.GER,
    teamB: teams.KOR,
    group: "Group F",
    kickoff: matchDate(1, 10, 0),
    isLocked: false,
  },
  {
    id: "m7",
    teamA: teams.ENG,
    teamB: teams.SEN,
    group: "Group G",
    kickoff: matchDate(1, 13, 0),
    isLocked: false,
  },
  {
    id: "m8",
    teamA: teams.POR,
    teamB: teams.URU,
    group: "Group H",
    kickoff: matchDate(1, 16, 0),
    isLocked: false,
  },
  {
    id: "m9",
    teamA: teams.NED,
    teamB: teams.COL,
    group: "Group A",
    kickoff: matchDate(1, 19, 0),
    isLocked: false,
  },

  // Day after tomorrow
  {
    id: "m10",
    teamA: teams.CAN,
    teamB: teams.MAR,
    group: "Group B",
    kickoff: matchDate(2, 13, 0),
    isLocked: false,
  },
  {
    id: "m11",
    teamA: teams.MEX,
    teamB: teams.BRA,
    group: "Group C",
    kickoff: matchDate(2, 16, 0),
    isLocked: false,
  },
  {
    id: "m12",
    teamA: teams.USA,
    teamB: teams.ARG,
    group: "Group D",
    kickoff: matchDate(2, 19, 0),
    isLocked: false,
  },
];

// Leaderboard data
export const leaderboardDaily: LeaderboardEntry[] = [
  { rank: 1, username: "GoalKing99", flag: "🇧🇷", points: 175, submittedAgo: "2h ago" },
  { rank: 2, username: "FutbolFan_MX", flag: "🇲🇽", points: 150, submittedAgo: "3h ago" },
  { rank: 3, username: "TotalFootball", flag: "🇳🇱", points: 140, submittedAgo: "1h ago" },
  { rank: 4, username: "LePetitPrince", flag: "🇫🇷", points: 125, submittedAgo: "4h ago" },
  { rank: 5, username: "SamuraiBlue", flag: "🇯🇵", points: 120, submittedAgo: "5h ago" },
  { rank: 6, username: "ThreeLions", flag: "🏴\u200D☠️", points: 115, submittedAgo: "2h ago" },
  { rank: 7, username: "DieManschaft", flag: "🇩🇪", points: 100, submittedAgo: "6h ago" },
  { rank: 8, username: "LaCeleste", flag: "🇺🇾", points: 95, submittedAgo: "3h ago" },
  { rank: 9, username: "SuperEagles", flag: "🇳🇬", points: 90, submittedAgo: "7h ago" },
  { rank: 10, username: "MapleLeaf26", flag: "🇨🇦", points: 85, submittedAgo: "1h ago" },
  { rank: 11, username: "TikiTaka", flag: "🇪🇸", points: 80, submittedAgo: "4h ago" },
  { rank: 12, username: "SeleçãoFan", flag: "🇧🇷", points: 75, submittedAgo: "8h ago" },
  { rank: 13, username: "AlbiCeleste", flag: "🇦🇷", points: 70, submittedAgo: "2h ago" },
  { rank: 14, username: "OranjeArmy", flag: "🇳🇱", points: 65, submittedAgo: "5h ago" },
  { rank: 15, username: "AtlasLions", flag: "🇲🇦", points: 60, submittedAgo: "9h ago" },
];

export const leaderboardWeekly: LeaderboardEntry[] = [
  { rank: 1, username: "TotalFootball", flag: "🇳🇱", points: 825, submittedAgo: "1h ago" },
  { rank: 2, username: "GoalKing99", flag: "🇧🇷", points: 790, submittedAgo: "2h ago" },
  { rank: 3, username: "LePetitPrince", flag: "🇫🇷", points: 760, submittedAgo: "4h ago" },
  { rank: 4, username: "FutbolFan_MX", flag: "🇲🇽", points: 710, submittedAgo: "3h ago" },
  { rank: 5, username: "ThreeLions", flag: "🏴\u200D☠️", points: 680, submittedAgo: "2h ago" },
  { rank: 6, username: "DieManschaft", flag: "🇩🇪", points: 650, submittedAgo: "6h ago" },
  { rank: 7, username: "SamuraiBlue", flag: "🇯🇵", points: 620, submittedAgo: "5h ago" },
  { rank: 8, username: "AlbiCeleste", flag: "🇦🇷", points: 590, submittedAgo: "2h ago" },
  { rank: 9, username: "MapleLeaf26", flag: "🇨🇦", points: 560, submittedAgo: "1h ago" },
  { rank: 10, username: "SuperEagles", flag: "🇳🇬", points: 530, submittedAgo: "7h ago" },
  { rank: 11, username: "LaCeleste", flag: "🇺🇾", points: 510, submittedAgo: "3h ago" },
  { rank: 12, username: "TikiTaka", flag: "🇪🇸", points: 480, submittedAgo: "4h ago" },
  { rank: 13, username: "AtlasLions", flag: "🇲🇦", points: 450, submittedAgo: "9h ago" },
  { rank: 14, username: "OranjeArmy", flag: "🇳🇱", points: 420, submittedAgo: "5h ago" },
  { rank: 15, username: "SeleçãoFan", flag: "🇧🇷", points: 400, submittedAgo: "8h ago" },
];

export const leaderboardAllTime: LeaderboardEntry[] = [
  { rank: 1, username: "TotalFootball", flag: "🇳🇱", points: 4250, submittedAgo: "1h ago" },
  { rank: 2, username: "GoalKing99", flag: "🇧🇷", points: 4100, submittedAgo: "2h ago" },
  { rank: 3, username: "ThreeLions", flag: "🏴\u200D☠️", points: 3950, submittedAgo: "2h ago" },
  { rank: 4, username: "LePetitPrince", flag: "🇫🇷", points: 3800, submittedAgo: "4h ago" },
  { rank: 5, username: "FutbolFan_MX", flag: "🇲🇽", points: 3650, submittedAgo: "3h ago" },
  { rank: 6, username: "DieManschaft", flag: "🇩🇪", points: 3500, submittedAgo: "6h ago" },
  { rank: 7, username: "AlbiCeleste", flag: "🇦🇷", points: 3350, submittedAgo: "2h ago" },
  { rank: 8, username: "SamuraiBlue", flag: "🇯🇵", points: 3200, submittedAgo: "5h ago" },
  { rank: 9, username: "MapleLeaf26", flag: "🇨🇦", points: 3050, submittedAgo: "1h ago" },
  { rank: 10, username: "SuperEagles", flag: "🇳🇬", points: 2900, submittedAgo: "7h ago" },
  { rank: 11, username: "TikiTaka", flag: "🇪🇸", points: 2750, submittedAgo: "4h ago" },
  { rank: 12, username: "LaCeleste", flag: "🇺🇾", points: 2600, submittedAgo: "3h ago" },
  { rank: 13, username: "AtlasLions", flag: "🇲🇦", points: 2450, submittedAgo: "9h ago" },
  { rank: 14, username: "OranjeArmy", flag: "🇳🇱", points: 2300, submittedAgo: "5h ago" },
  { rank: 15, username: "SeleçãoFan", flag: "🇧🇷", points: 2150, submittedAgo: "8h ago" },
];

// User profile
export const currentUser: UserProfile = {
  username: "FootballFanatic",
  avatarInitials: "FF",
  joinedDate: "June 2026",
  totalPoints: 1250,
  allTimeRank: 42,
  predictionsSubmitted: 32,
  totalPredictions: 48,
};

// User's own leaderboard entry
export const userRankDaily: LeaderboardEntry = {
  rank: 42,
  username: "FootballFanatic",
  flag: "🇺🇸",
  points: 45,
  submittedAgo: "3h ago",
};

export const userRankWeekly: LeaderboardEntry = {
  rank: 28,
  username: "FootballFanatic",
  flag: "🇺🇸",
  points: 320,
  submittedAgo: "3h ago",
};

export const userRankAllTime: LeaderboardEntry = {
  rank: 42,
  username: "FootballFanatic",
  flag: "🇺🇸",
  points: 1250,
  submittedAgo: "3h ago",
};

// Helper to format match date for grouping
export function getMatchDateLabel(date: Date): string {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const matchDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diffDays = Math.round(
    (matchDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
  const dateStr = date.toLocaleDateString("en-US", options);

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return `Tomorrow · ${dateStr}`;
  return dateStr;
}

// Helper to format time
export function formatKickoffTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// Group matches by date
export function groupMatchesByDate(
  matchList: Match[]
): { label: string; matches: Match[] }[] {
  const groups: Map<string, { label: string; matches: Match[] }> = new Map();

  for (const match of matchList) {
    const label = getMatchDateLabel(match.kickoff);
    if (!groups.has(label)) {
      groups.set(label, { label, matches: [] });
    }
    groups.get(label)!.matches.push(match);
  }

  return Array.from(groups.values());
}

/**
 * Calculates points based on prediction vs actual result.
 * Exact Match: 50
 * Same Winner, Different Margin: 25
 * Draw Exact Match: 50
 * Prediction not matched, but actual result is draw: 10
 * Opposite Winner: -10
 */
export function calculatePoints(
  predA: number,
  predB: number,
  actualA: number,
  actualB: number
): number {
  // Exact Match (including Exact Draw)
  if (predA === actualA && predB === actualB) {
    return 50;
  }

  const predWinner = predA > predB ? "A" : predA < predB ? "B" : "Draw";
  const actualWinner = actualA > actualB ? "A" : actualA < actualB ? "B" : "Draw";

  // If the actual result is a draw but not an exact match
  if (actualWinner === "Draw") {
    return 10;
  }

  // Same Winner logic (A or B)
  if (predWinner !== "Draw" && predWinner === actualWinner) {
    return 25;
  }

  // Opposite Winner logic
  if (
    (predWinner === "A" && actualWinner === "B") ||
    (predWinner === "B" && actualWinner === "A")
  ) {
    return -10;
  }

  // Any other case (e.g., predicted Draw but A or B won)
  return 0;
}
