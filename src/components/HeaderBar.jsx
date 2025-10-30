import { useEffect, useState } from 'react';
import { Moon, Sun, Settings, User } from 'lucide-react';

export default function HeaderBar({ onOpenSettings }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bg-white/80 dark:bg-black/50 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 shadow-inner" />
          <h1 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">LifeHub</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="size-5 text-amber-400" />
            ) : (
              <Moon className="size-5 text-indigo-600" />
            )}
          </button>
          <button
            onClick={onOpenSettings}
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Open settings"
          >
            <Settings className="size-5 text-neutral-700 dark:text-neutral-300" />
          </button>
          <div className="ml-1 inline-flex items-center justify-center size-9 rounded-full bg-neutral-100 dark:bg-neutral-800">
            <User className="size-5 text-neutral-600 dark:text-neutral-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
