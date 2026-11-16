"use client";

import { useEffect, useState } from "react";
import { services } from "@/lib/content";

const ENDPOINT = "https://api-inform.bythub.in/?formId=cJKdh04cEdtFd40aOvUP";

const BUDGETS = ["Under $1,500", "$1,500–$3,500", "$3,500–$7,500", "$7,500+", "Not sure yet"];

type State = "idle" | "sending" | "done" | "error";

export default function LeadForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("service") ?? "";
    const plan = params.get("plan");
    if (q) setService(q);
    if (plan) setNote(`I’m interested in the “${plan}” plan.`);
  }, []);

  if (state === "done") {
    return (
      <div className="panel" role="status">
        <div className="eyebrow">Request received</div>
        <h2 style={{ fontSize: 30 }}>Thank you. We’ll be in touch.</h2>
        <p className="lead" style={{ margin: "12px 0 20px" }}>
          We reply to every enquiry within one business day. If it is urgent, call{" "}
          <a href="tel:+16193654177" style={{ color: "var(--ink)", textDecoration: "underline" }}>
            +1 (619) 365-4177
          </a>
          .
        </p>
        <button type="button" className="btn" onClick={() => setState("idle")}>
          Send another request <span className="arr">↗</span>
        </button>
      </div>
    );
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_hp") ?? "")) return;

    setState("sending");
    setMessage("");

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      company: data.get("company"),
      website: data.get("website"),
      country: data.get("country"),
      service: data.get("service"),
      budget: data.get("budget"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
      page: window.location.href,
      source: "clickboostmedia.com contact form",
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        // text/plain keeps this a CORS "simple request" — the endpoint parses the JSON body.
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setState("done");
    } catch {
      setState("error");
      setMessage("That did not send. Please email info@clickboostmedia.com or call +1 (619) 365-4177.");
    }
  }

  return (
    <form onSubmit={submit} noValidate={false}>
      <label>
        Your name *
        <input name="name" required maxLength={120} autoComplete="name" placeholder="Alex Morgan" />
      </label>
      <label>
        Work email *
        <input name="email" type="email" required autoComplete="email" placeholder="alex@company.com" />
      </label>
      <label>
        Company
        <input name="company" maxLength={160} autoComplete="organization" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" />
      </label>
      <label>
        Website
        <input name="website" type="url" placeholder="https://yourcompany.com" />
      </label>
      <label>
        Country
        <select name="country" defaultValue="United States">
          {["United States", "Canada", "United Kingdom", "India", "Australia", "Other"].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <label>
        What can we help with? *
        <select name="service" required value={service} onChange={(e) => setService(e.target.value)}>
          <option value="" disabled>
            Select an area
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        Monthly investment *
        <select name="budget" required defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {BUDGETS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <label className="full">
        Tell us about your goals *
        <textarea
          name="message"
          required
          minLength={5}
          maxLength={4000}
          rows={5}
          defaultValue={note}
          placeholder="Where are you today, and what would you like to achieve?"
        />
      </label>
      <label className="hp" aria-hidden="true">
        Leave this field empty
        <input name="_hp" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="full" style={{ display: "flex", gap: 10, alignItems: "start" }}>
        <input name="consent" type="checkbox" required style={{ width: "auto", marginTop: 3 }} />
        <span>
          I agree to share my details so ClickBoostMedia can respond to this request. See our{" "}
          <a href="/privacy/" style={{ textDecoration: "underline" }}>
            privacy policy
          </a>
          . *
        </span>
      </label>
      {message && (
        <p className="full err" role="alert">
          {message}
        </p>
      )}
      <div className="full">
        <button type="submit" className="btn" disabled={state === "sending"} style={{ justifySelf: "start" }}>
          {state === "sending" ? (
            "Sending…"
          ) : (
            <>
              Send discovery request <span className="arr">↗</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
