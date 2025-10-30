import { Home, Target, Bell, BookOpen, Wallet, Calendar, BarChart3, Settings } from 'lucide-react';

const items = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'goals', label: 'Goals', icon: Target },
  { key: 'reminders', label: 'Reminders', icon: Bell },
  { key: 'words', label: 'Words', icon: BookOpen },
  { key: 'finance', label: 'Finance', icon: Wallet },
  { key: 'calendar', label: 'Calendar', icon: Calendar },
  { key: 'analytics', label: 'Analytics', icon: BarChart3 },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export default function BottomNav({ value, onChange }) {
  return (
    <nav className="sticky bottom-0 inset-x-0 z-20 border-t border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-black/60 backdrop-blur">
      <div className="max-w-5xl mx-auto grid grid-cols-4 sm:grid-cols-8">
        {items.map((it) => {
          const Icon = it.icon;
          const active = value === it.key;
          return (
            <button
              key={it.key}
              onClick={() => onChange(it.key)}
              className={`px-3 py-2 flex flex-col items-center gap-1 text-xs transition ${
                active
                  ? 'text-indigo-600 dark:text-sky-400'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              <Icon className={`size-5 ${active ? '' : ''}`} />
              <span className="hidden sm:inline">{it.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
