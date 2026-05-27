import * as RadixSwitch from '@radix-ui/react-switch'
import { cn } from '../../utils/cn'

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> {}

export function Toggle({ className, ...props }: ToggleProps) {
  return (
    <RadixSwitch.Root
      className={cn(
        'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent',
        'bg-secondary-hover transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-[state=checked]:bg-primary',
        className
      )}
      {...props}
    >
      <RadixSwitch.Thumb
        className={cn(
          'pointer-events-none block h-4 w-4 rounded-full bg-surface shadow-sm',
          'transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
        )}
      />
    </RadixSwitch.Root>
  )
}
