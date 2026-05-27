import * as RadixToast from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

export const ToastProvider  = RadixToast.Provider
export const ToastViewport  = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof RadixToast.Viewport>) => (
  <RadixToast.Viewport
    className={cn(
      'fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-[360px] max-w-[100vw]',
      className
    )}
    {...props}
  />
)

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-lg border p-4 shadow-md transition-all',
  {
    variants: {
      variant: {
        default:     'border-border bg-surface text-text',
        success:     'border-green-200 bg-green-50 text-green-900',
        warning:     'border-yellow-200 bg-yellow-50 text-yellow-900',
        destructive: 'border-red-200 bg-red-50 text-destructive',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof RadixToast.Root>,
    VariantProps<typeof toastVariants> {}

export function Toast({ variant, className, ...props }: ToastProps) {
  return (
    <RadixToast.Root
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
}

export function ToastTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof RadixToast.Title>) {
  return <RadixToast.Title className={cn('text-sm font-semibold', className)} {...props} />
}

export function ToastDescription({ className, ...props }: React.ComponentPropsWithoutRef<typeof RadixToast.Description>) {
  return <RadixToast.Description className={cn('text-sm opacity-90', className)} {...props} />
}

export function ToastClose({ className, ...props }: React.ComponentPropsWithoutRef<typeof RadixToast.Close>) {
  return (
    <RadixToast.Close
      className={cn('shrink-0 rounded-md p-1 opacity-50 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring', className)}
      {...props}
    >
      <CloseIcon className="h-4 w-4" />
    </RadixToast.Close>
  )
}

export function ToastAction({ className, ...props }: React.ComponentPropsWithoutRef<typeof RadixToast.Action>) {
  return (
    <RadixToast.Action
      className={cn('shrink-0 text-xs font-medium underline-offset-4 hover:underline focus:outline-none', className)}
      {...props}
    />
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}
