import { Link } from 'react-router-dom';
import { ArrowLeft, Image } from 'lucide-react';
import { ToolCard } from '@/components/ToolCard';
import { getToolsByCategory } from '@/data/tools';

export function ImageToolsPage() {
  const imageTools = getToolsByCategory('image');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all tools</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/25">
              <Image className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Image Tools</h1>
              <p className="text-slate-500 dark:text-slate-400">Compress, resize, and convert images with ease</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Fast Processing</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Image compression and conversion in seconds, not minutes.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quality Preserved</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Smart algorithms ensure your images look great after processing.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Secure & Private</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Your images are automatically deleted after processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
