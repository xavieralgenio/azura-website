import React from 'react'

// ── Brand tokens ──────────────────────────────────────────────────────────────
const BLUE  = '#6B9FD4'  // hydrangea blue
const MINT  = '#4DC9A8'  // mint green
const NAVY  = '#1A2E4A'  // deep heading text
const MUTED = '#64748b'  // body / caption text

// ── Icons (inline SVG so no extra deps) ──────────────────────────────────────
const icons: Record<string, React.ReactNode> = {
  brain: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.16Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.16Z"/>
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  calendar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  ),
  memory: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
      <path d="M10 7V5a2 2 0 0 1 4 0v2M10 17v2a2 2 0 0 0 4 0v-2"/>
    </svg>
  ),
  dashboard: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  channels: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>
    </svg>
  ),
}

// ── Feature card ─────────────────────────────────────────────────────────────
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent: string
}

function FeatureCard({ icon, title, description, accent }: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-[30px] p-6 border border-slate-200/80 shadow-[0_22px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-4 h-1.5 w-16 rounded-full" style={{ background: accent }} />
      <div
        className="w-12 h-12 rounded-3xl flex items-center justify-center flex-shrink-0 mb-4"
        style={{ background: `${accent}15`, color: accent }}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2" style={{ color: NAVY }}>{title}</h3>
        <p className="text-sm leading-7" style={{ color: MUTED }}>{description}</p>
      </div>
    </div>
  )
}

