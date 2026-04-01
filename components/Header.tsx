'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Why it works', href: '#why-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-200">
            <Image src="/assets/fridgesmart-logo.png" alt="FridgeSmart logo" fill className="object-contain p-1" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-black tracking-tight text-slate-950">FridgeSmart</p>
            <p className="truncate text-xs font-medium text-slate-500">Smart kitchen control, without the chaos</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
          >
            Google Play
          </a>
          <a
            href="#download"
            className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Download app
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <a
                href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933"
                className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700"
              >
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart"
                className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
