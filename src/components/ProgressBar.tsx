import { cn } from '@/utils/cn';

interface ProgressBarProps {
  progress: number;
  status?: 'uploading' | 'processing' | 'complete' | 'error';
  message?: string;
}

export function ProgressBar({ progress, status = 'processing', message }: ProgressBarProps) {
  const getStatusText = () => {
    if (message) return message;
    switch (status) {
      case 'uploading':
        return 'Uploading files...';
      case 'processing':
        return 'Processing your files...';
      case 'complete':
        return 'Complete!';
      case 'error':
        return 'An error occurred';
      default:
        return 'Processing...';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'uploading':
        return 'bg-blue-500';
      case 'processing':
        return 'bg-gradient-to-r from-red-500 to-red-600';
      case 'complete':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-red-500';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">
          {getStatusText()}
        </span>
        <span className="text-slate-500 dark:text-slate-400">
          {Math.round(progress)}%
        </span>
      </div>
      
      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            getStatusColor()
          )}
          style={{ width: `${progress}%` }}
        />
      </div>

      {status === 'processing' && (
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <svg className="animate-spin h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Please wait while we process your files</span>
        </div>
      )}
    </div>
  );
}
