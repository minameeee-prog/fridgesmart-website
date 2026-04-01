export default function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Download now</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Start with the app. Build the habit. Let the value compound over time.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                FridgeSmart works best when it becomes part of everyday kitchen behavior: scan what comes in, watch what matters, and ask Chef Lumi what to do next.
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-200">Current access</p>
              <p className="mt-3 text-4xl font-black">Download the app today</p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                This section is now tuned for conversion. Later, you can swap it for premium tiers, a Chef Lumi subscription, or a family plan without changing the page structure.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933"
                  className="rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-slate-950 transition hover:bg-brand-100"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-base font-semibold text-white transition hover:border-brand-300 hover:text-brand-200"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
