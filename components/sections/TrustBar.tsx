const items = [
  'Receipt scan support',
  'Barcode + fridge tracking',
  'Chef Lumi AI guidance',
  'Expiration-first reminders',
  'Shopping flow support',
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-shell flex flex-col gap-4 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8">
        {items.map((item) => (
          <div key={item} className="text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