// ── Main Body ─────────────────────────────────────────────────────────────────
export default function Body() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, #F7FAFE 0%, #F3FBF5 60%, #ffffff 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-20 top-16 w-72 h-72 rounded-full bg-[#4DC9A8]/20 blur-3xl" />
          <div className="absolute right-0 top-20 w-96 h-96 rounded-full bg-[#6B9FD4]/20 blur-3xl" />
          <div className="absolute left-1/2 top-28 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-white/80 blur-2xl" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 15%, ${BLUE}15 0px, transparent 32%), radial-gradient(circle at 80% 10%, ${MINT}18 0px, transparent 32%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

            {/* Left — copy */}
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] mb-6"
                style={{ background: `${BLUE}15`, color: BLUE }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: BLUE }} />
                AI Receptionist for Resorts
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6"
                style={{ color: NAVY }}
              >
                A premium resort receptionist that
                <span className="block mt-3 text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${MINT})` }}
                >
                  never misses a booking.
                </span>
              </h1>

              <p className="text-lg leading-8 max-w-xl mb-10" style={{ color: MUTED }}>
                AZURA transforms guest messaging into fast, frictionless bookings with instant responses,
                personalized follow-ups, and returning guest memory—so your front desk feels staffed 24/7.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { value: '24/7', label: 'Live coverage' },
                  { value: '<2s', label: 'Response time' },
                  { value: '98%', label: 'Booking accuracy' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm"
                  >
                    <p className="text-3xl font-semibold" style={{ color: NAVY }}>{value}</p>
                    <p className="text-sm mt-2" style={{ color: MUTED }}>{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={e => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                  style={{ background: `linear-gradient(135deg, ${BLUE}, ${MINT})` }}
                >
                  Get In Touch
                </a>
                <a
                  href="#product"
                  onClick={e => {
                    e.preventDefault()
                    const el = document.getElementById('product')
                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-slate-700 border border-slate-300 bg-white/90 transition-all duration-200 hover:bg-slate-100"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-10 text-sm text-slate-500 max-w-xl">
                Trusted by coastal resorts and boutique hotels that want faster response times, stronger bookings, and more personal guest experiences.
              </div>
            </div>

            {/* Right — Hero Showcase Photo */}
            <div className="relative z-10 flex justify-center lg:justify-end w-full">
              <img 
                src="/hero-showcase.png" 
                alt="AZURA AI Platform Interface Illustration" 
                className="w-full max-w-[520px] lg:max-w-none h-auto object-contain drop-shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT ──────────────────────────────────────────────────────── */}
      <section id="product" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-[#E8F6FF] px-4 py-2 text-sm font-semibold text-[#1A2E4A]">
              <span className="h-2 w-2 rounded-full bg-[#4DC9A8]" />
              Designed for hospitality teams
            </div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.24em] mb-3"
              style={{ color: MINT }}
            >
              What AZURA Does
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: NAVY }}>
              One AI. Every guest interaction.
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: MUTED }}>
              AZURA combines LLM reasoning, structured booking logic, and guest memory into one conversational
              system, so operators can convert messages into bookings without adding complexity.
            </p>
          </div>

          {/* Capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              icon={icons.brain}
              accent={BLUE}
              title="Natural Language Understanding"
              description="Guests can ask anything, the way they'd actually say it. AZURA extracts intent and booking details from conversational messages — including vague or incomplete ones."
            />
            <FeatureCard
              icon={icons.clock}
              accent={MINT}
              title="24/7 Receptionist Coverage"
              description="Answers FAQs, explains room types, amenities, and policies instantly — any hour, any day. No staffing gaps, no hold music."
            />
            <FeatureCard
              icon={icons.calendar}
              accent={BLUE}
              title="Intelligent Booking Management"
              description="Detects booking intent automatically, collects check-in dates, guest count, room type, and special requests, then confirms before saving — no incomplete reservations."
            />
            <FeatureCard
              icon={icons.memory}
              accent={MINT}
              title="Persistent Guest Memory"
              description='Recognizes returning guests and recalls their previous rooms and preferences. "Book the same room as last time" just works.'
            />
            <FeatureCard
              icon={icons.dashboard}
              accent={BLUE}
              title="Admin Management Dashboard"
              description="A unified inbox for all channels, real-time booking analytics, human-override for complex cases, and a simple editor to keep the AI's knowledge base current."
            />
            <FeatureCard
              icon={icons.channels}
              accent={MINT}
              title="Multi-Channel Ready"
              description="Live on Facebook Messenger and web chat today, with WhatsApp and mobile app integrations on the roadmap."
            />
          </div>

          {/* Architecture callout */}
          <div
            className="mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
            style={{ background: `linear-gradient(135deg, ${BLUE}10 0%, ${MINT}10 100%)`, border: `1px solid ${BLUE}20` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
              style={{ background: `linear-gradient(135deg, ${BLUE}, ${MINT})` }}
            >
              ⚡
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1" style={{ color: NAVY }}>
                Hybrid AI Architecture
              </h3>
              <p className="text-sm" style={{ color: MUTED }}>
                LLM reasoning handles the conversation. Structured booking logic ensures nothing is
                missed or double-booked. A persistent database layer powers guest memory. All three
                layers work together — so AZURA is both fluent and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #F3F8FF 0%, #F7FCF7 100%)' }}
      >
        <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-[#6B9FD4]/15 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-[#4DC9A8]/15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">

            {/* Left — copy */}
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] mb-3" style={{ color: BLUE }}>
                Talk to our team
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5" style={{ color: NAVY }}>
                Ready to make every guest interaction feel effortless?
              </h2>
              <p className="text-base max-w-xl mb-10" style={{ color: MUTED }}>
                Get in touch with us through any of our channels. Our team is available to discuss your resort's operations and map out a tailored automated setup.
              </p>

              <div className="grid gap-4">
                {[
                  { icon: '💬', label: 'Personal demo', desc: 'A walkthrough built for your resort and operations' },
                  { icon: '⚙️', label: 'Fast onboarding', desc: 'Rooms, rates, and FAQs ready in days' },
                  { icon: '📈', label: 'Revenue lift', desc: 'More confirmed bookings without more staff' },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm flex items-start gap-4">
                    <div className="w-11 h-11 rounded-3xl flex items-center justify-center text-lg" style={{ background: `${MINT}20` }}>
                      {icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: NAVY }}>{label}</p>
                      <p className="text-sm" style={{ color: MUTED }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Channels List (Replaced form container) */}
            <div className="relative z-10 bg-white rounded-[32px] border border-slate-200/80 shadow-[0_28px_80px_rgba(15,23,42,0.08)] p-8 md:p-10">
              <div className="inline-flex items-center rounded-full px-4 py-2 mb-6 text-sm font-medium" style={{ background: `${BLUE}10`, color: BLUE }}>
                <span className="mr-2">✨</span>
                Direct response channels
              </div>
              
              <h3 className="font-semibold text-2xl mb-6" style={{ color: NAVY }}>
                Contact Us
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:azura.ai.systems@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white shadow-sm transition-transform group-hover:scale-105" style={{ background: BLUE }}>
                    ✉️
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: MUTED }}>Email Address</p>
                    <p className="text-sm font-medium text-slate-800 break-all group-hover:underline">azura.ai.systems@gmail.com</p>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61590745234264" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105" style={{ background: '#1877F2' }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.85z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: MUTED }}>Facebook</p>
                    <p className="text-sm font-medium text-slate-800 group-hover:underline">AZURA AI Systems</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:09693548328"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white shadow-sm transition-transform group-hover:scale-105" style={{ background: MINT }}>
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: MUTED }}>Phone Number</p>
                    <p className="text-sm font-medium text-slate-800 group-hover:underline">0969 354 8328</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-200/80 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-6 items-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-2xl flex items-center justify-center text-white font-bold text-sm"
                style={{ background: `linear-gradient(135deg, ${BLUE}, ${MINT})` }}
              >A</div>
              <div>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>AZURA AI Systems</p>
                <p className="text-xs" style={{ color: MUTED }}>Guest-first AI for resorts</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Contact</span>
            </div>
          </div>

          <div className="text-right text-xs text-slate-500">
            <p>© {new Date().getFullYear()} AZURA AI Systems. All rights reserved.</p>
            <p>Autonomous Zero-touch User Response Agentic AI</p>
          </div>
        </div>
      </footer>
    </>
  )
}