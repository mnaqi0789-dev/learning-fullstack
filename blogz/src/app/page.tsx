import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-5xl grid-cols-1 items-center gap-10 px-6 py-8 lg:grid-cols-12">
      
      {/* Left Column — Clean Typography (6 Cols) */}
      <div className="flex flex-col justify-center lg:col-span-7 space-y-5">
        <div className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-blue-600" />
          <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase">
            Blogz · Read. Think. Write.
          </span>
        </div>

        <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
          Stories Worth
          <br />
          Your <span className="text-blue-600 font-medium">Quiet</span> Mornings
        </h1>

        <p className="max-w-md text-sm leading-relaxed text-slate-500">
          A calm corner of the internet for essays on finance, technology,
          and the small ideas in between — hand-picked, thoughtfully written,
          always ad-free.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/posts"
            className="inline-flex h-10 items-center justify-center rounded-full bg-blue-600 px-5 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Start Reading
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white/40 px-5 text-xs font-medium text-slate-600 backdrop-blur-sm transition-all duration-200 hover:border-blue-600 hover:text-blue-600"
          >
            Say Hello →
          </Link>
        </div>

        {/* Compact Stats Grid */}
        <div className="flex items-center gap-8 border-t border-slate-100 pt-5 text-xs">
          <div>
            <div className="font-serif text-xl font-light text-slate-900">120+</div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Essays</div>
          </div>
          <div className="h-6 w-px bg-slate-200/60" />
          <div>
            <div className="font-serif text-xl font-light text-slate-900">2</div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Categories</div>
          </div>
          <div className="h-6 w-px bg-slate-200/60" />
          <div>
            <div className="font-serif text-xl font-light text-blue-600">Weekly</div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">New Drops</div>
          </div>
        </div>
      </div>

      {/* Right Column — Smaller Scaled Image Block (5 Cols) */}
      <div className="relative w-full lg:col-span-5 flex justify-center lg:justify-end">
        <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-tr from-blue-100/40 via-transparent to-blue-50/20 blur-2xl" />
        
        {/* Box sizing dropped to max-w-xs (320px max) for a tighter container footprint */}
        <div className="relative w-full max-w-xs aspect-square overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-2 shadow-[0_20px_40px_-16px_rgba(37,99,235,0.08)]">
          <div className="relative w-full h-full overflow-hidden rounded-[1.6rem] bg-slate-50">
            <Image
              src="/assets/banner.png"
              alt="Marble muse reading among books and blue flowers"
              fill
              priority
              sizes="(max-w-5xl) 30vw, 320px"
              className="object-cover object-center transition-transform duration-500 hover:scale-103"
            />
          </div>
        </div>
      </div>

    </section>
  );
}