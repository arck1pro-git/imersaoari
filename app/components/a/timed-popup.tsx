"use client";
import { useEffect } from "react";

export default function TimedPopup() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("open-lead-modal"));
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
