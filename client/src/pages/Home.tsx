import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import AzuraEmbed from "@/components/AzuraEmbed";
import FinalCTA from "@/components/FinalCTA";

/**
 * Design Philosophy: Modern Minimalist with Sophisticated Depth
 * - Premium AI SaaS aesthetic matching Hijiffy, Asksuite, GuestChat
 * - Deep blue (#0066CC) + Green (#00A86B) color palette
 * - Glassmorphic cards, smooth animations, professional typography
 * - Asymmetric layouts, strategic whitespace, conversational warmth
 */
export default function Home() {
  const [, setLocation] = useLocation();
  const [showDemoForm, setShowDemoForm] = useState(false);

  const handleBookDemo = () => {
    setLocation("/book-demo");
  };

  const handleStartTrial = () => {
    setLocation("/start-free-trial");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBookDemoClick={handleBookDemo} />
      <Hero onBookDemoClick={handleBookDemo} />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Comparison />
      <AzuraEmbed />
      <Pricing onStartTrialClick={handleStartTrial} />
      <FAQ />
      <FinalCTA onShowForm={showDemoForm} onSetShowForm={setShowDemoForm} onBookDemoClick={handleBookDemo} onStartTrialClick={handleStartTrial} />
    </div>
  );
}
