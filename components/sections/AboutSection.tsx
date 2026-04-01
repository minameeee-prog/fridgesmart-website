import Image from 'next/image';
import { BadgeCheck, ChefHat, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image src="/assets/owner-avatar.png" alt="FridgeSmart founder avatar" fill className="object-cover" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-brand-50 ring-1 ring-slate-100">
                <Image src="/assets/chef-lumi-avatar.png" alt="Chef Lumi avatar" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Chef Lumi</p>
                <p className="text-sm text-slate-500">Built into the experience, not bolted on</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">About FridgeSmart</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            FridgeSmart is built around a simple truth: most people do not need more groceries, they need more visibility.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This second pass positions the product more clearly around the user’s real pain: food gets forgotten, meals feel harder than they should, and shopping often happens without a clear picture of what is already at home.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            FridgeSmart gives people a smarter control center for the kitchen. Chef Lumi adds the guidance layer that turns inventory into decisions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <BadgeCheck className="h-6 w-6 text-brand-700" />
              <p className="mt-4 text-lg font-black tracking-tight text-slate-950">Clearer value story</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Better copy, better hierarchy, and stronger reasons to download immediately.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <ChefHat className="h-6 w-6 text-brand-700" />
              <p className="mt-4 text-lg font-black tracking-tight text-slate-950">Chef Lumi has a bigger role</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">The site now sells the AI guide as part of the core experience instead of an afterthought.</p>
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] bg-gradient-to-r from-brand-700 to-cyan-600 p-6 text-white shadow-soft">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 h-5 w-5 flex-none" />
              <p className="text-base font-semibold leading-8">
                This is no longer just a starter landing page. It now reads more like a premium product site designed to drive app downloads and explain why FridgeSmart belongs in everyday kitchen routines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
