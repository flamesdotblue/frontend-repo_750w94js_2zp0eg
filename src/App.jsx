import { useState } from 'react';
import HeaderBar from './components/HeaderBar.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import DashboardWidgets from './components/DashboardWidgets.jsx';
import BottomNav from './components/BottomNav.jsx';

function Panel({ title, children }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950">
      <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">{title}</h3>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">{children}</div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('home');
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="min-h-dvh bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <HeaderBar onOpenSettings={() => { setOpenSettings(true); setTab('settings'); }} />
      <main className="max-w-5xl mx-auto px-4 pt-4 pb-24">
        {tab === 'home' && (
          <div className="space-y-6">
            <HeroSpline />
            <DashboardWidgets />
          </div>
        )}

        {tab === 'goals' && (
          <div className="space-y-4">
            <Panel title="Goals">
              Create, track, and complete goals with subtasks, priorities, and deadlines. This section will list your active goals and progress.
            </Panel>
            <Panel title="Streaks & Analytics">Daily and weekly streaks with completion percentages.</Panel>
          </div>
        )}

        {tab === 'reminders' && (
          <div className="space-y-4">
            <Panel title="Reminders">
              Add alarms, snooze items, and manage recurring routines like morning, study, or work.
            </Panel>
            <Panel title="Stats">See completed vs missed reminders.</Panel>
          </div>
        )}

        {tab === 'words' && (
          <div className="space-y-4">
            <Panel title="Daily English Word">New word each day with meaning, pronunciation, synonyms, antonyms, and examples.</Panel>
            <Panel title="Learning Streak & Quiz">Keep your streak and test what you\'ve learned.</Panel>
          </div>
        )}

        {tab === 'finance' && (
          <div className="space-y-4">
            <Panel title="Spending Tracker">Track daily balances and auto-calculate spending. Charts summarize monthly and yearly trends.</Panel>
            <Panel title="Insights & Export">Highest spend days, averages, and CSV/PDF export.</Panel>
          </div>
        )}

        {tab === 'calendar' && (
          <div className="space-y-4">
            <Panel title="Unified Calendar">All modules combined with color-coded entries for a full daily overview.</Panel>
          </div>
        )}

        {tab === 'analytics' && (
          <div className="space-y-4">
            <Panel title="Analytics & Insights">Goal completion trends, reminder completion rates, word learning streaks, and spending summaries.</Panel>
          </div>
        )}

        {tab === 'settings' && (
          <div className="space-y-4">
            <Panel title="Profile & Settings">
              Update your name, theme, module preferences, word difficulty, goal categories, and default finance balance. Manage backups and notifications.
            </Panel>
          </div>
        )}
      </main>

      <BottomNav value={tab} onChange={(k) => { setTab(k); setOpenSettings(k === 'settings'); }} />

      {/* Lightweight settings sheet */}
      {openSettings && (
        <div className="fixed inset-0 z-30" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenSettings(false)} />
          <div className="absolute bottom-0 inset-x-0 max-w-5xl mx-auto px-4 pb-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-medium">Quick Settings</h4>
                <button
                  onClick={() => setOpenSettings(false)}
                  className="text-sm px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                >Close</button>
              </div>
              <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                <div className="rounded-xl p-3 border border-neutral-200 dark:border-neutral-800">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Modules</p>
                  <p className="mt-1">Toggle modules on or off from the dashboard.</p>
                </div>
                <div className="rounded-xl p-3 border border-neutral-200 dark:border-neutral-800">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">Notifications</p>
                  <p className="mt-1">Manage reminders, daily words, and goal check-ins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
