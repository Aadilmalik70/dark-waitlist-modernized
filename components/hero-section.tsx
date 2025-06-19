"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
 
import { Input } from "@/components/ui/input"
import { useState } from "react"

function EmailSubscribeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setMessage(data.message || "Thank you for joining our waitlist!");
        setEmail("");
      } else if (res.status === 409 && data.alreadySubscribed) {
        setError(data.error || "This email is already on our waitlist.");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full"
      style={{ maxWidth: "700px", margin: "0 auto" }}
    >
      <div className="flex w-full max-w-[700px]">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="h-14 px-4 rounded-l-xl rounded-r-none text-base flex-1 min-w-[220px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[420px] border-r-0"
          disabled={loading}
        />
        <Button
          type="submit"
          className="h-14 px-8 rounded-r-xl rounded-l-none bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:scale-105 transform"
          disabled={loading}
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        >
          {loading ? "Submitting..." : "Join the Waitlist"}
        </Button>
      </div>
      <div className="w-full mt-2 text-sm min-h-[24px] flex justify-center items-center">
        {success && <span className="text-green-400">{message}</span>}
        {error && <span className="text-red-400">{error}</span>}
      </div>
    </form>
  );
}

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0"></div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-purple-500 opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 rounded-full bg-blue-500 opacity-50 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 rounded-full bg-indigo-500 opacity-70 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="px-3 py-1 text-purple-300 text-sm font-medium">The Future of Content Strategy is Here</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 leading-tight max-w-4xl">
            Go Beyond Keywords. Command Your SERPs with Agentic AI Content Blueprints.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10">
            SERP Strategist employs innovative AI agents to perform deep competitive research, generating unparalleled content blueprints that guide you to outrank the competition and capture search visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            {/* Email subscription form */}
            <EmailSubscribeForm />
          </div>
          
          {/* Added stats section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Innovators Joined</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400 mb-1">30%</div>
              <div className="text-gray-400 text-sm">Launch Discount</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400 mb-1">14 Days</div>
              <div className="text-gray-400 text-sm">Until Launch</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-indigo-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
