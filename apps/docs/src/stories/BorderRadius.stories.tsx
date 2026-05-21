import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Tokens/Border Radius',
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

const radii = [
  { label: 'none', variable: '--radius-none', value: '0px' },
  { label: 'sm',   variable: '--radius-sm',   value: '2px' },
  { label: 'md',   variable: '--radius-md',   value: '6px' },
  { label: 'lg',   variable: '--radius-lg',   value: '8px' },
  { label: 'xl',   variable: '--radius-xl',   value: '12px' },
  { label: '2xl',  variable: '--radius-2xl',  value: '16px' },
  { label: 'full', variable: '--radius-full', value: '9999px' },
]

export const AllRadii: Story = {
  name: 'All Radii',
  render: () => (
    <div className="p-6 bg-surface min-h-screen">
      <h1 className="text-2xl font-bold text-text mb-1">Border Radius</h1>
      <p className="text-text-muted mb-8">
        Radius tokens mapped to <span className="font-mono text-sm">rounded-*</span> Tailwind utilities.
      </p>
      <div className="flex flex-wrap gap-8">
        {radii.map(({ label, variable, value }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div
              className="w-16 h-16 bg-primary"
              style={{ borderRadius: `var(${variable})` }}
            />
            <span className="text-xs font-medium text-text">rounded-{label}</span>
            <span className="text-xs text-text-muted font-mono">{value}</span>
            <span className="text-xs text-text-subtle font-mono">{variable}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}
