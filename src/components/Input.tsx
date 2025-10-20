import { InputHTMLAttributes, forwardRef } from 'react';
import { Video as LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon size={20} />
            </div>
          )}
          <input
            ref={ref}
            className={clsx(
              'w-full rounded-2xl border-2 border-gray-200 px-4 py-3 transition-all duration-300',
              'focus:border-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400/20',
              'placeholder:text-gray-400',
              Icon && 'pl-12',
              error && 'border-red-400',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
