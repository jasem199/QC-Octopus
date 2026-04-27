import Image from "next/image";

export default function AdBanner() {
  return (
    <div className="flex items-center justify-center my-5">
      <div className="relative w-full h-[120px] rounded-[18px] overflow-hidden animate-slow-yellow-glow border border-white/10">
        <Image
          src="/jersey-ad.png"
          alt="Advertisement"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
