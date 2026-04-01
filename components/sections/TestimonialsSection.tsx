const testimonials = [
  {
    quote: 'I stopped buying the same items twice because I could finally see what was already at home.',
    name: 'Busy parent',
  },
  {
    quote: 'Chef Lumi makes meal decisions feel easier. It feels like I already know my next step when I open the app.',
    name: 'Weekly meal planner',
  },
  {
    quote: 'This feels more useful than a normal recipe app because it starts from what I already have.',
    name: 'Early user',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="why-it-works" className="py-24">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Why it works</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            The product promise is simple: give people visibility first, then make the next decision easier.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
