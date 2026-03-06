import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon, MonitorIcon } from './Icons' // You'll need these icons

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 p-1 rounded-full ml-4">
      <button 
        onClick={() => setTheme('light')}
        className={`p-1 rounded-full ${theme === 'light' ? 'bg-white shadow-sm' : ''}`}
        title="Light Mode"
      >
        <SunIcon className="w-5 h-5 text-yellow-500" />
      </button>
      
      <button 
        onClick={() => setTheme('system')}
        className={`p-1 rounded-full ${theme === 'system' ? 'bg-white dark:bg-zinc-600 shadow-sm' : ''}`}
        title="Auto Mode"
      >
        <MonitorIcon className="w-5 h-5" />
      </button>

      <button 
        onClick={() => setTheme('dark')}
        className={`p-1 rounded-full ${theme === 'dark' ? 'bg-zinc-700 shadow-sm' : ''}`}
        title="Dark Mode"
      >
        <MoonIcon className="w-5 h-5 text-blue-400" />
      </button>
    </div>
  )
}

export default ThemeSwitcher
