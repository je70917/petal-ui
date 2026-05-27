import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium font-sans transition-colors',
  {
    variants: {
      variant: {
        default:     'border-transparent bg-primary text-primary-fg',
        secondary:   'border-transparent bg-secondary text-secondary-fg',
        outline:     'border-border text-text bg-transparent',
        success:     'border-transparent bg-[#dcfce7] text-[#166534]',
        warning:     'border-transparent bg-[#fef9c3] text-[#854d0e]',
        destructive: 'border-transparent bg-destructive text-destructive-fg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ variant, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { badgeVariants }
