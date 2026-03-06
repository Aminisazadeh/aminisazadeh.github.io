import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon, MonitorIcon } from './Icons'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // This ensures the component only renders on the client to prevent hydration errors
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full border border-zinc-300 dark:border-zinc-700">
      
      {/* 1. AUTO MODE (System) */}
      <button 
        onClick={() => setTheme('system')}
        className={`p-1.5 rounded-full transition-all ${theme === 'system' ? 'bg-white dark:bg-zinc-600 shadow-sm' : 'opacity-50 hover:opacity-100'}`}
        title="System Mode"
      >
        <MonitorIcon className="w-4 h-4" />
      </button>

      {/* 2. DAY MODE (Light) */}
      <button 
        onClick={() => setTheme('light')}
        className={`p-1.5 rounded-full transition-all ${theme === 'light' ? 'bg-white shadow-sm' : 'opacity-50 hover:opacity-100'}`}
        title="Light Mode"
      >
        <SunIcon className="w-4 h-4 text-yellow-500" />
      </button>

      {/* 3. NIGHT MODE (Dark) */}
      <button 
        onClick={() => setTheme('dark')}
        className={`p-1.5 rounded-full transition-all ${theme === 'dark' ? 'bg-zinc-700 shadow-sm' : 'opacity-50 hover:opacity-100'}`}
        title="Dark Mode"
      >
        <MoonIcon className="w-4 h-4 text-blue-400" />
      </button>
      
    </div>
  )
}

export default ThemeSwitcher
