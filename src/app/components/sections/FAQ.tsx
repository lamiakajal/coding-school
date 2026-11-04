'use client';

import { useState } from 'react';

const faqItems = [
  {
    q: 'Amader ki purber kono coding experience thakte hobe?',
    a: 'Na, amader beginner-friendly career track shuru hoy ekdom zero theke (HTML, CSS, JS fundamentals). Step-by-step guidance thakbe.',
  },
  {
    q: 'Course seshe ki job placement assistance pabo?',
    a: 'Haa! Amader dedicated placement cell ache. Resume review, mock technical interview, GitHub optimization ebong hiring partner companies e referral dewa hoy.',
  },
  {
    q: 'Online ebong Offline duita vabei ki class kora jabe?',
    a: 'Ji, amader hybrid model ache. Live interactive online classes er pasapashi Dhaka campus offline lab facility shob student-der jonno open thake.',
  },
  {
    q: 'Course seshe support system kemon thakbe?',
    a: 'Lifetime free access! Course sesh hoye geleo amader private Discord community, alumni network ebong weekly problem-solving sessions e shob shomoy connect thakte parben.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-200 mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Everything you need to know about our curriculum, mentoring, and enrollment process.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
