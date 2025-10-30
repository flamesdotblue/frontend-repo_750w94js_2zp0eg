import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative">
      <div className="h-72 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/90 dark:from-black/50 dark:via-transparent dark:to-black/90" />
      </div>
      <div className="absolute inset-x-0 top-0 h-full flex items-end p-6">
        <div className="pointer-events-none max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Your personal growth, unified.</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Goals, reminders, learning, and finances — all in one clean, focused space. Stay on track with daily insights and a unified calendar.</p>
        </div>
      </div>
    </section>
  );
}
