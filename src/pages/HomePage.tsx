import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Cloud, Heart, Image } from 'lucide-react';
import { ToolCard } from '@/components/ToolCard';
import { tools, categories, getToolsByCategory } from '@/data/tools';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-20 lg:py-32">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-500/20 rounded-full text-red-600 dark:text-red-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>100% Free • No Installation Required</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Every PDF Tool You Need
              <span className="block text-red-500 mt-2">All in One Place</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Merge, split, compress, convert, rotate, unlock, watermark, and edit PDF documents with just a few clicks. Completely free and easy to use.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/merge-pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5"
              >
                <span>Start Now - It's Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/image-tools"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-500/50 transition-all"
              >
                <Image className="w-5 h-5" />
                <span>Image Tools</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-8 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white text-sm">Secure</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Files auto-deleted</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white text-sm">Fast</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Quick processing</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white text-sm">Cloud-based</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">No installation</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-500/20 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white text-sm">Free</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Forever free tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools by Category */}
      {categories.slice(0, -1).map(category => {
        const categoryTools = getToolsByCategory(category.id);
        if (categoryTools.length === 0) return null;
        
        return (
          <section key={category.id} className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.name}
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {categoryTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Image Tools Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-8 rounded-full bg-gradient-to-b from-teal-500 to-teal-600" />
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Image Tools
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Compress, resize, and convert images with ease
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {getToolsByCategory('image').map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* All Tools Grid */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              All PDF Tools at a Glance
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Choose from our complete collection of PDF tools. Everything you need to work with PDFs is right here.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {tools.map(tool => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.id}
                  to={tool.route}
                  className="group flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-500/50 hover:shadow-lg transition-all"
                >
                  <div className={`w-10 h-10 ${tool.categoryColor} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center leading-tight">
                    {tool.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Millions
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Join millions of users who rely on PDFTools every day
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">50M+</div>
              <div className="text-slate-600 dark:text-slate-400">Files Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">5M+</div>
              <div className="text-slate-600 dark:text-slate-400">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">30+</div>
              <div className="text-slate-600 dark:text-slate-400">PDF Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-slate-600 dark:text-slate-400">Free to Use</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
