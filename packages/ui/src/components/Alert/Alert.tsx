import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 flex gap-3',
  {
    variants: {
      variant: {
        default:     'border-border bg-surface text-text',
        info:        'border-info-border bg-info-subtle text-info-text',
        success:     'border-success-border bg-success-subtle text-success-text',
        warning:     'border-warning-border bg-warning-subtle text-warning-text',
        destructive: 'border-destructive-border bg-destructive-subtle text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export function Alert({ variant, className, ...props }: AlertProps) {
  return <div className={cn(alertVariants({ variant }), className)} role="alert" {...props} />
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn('font-semibold text-sm leading-tight', className)} {...props} />
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm opacity-90', className)} {...props} />
}
