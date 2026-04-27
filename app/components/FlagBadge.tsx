import Image from "next/image";

// Map team codes to ISO 3166-1 alpha-2 codes for flag images
const codeToIso: Record<string, string> = {
  USA: "us",
  MEX: "mx",
  CAN: "ca",
  BRA: "br",
  ARG: "ar",
  GER: "de",
  FRA: "fr",
  ENG: "gb-eng",
  ESP: "es",
  POR: "pt",
  JPN: "jp",
  KOR: "kr",
  AUS: "au",
  NGA: "ng",
  MAR: "ma",
  SEN: "sn",
  NED: "nl",
  CRO: "hr",
  URU: "uy",
  COL: "co",
};

interface FlagBadgeProps {
  code: string;
  size?: number;
}

export default function FlagBadge({ code, size = 24 }: FlagBadgeProps) {
  const iso = codeToIso[code] || code.toLowerCase();
  const src = `https://flagcdn.com/w40/${iso}.png`;

  return (
    <Image
      src={src}
      alt={code}
      width={size}
      height={size}
      className="rounded-full object-cover shrink-0 border border-white/10"
      style={{ width: size, height: size }}
      unoptimized
    />
  );
}
