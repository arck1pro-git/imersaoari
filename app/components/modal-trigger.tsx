"use client";

export default function ModalTrigger({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
    >
      {children}
    </button>
  );
}
