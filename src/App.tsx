import React from 'react'
import Header from './components/Header'
import Body from './components/Body'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Fixed header — 72px tall */}
      <Header />

      {/* All page content: hero, product section, contact, footer */}
      {/* pt-[72px] offsets the fixed header so nothing hides behind it */}
      <div className="pt-[72px]">
        <Body />
      </div>
    </div>
  )
}