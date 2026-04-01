const steps = [
  {
    number: '01',
    title: 'Scan what came home',
    description: 'Use receipt scan, barcode scan, or a quick fridge capture to get items into the app faster.',
  },
  {
    number: '02',
    title: 'See what needs attention',
    description: 'FridgeSmart organizes what is fresh, what is running low, and what should be used soonest.',
  },
  {
    number: '03',
    title: 'Let Chef Lumi guide the next move',
    description: 'Get recipes, meal ideas, and smarter shopping decisions based on what is actually available.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-slate-950 py-24 text-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-300">How it works</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Three simple steps from fridge chaos to a smarter dinner plan.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            This flow keeps the story clean: FridgeSmart creates visibility, then Chef Lumi creates action. That makes the product easier to understand and much stronger for conversion.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <p className="text-5xl font-black text-brand-300">{step.number}</p>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
