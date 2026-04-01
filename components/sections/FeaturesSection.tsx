import { BellRing, Receipt, ShoppingCart, Sparkles, Tags, UtensilsCrossed } from 'lucide-react';

const features = [
  {
    icon: Receipt,
    title: 'Scan groceries and receipts',
    description: 'Capture what came home without typing every item one by one.',
  },
  {
    icon: Tags,
    title: 'Know what expires first',
    description: 'Make better decisions with clearer urgency around what needs attention.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cook from real ingredients',
    description: 'Chef Lumi builds meals from what is already available in your kitchen.',
  },
  {
    icon: ShoppingCart,
    title: 'Shop with more control',
    description: 'Spot what is truly needed so you buy fewer duplicates and wasted extras.',
  },
  {
    icon: BellRing,
    title: 'Get reminders that matter',
    description: 'Helpful nudges keep food visible before it is forgotten in the back of the fridge.',
  },
  {
    icon: Sparkles,
    title: 'Feel guided, not overwhelmed',
    description: 'The AI layer makes the app feel proactive, fast, and genuinely useful.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Features</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Built to be the app users open before they waste food, reorder groceries, or ask what is for dinner.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The second pass leans harder into conversion: clearer outcomes, stronger positioning, and a more premium structure that explains why FridgeSmart deserves a place on someone’s phone.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-200">
              <div className="inline-flex rounded-2xl bg-brand-100 p-3 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
