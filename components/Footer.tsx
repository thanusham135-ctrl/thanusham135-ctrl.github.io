export default function Footer() {
  return (
    <footer className="bg-ink text-white/55 pt-16 pb-9 px-[5vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
        <div>
          <a href="#hero" className="inline-flex items-center gap-2.5 font-display font-black text-xl tracking-tight text-white no-underline mb-4">
            <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
            </div>
            StudySphere
          </a>
          <p className="text-sm leading-relaxed max-w-xs text-white/50">
            The AI-powered study planner built for engineering students. Plan smarter, study better, stress less.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-white text-base mb-4">Product</h4>
          {['Features', 'How It Works', 'Pricing', 'Changelog'].map(l => (
            <a key={l} href="#" className="block text-sm text-white/50 hover:text-white no-underline mb-2.5 transition-colors">{l}</a>
          ))}
        </div>
        <div>
          <h4 className="font-display font-bold text-white text-base mb-4">Company</h4>
          {['About', 'Contact', 'Privacy Policy', 'Terms of Service'].map(l => (
            <a key={l} href="#" className="block text-sm text-white/50 hover:text-white no-underline mb-2.5 transition-colors">{l}</a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-3 text-xs">
        <span>© 2025 StudySphere. Made with ❤️ for engineering students.</span>
        <span className="flex gap-4">
          <a href="#" className="text-white/40 hover:text-white no-underline transition-colors">Privacy</a>
          <a href="#" className="text-white/40 hover:text-white no-underline transition-colors">Terms</a>
        </span>
      </div>
    </footer>
  )
}
