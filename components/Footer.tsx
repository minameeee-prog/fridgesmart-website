import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-200">
                <Image src="/assets/fridgesmart-logo.png" alt="FridgeSmart logo" fill className="object-contain p-1" />
              </div>
              <div>
                <p className="text-lg font-black tracking-tight text-slate-950">FridgeSmart</p>
                <p className="text-sm text-slate-500">Scan smarter. Waste less. Cook with confidence.</p>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              FridgeSmart helps households track food, reduce waste, build better shopping habits, and turn real ingredients into real meal ideas with Chef Lumi.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Company</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a href="#about" className="hover:text-brand-700">About</a>
                <a href="#features" className="hover:text-brand-700">Features</a>
                <a href="#faq" className="hover:text-brand-700">FAQ</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Legal</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a href="/privacy" className="hover:text-brand-700">Privacy</a>
                <a href="/terms" className="hover:text-brand-700">Terms</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Contact</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a href="mailto:support@fridgesmartapp.com" className="hover:text-brand-700">support@fridgesmartapp.com</a>
                <a href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933" className="hover:text-brand-700">App Store</a>
                <a href="https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart" className="hover:text-brand-700">Google Play</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 FridgeSmart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
