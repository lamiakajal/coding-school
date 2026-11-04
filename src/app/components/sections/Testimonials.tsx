import Image from 'next/image';

const reviews = [
  {
    name: 'Tamim Iqbal',
    role: 'Junior Frontend Developer at BrainStation 23',
    batch: 'Batch 04 Graduate',
    content: 'Coding School-er project-based approach amar mindset change kore diyeche. Portfolio project dekhei ami first job interview te shortlist hoyechi.',
    rating: 5,
    avatar: '/assets/sabiha.jpg',
  },
  {
    name: 'Fahim Shahriar',
    role: 'Full-Stack Software Engineer (Remote)',
    batch: 'Batch 03 Graduate',
    content: '24/7 dedicated mentor support na thakle Next.js Server Actions ar authentication er complex bugs gulo eto druto solve kora possible hoto na.',
    rating: 5,
    avatar: '/assets/imran.jpg',
  },
  {
    name: 'Nusrat Jahan',
    role: 'React Developer at Enosis Solutions',
    batch: 'Batch 05 Graduate',
    content: 'Offline lab facility ebong team collaboration environment amake real software agency te kaj korar moto confidence diyeche.',
    rating: 5,
    avatar: '/assets/alif.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-200 mb-3">
            Student Success Stories
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl tracking-tight">
            Loved by Developers Everywhere
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from graduates who transitioned into successful software engineering careers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4 text-lg">
                  {'★'.repeat(rev.rating)}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  "{rev.content}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-blue-200 bg-slate-100">
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-blue-600 font-medium">{rev.role}</p>
                  <p className="text-[10px] text-slate-400">{rev.batch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
