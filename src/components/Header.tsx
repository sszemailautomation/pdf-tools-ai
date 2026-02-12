import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, FileText, Image } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              PDF<span className="text-red-500">Tools</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">
              PDF Tools
            </Link>
            <Link to="/image-tools" className="text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors flex items-center gap-1">
              <Image className="w-4 h-4" />
              Image Tools
            </Link>
            <Link to="/pricing" className="text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-500/25">
                Sign Up Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                PDF Tools
              </Link>
              <Link
                to="/image-tools"
                className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image className="w-4 h-4" />
                Image Tools
              </Link>
              <Link
                to="/pricing"
                className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <hr className="my-2 border-slate-200 dark:border-slate-700" />
              <button className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-left">
                Sign In
              </button>
              <button className="mx-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium">
                Sign Up Free
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
