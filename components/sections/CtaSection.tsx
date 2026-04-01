export default function CtaSection() {
  return (
    <section className="pb-24">
      <div className="container-shell">
        <div className="rounded-[2rem] bg-gradient-to-r from-slate-950 via-brand-800 to-cyan-600 p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-100">Ready for the live version?</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Put FridgeSmart online, connect the domain, and start turning visits into app downloads.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50">
            This second pass upgrades the design, strengthens the messaging, and gives you a much better base for a high-converting product website.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933"
              className="rounded-full bg-white px-6 py-3.5 text-center text-base font-semibold text-slate-950 transition hover:bg-brand-100"
            >
              View App Store
            </a>
            <a
              href="mailto:support@fridgesmartapp.com"
              className="rounded-full border border-white/30 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
