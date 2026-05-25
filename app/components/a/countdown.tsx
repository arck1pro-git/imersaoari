"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-30T09:00:00-03:00").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  return {
    days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: pad(Math.floor((diff / (1000 * 60)) % 60)),
    seconds: pad(Math.floor((diff / 1000) % 60)),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-white py-1 px-4 font-bold text-sm tracking-widest uppercase fixed top-0 left-0 right-0 z-50" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 lg:text-2xl">
        <div className="p-1 text-center">
          <span className="text-red-500">{time.days}</span> DIAS
        </div>
        <div className="p-1 text-center">
          <span className="text-red-500">{time.hours}</span> H
        </div>
        <div className="p-1 text-center">
          <span className="text-red-500">{time.minutes}</span> MIN
        </div>
        <div className="p-1 text-center">
          <span className="text-red-500">{time.seconds}</span> SEG
        </div>
      </div>
    </div>
  );
}
