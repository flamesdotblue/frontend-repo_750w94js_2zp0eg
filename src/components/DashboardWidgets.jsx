import { useMemo } from 'react';
import { Target, Bell, BookOpen, Wallet, TrendingUp, Star } from 'lucide-react';

function ProgressBar({ value, color = 'from-indigo-500 to-sky-500' }) {
  return (
    <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

function MiniChart({ points = [40, 55, 35, 70, 60, 75, 50] }) {
  const d = useMemo(() => {
    const width = 140;
    const height = 48;
    const max = Math.max(...points, 1);
    const step = width / (points.length - 1);
    return points
      .map((p, i) => {
        const x = i * step;
        const y = height - (p / max) * height;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  }, [points]);

  return (
    <svg viewBox="0 0 140 48" className="w-full h-12">
      <path d={d} fill="none" className="stroke-indigo-500 dark:stroke-sky-400" strokeWidth="2" />
    </svg>
  );
}

export default function DashboardWidgets() {
  const today = new Date();
  const dateStr = today.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Today • {dateStr}</p>
            <h3 className="mt-1 text-lg font-medium text-neutral-900 dark:text-neutral-100">Dashboard Overview</h3>
          </div>
          <div className="inline-flex items-center gap-2 text-amber-500">
            <Star className="size-4 fill-amber-500/20" />
            <span className="text-sm font-medium">Streak: 5 days</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="rounded-xl p-3 border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-sky-400"><Target className="size-4" /><span className="text-sm font-medium">Goals</span></div>
            <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">8</p>
            <ProgressBar value={66} />
            <p className="mt-1 text-xs text-neutral-500">66% in progress</p>
          </div>
          <div className="rounded-xl p-3 border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400"><Bell className="size-4" /><span className="text-sm font-medium">Reminders</span></div>
            <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">3</p>
            <ProgressBar value={40} color="from-rose-500 to-orange-500" />
            <p className="mt-1 text-xs text-neutral-500">2 done • 1 pending</p>
          </div>
          <div className="rounded-xl p-3 border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400"><BookOpen className="size-4" /><span className="text-sm font-medium">Daily Word</span></div>
            <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-neutral-100">serendipity</p>
            <p className="text-xs text-neutral-500">Learned 12 this week</p>
          </div>
          <div className="rounded-xl p-3 border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400"><Wallet className="size-4" /><span className="text-sm font-medium">Spending</span></div>
            <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">$42</p>
            <MiniChart />
            <div className="flex items-center gap-1 text-xs text-neutral-500"><TrendingUp className="size-3" /><span>Down 12% vs last week</span></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950">
          <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">Today\'s Reminders</h4>
          <ul className="space-y-2">
            {[
              { t: 'Morning routine', time: '7:00 AM' },
              { t: 'Deep work', time: '10:00 AM' },
              { t: 'Workout', time: '6:00 PM' },
            ].map((r, i) => (
              <li key={i} className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-2">
                <span className="text-sm text-neutral-800 dark:text-neutral-200">{r.t}</span>
                <span className="text-xs text-neutral-500">{r.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950">
          <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">Unified Calendar • This Week</h4>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="aspect-square rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center text-xs gap-1">
                <span className="text-neutral-500">{['S','M','T','W','T','F','S'][i]}</span>
                <div className="flex gap-1">
                  <span className="size-2 rounded-full bg-indigo-500" />
                  <span className="size-2 rounded-full bg-rose-500" />
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span className="size-2 rounded-full bg-teal-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
