const faqs = [
  {
    question: 'What does FridgeSmart actually help with?',
    answer: 'It helps people track groceries, notice expiration risk sooner, and get meal ideas from ingredients they already have instead of starting from scratch.',
  },
  {
    question: 'Who is Chef Lumi?',
    answer: 'Chef Lumi is the in-app AI kitchen guide. It helps turn inventory into recipes, ideas, and smarter next actions.',
  },
  {
    question: 'Is this website ready for my real assets?',
    answer: 'Yes. The project is already set up for your logo, owner avatar, Chef Lumi avatar, and app screenshot inside public/assets.',
  },
  {
    question: 'Can I connect this to my custom domain?',
    answer: 'Yes. The project is built for Next.js and is ready to deploy to Vercel, which makes domain connection straightforward.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">FAQ</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Common questions before you launch the site.
          </h2>
        </div>

        <div className="mt-12 grid gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-[2rem] border border-slate-200 p-7 shadow-soft">
              <h3 className="text-xl font-black tracking-tight text-slate-900">{faq.question}</h3>
              <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
