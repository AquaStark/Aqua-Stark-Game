"use client";

import { useCountdown } from "@/components/storage/hooks/use-countdown";

type CountdownTimerProps = {
  countdown: string; // "HH:MM:SS" format
};

export const CountdownTimer = ({ countdown }: CountdownTimerProps) => {
  const { formattedTimeLeft } = useCountdown(countdown);

  return (
    <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full text-sm font-medium">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {formattedTimeLeft}
    </div>
  );
};
