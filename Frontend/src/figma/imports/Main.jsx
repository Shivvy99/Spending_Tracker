import { Link } from 'react-router-dom';

const heroImage = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80';
const chartImage = 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80';

function Hero() {
  return (
    <section className="bg-[#a0f1bd] relative rounded-b-2xl">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-wide text-[#2e4f21]/80">Personal finance clarity</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-[#2e4f21] leading-tight">
            Your transactions, clearly tracked.
          </h1>
          <p className="text-lg text-[#2e4f21]/80 max-w-xl">
            Trusted financial guidance for every transaction. See where your money goes and get gentle nudges to stay on track.
          </p>
          <div className="flex gap-3">
            <Link
              to="/transactions"
              className="bg-[#2e4f21] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[#3a6229] transition-colors"
            >
              Start Tracking
            </Link>
            <Link
              to="/services"
              className="bg-white text-[#2e4f21] px-5 py-3 rounded-full text-sm font-medium border border-[#2e4f21]/15 hover:bg-white/70 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={heroImage} alt="People managing finances" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ServicesTeaser() {
  const items = [
    {
      title: 'Automatic expense tracking',
      body: 'All your transactions in one place — subscriptions, food, rides, and everyday spending.',
    },
    {
      title: 'Smart spending insights',
      body: 'See where your money goes with clear categories and visual summaries.',
    },
    {
      title: 'Personalized guidance',
      body: 'Get suggestions on where to cut back — without changing your lifestyle.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-wide text-[#2e4f21]/80">Serving individuals & families</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2e4f21]">We handle the numbers so you can control your spending.</h2>
          <p className="text-[#2e4f21]/80 max-w-2xl mx-auto">Automatic tracking, clean insights, and actionable nudges.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-[#d2f8dc] rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2e4f21] mb-3">{item.title}</h3>
              <p className="text-[#2e4f21]/80">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BreakImage() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src={chartImage} alt="Charts" className="w-full h-[420px] object-cover" />
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const cards = [
    {
      title: 'For students',
      subtitle: 'Control & awareness',
      text: 'See exactly where your money goes—subscriptions, food, rides, and daily purchases—without changing how you live.',
    },
    {
      title: 'For families',
      subtitle: 'Plan together',
      text: 'Share a clear view of household spending and spot trends early so you can stay ahead of bills and surprises.',
    },
    {
      title: 'For busy professionals',
      subtitle: 'Stay organized',
      text: 'Automatic categorization and alerts keep you in control even when you’re on the move.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-semibold text-[#2e4f21] max-w-2xl">Smart money clarity for everyday life</h2>
          <p className="text-[#2e4f21]/80 max-w-xl">
            We bring all your transactions into one clear view and help you make smarter decisions—without spreadsheets or stress.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="border border-[#2e4f21]/15 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-[#2e4f21] mb-1">{card.title}</h3>
              <p className="text-[#2e4f21]/70 mb-3">{card.subtitle}</p>
              <p className="text-[#2e4f21]/80">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-[#2e4f21] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl">
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">Ready to see where your money goes?</h3>
          <p className="text-white/80">Connect accounts, auto-track spending, and get insights tailored to you.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/transactions" className="bg-white text-[#2e4f21] px-5 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Get started free
          </Link>
          <Link to="/tracking" className="border border-white/60 text-white px-5 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
            View insights
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Main() {
  return (
    <div className="space-y-10">
      <Hero />
      <ServicesTeaser />
      <BreakImage />
      <Audience />
      <CTA />
    </div>
  );
}
