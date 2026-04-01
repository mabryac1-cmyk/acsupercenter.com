"use client";

import { useState } from "react";

const PHONE = "832-221-3688";
const PHONE_HREF = "tel:8322213688";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    systemInfo: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", city: "", systemInfo: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-6">
          Thanks! We received your request and will be in touch shortly with your quote.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-green-700 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-brand-red">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(832) 555-1234"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your City / Area
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            placeholder="The Woodlands, Katy, etc."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="systemInfo" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Existing System Info{" "}
          <span className="font-normal text-gray-400">(Model / Serial # from your unit label — optional)</span>
        </label>
        <input
          id="systemInfo"
          name="systemInfo"
          type="text"
          value={form.systemInfo}
          onChange={handleChange}
          placeholder="e.g. Trane 4TTR4036L1000AA / Serial: 20123D00001"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm"
        />
        <p className="mt-1.5 text-xs text-gray-500">
          Can also text a photo of your unit label to{" "}
          <a href={PHONE_HREF} className="text-brand-red font-medium hover:underline">
            {PHONE}
          </a>{" "}
          for a faster, more accurate quote.
        </p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Additional Questions or Comments
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your home, your current system issues, or any questions you have..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          Something went wrong. Please try again or call us directly at{" "}
          <a href={PHONE_HREF} className="font-bold underline">{PHONE}</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-lg shadow-brand-red/25"
      >
        {status === "loading" ? "Sending..." : "Get My Free Quote"}
      </button>

      <p className="text-center text-xs text-gray-500">
        We typically respond within a few hours during business hours. No spam, ever.
      </p>
    </form>
  );
}
