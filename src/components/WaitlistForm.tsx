"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");

    // Validación simple
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setStatus("error");
      setMsg("Introduce un email válido.");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("ok");
      setMsg("¡Listo! Te avisaremos cuando lancemos.");
      setEmail("");
    } catch {
      setStatus("error");
      setMsg("No hemos podido registrarte. Inténtalo de nuevo.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="tuemail@club.com"
          className="flex-1 rounded-md border border-black bg-white px-4 py-3 text-black placeholder-black/50 outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md px-5 py-3 font-medium bg-black text-white hover:bg-black/90 disabled:opacity-50"
        >
          {status === "loading" ? "Enviando…" : "Quiero acceso"}
        </button>
      </div>

      {msg && (
        <p className="mt-3 text-sm text-black">
          {msg}
        </p>
      )}

      <p className="mt-2 text-xs text-black/60">
        Al enviar aceptas recibir novedades de SmartCoachIQ. Sin spam.
      </p>
    </form>
  );
}
