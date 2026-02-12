import { Link } from 'react-router-dom';
import { Tool } from '@/data/tools';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link
      to={tool.route}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-300"
    >
      {/* Hover gradient background */}
      <div className={`absolute inset-0 ${tool.categoryColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

      <div className="relative">
        {/* Icon */}
        <div className={`w-14 h-14 ${tool.categoryColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
          {tool.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {tool.description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Open tool</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
