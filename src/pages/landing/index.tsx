import { useState } from 'react'
import { Link } from 'react-router'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // Store locally for now — replace with your email capture endpoint
    const existing = JSON.parse(localStorage.getItem('early-access-emails') ?? '[]')
    localStorage.setItem('early-access-emails', JSON.stringify([...existing, { email, ts: Date.now() }]))
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-base font-bold tracking-tight text-gray-900">Canvao</span>
          <Link
            to="/agencies"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Explore demo →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-8">
          Early access · Creative agencies only
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          Run your creative agency without the spreadsheet chaos
        </h1>

        <p className="text-lg text-gray-500 max-w-xl mb-10">
          Canvao connects your clients, campaigns, briefs, deliverables, and timesheets in one place —
          built for studios that are tired of duct-taping five tools together.
        </p>

        {/* CTA */}
        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="text-green-600 font-medium">You're on the list. We'll be in touch.</div>
            <Link
              to="/agencies"
              className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900"
            >
              Explore the demo in the meantime
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              required
              placeholder="your@agency.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              Get early access
            </button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe any time.</p>
      </main>

      {/* Feature strip */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { title: 'Campaign & project tracking', body: 'From first brief to final delivery — every phase, task, and comment in one view.' },
            { title: 'Client revision workflows', body: 'Structured revision rounds with asset versioning so nothing gets lost in email.' },
            { title: 'Timesheet & brand management', body: 'Track billable hours and keep brand kits organised across all your clients.' },
          ].map((f) => (
            <div key={f.title}>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Canvao · Built with care for creative teams
      </footer>
    </div>
  )
}
