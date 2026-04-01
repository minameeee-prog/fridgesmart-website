import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChefHat, Refrigerator, ScanLine, ShoppingBag, Sparkles } from 'lucide-react';

const miniCards = [
  { icon: ScanLine, label: 'Scan groceries fast' },
  { icon: Refrigerator, label: 'Know what is inside' },
  { icon: ChefHat, label: 'Cook from what you have' },
  { icon: ShoppingBag, label: 'Shop with more intention' },
];

const statCards = [
  { value: '1 app', label: 'for food tracking, recipes, and shopping flow' },
  { value: '0 guesswork', label: 'when deciding what to cook tonight' },
  { value: 'Chef Lumi', label: 'built in to guide next best actions' },
];

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(46,167,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_28%),linear-gradient(180deg,#f8fbff_0%,#ffffff_48%,#f8fbff_100%)]">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="container-shell relative grid gap-16 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24 xl:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-4 py-2 text-sm font-semibold text-brand-700 shadow-soft">
            <Sparkles className="h-4 w-4" />
            Designed to make FridgeSmart feel essential every day
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            Your fridge is not empty. <span className="text-brand-700">You just need to see it clearly.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            FridgeSmart helps people scan what they already bought, track expiration dates, and get meal ideas from Chef Lumi before food gets forgotten, duplicated, or wasted.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              iPhone + Android
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              AI recipes with Chef Lumi
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Smart expiration awareness
            </span>
          </div>

          <div id="download" className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-700"
            >
              Download on the App Store
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-700"
            >
              Get it on Google Play
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {miniCards.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white bg-white/90 p-4 shadow-soft ring-1 ring-slate-100">
                <div className="rounded-xl bg-brand-100 p-2 text-brand-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-slate-700">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {statCards.map((item) => (
              <div key={item.value} className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-soft">
                <p className="text-2xl font-black tracking-tight text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-10 top-10 h-72 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="relative grid w-full max-w-3xl gap-4 xl:grid-cols-[1fr_280px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/90 bg-white/90 p-3 shadow-[0_28px_80px_rgba(15,23,42,0.14)] ring-1 ring-slate-100">
              <div className="relative aspect-[10/16] overflow-hidden rounded-[1.6rem] bg-slate-100">
                <Image src="/assets/fridgesmart-app-screen.png" alt="FridgeSmart app screen" fill className="object-cover" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-3xl border border-white/80 bg-white/95 p-5 shadow-soft">
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-brand-50 ring-1 ring-slate-100">
                    <Image src="/assets/chef-lumi-avatar.png" alt="Chef Lumi avatar" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Chef Lumi</p>
                    <p className="text-sm text-slate-500">Your AI kitchen guide</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  “You already have enough for dinner. I found 3 meals using what is in your fridge, and one of them takes less than 20 minutes.”
                </p>
              </div>

              <div className="rounded-3xl border border-brand-200 bg-brand-50 p-5 shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">Why people keep it</p>
                <p className="mt-3 text-2xl font-black tracking-tight text-slate-950">It turns groceries into visibility.</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Instead of reopening the fridge and wondering what to do, people get a clear inventory, expiration urgency, and a next step.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Daily value</p>
                <p className="mt-3 text-3xl font-black">Less waste. Smarter meals. Better shopping habits.</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  FridgeSmart is positioned like an everyday kitchen operating system, not just another recipe app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
