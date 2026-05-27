import { cn } from '../../utils/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'error'
}

export function Textarea({ variant = 'default', className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'w-full min-h-[80px] rounded-md border bg-surface px-4 py-3 text-sm font-sans text-text placeholder:text-text-subtle',
        'transition-colors resize-y',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variant === 'default' && 'border-border hover:border-text-muted',
        variant === 'error'   && 'border-destructive focus-visible:ring-destructive',
        className
      )}
      {...props}
    />
  )
}
