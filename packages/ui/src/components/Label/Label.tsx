import { cn } from '../../utils/cn'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export function Label({ required, className, children, ...props }: LabelProps) {
  return (
    <label
      className={cn('text-sm font-medium text-text', className)}
      {...props}
    >
      {children}
      {required && <span className="ml-1 text-destructive">*</span>}
    </label>
  )
}

export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function FieldDescription({ className, ...props }: FieldDescriptionProps) {
  return (
    <p
      className={cn('text-xs text-text-muted', className)}
      {...props}
    />
  )
}
