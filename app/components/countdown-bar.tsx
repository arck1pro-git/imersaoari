"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const TARGET = new Date("2026-05-26T20:00:00-03:00").getTime();
function pad(n: number) { return String(n).padStart(2, "0"); }

export default function CountdownBar() {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const scrolledRef = useRef(false);
  const animFrameRef = useRef(0);

  useEffect(() => { setMounted(true); }, []);

  // Countdown timer
  useEffect(() => {
    function tick() {
      const diff = TARGET - Date.now();
      if (diff <= 0) { setT({ days: "00", hours: "00", minutes: "00", seconds: "00" }); return; }
      setT({
        days: pad(Math.floor(diff / 86400000)),
        hours: pad(Math.floor((diff / 3600000) % 24)),
        minutes: pad(Math.floor((diff / 60000) % 60)),
        seconds: pad(Math.floor((diff / 1000) % 60)),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Scroll background animation — background managed via ref only, never via JSX style prop
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.background = "#000000";

    function setBg(p: number) {
      if (!el) return;
      if (p <= 0) { el.style.background = "#000000"; return; }
      if (p >= 100) { el.style.background = "#dc2626"; return; }
      el.style.background = `linear-gradient(to right, #dc2626 ${p}%, #000000 ${p}%)`;
    }

    function animate(target: number) {
      cancelAnimationFrame(animFrameRef.current);
      function step() {
        const diff = target - progressRef.current;
        const delta = diff > 0 ? Math.min(4, diff) : Math.max(-4, diff);
        progressRef.current += delta;
        setBg(progressRef.current);
        if (Math.abs(target - progressRef.current) > 0.1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          progressRef.current = target;
          setBg(target);
        }
      }
      animFrameRef.current = requestAnimationFrame(step);
    }

    function onScroll() {
      if (window.scrollY > 10 && !scrolledRef.current) {
        scrolledRef.current = true;
        setScrolled(true);
        animate(100);
      } else if (window.scrollY <= 10 && scrolledRef.current) {
        scrolledRef.current = false;
        setScrolled(false);
        animate(0);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const bar = (
    <div
      ref={containerRef}
      id="countdown-container"
      className={`text-white py-1 px-4 font-bold text-sm tracking-widest uppercase fixed top-0 left-0 right-0 z-[9999]${scrolled ? " text-dark" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-1">
        <div className="flex items-center justify-center gap-4">
          <span className="text-3xl font-cormorant font-thin"></span>
          <div className="text-2xl p-1 text-center">
            <div className="text-2xl font-bold"><span className="text-red-500">{t.days}</span> DIAS</div>
          </div>
          <div className="text-2xl p-1 text-center">
            <span className="text-red-500 font-bold">{t.hours}</span> H
          </div>
          <div className="text-2xl p-1 text-center">
            <span className="text-red-500 font-bold">{t.minutes}</span> MIN
          </div>
          <div className="text-2xl p-1 text-center">
            <span className="text-red-500 font-bold">{t.seconds}</span> SEG
          </div>
        </div>
      </div>
    </div>
  );

  return mounted ? createPortal(bar, document.body) : null;
}
