import * as RadixToast from '@radix-ui/react-toast'
import { XIcon } from '@phosphor-icons/react'
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
        success:     'border-success-border bg-success-subtle text-success-text',
        warning:     'border-warning-border bg-warning-subtle text-warning-text',
        destructive: 'border-destructive-border bg-destructive-subtle text-destructive',
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
      <XIcon size={16} />
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

