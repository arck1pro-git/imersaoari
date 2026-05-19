"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const HOOK =
  "https://sprinthub-api-master.sprinthub.app/api/hook/v?i=arck1pro&access_token=NHeAx9NK9aXTQhuuSfpzwvDB2BloO-Xrujo-DLKyPJknPlDHZ0";

export default function ParamTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const nome = searchParams.get("nome");
    const email = searchParams.get("email");
    const numero = searchParams.get("numero");
    const utm_source = searchParams.get("utm_source");

    if (!numero) return;

    const payload: Record<string, string> = { numero };
    const params = new URLSearchParams(payload);
    fetch(`${HOOK}&${params.toString()}`, { method: "POST", keepalive: true }).catch(() => {});
  }, []);

  return null;
}
