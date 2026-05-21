import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

type Swatch = { label: string; variable: string; textDark?: boolean }

function SwatchGroup({ title, swatches }: { title: string; swatches: Swatch[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-3">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {swatches.map(({ label, variable, textDark }) => (
          <div key={variable} className="flex flex-col gap-1 w-28">
            <div
              className="h-14 w-full rounded-md border border-border shadow-sm"
              style={{ background: `var(${variable})` }}
            />
            <span className="text-xs font-medium text-text">{label}</span>
            <span className="text-xs text-text-muted font-mono">{variable}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const AllColors: Story = {
  name: 'All Colors',
  render: () => (
    <div className="p-6 bg-surface min-h-screen">
      <h1 className="text-2xl font-bold text-text mb-1">Color Tokens</h1>
      <p className="text-text-muted mb-8">All colors are defined as CSS custom properties and mapped to Tailwind utilities.</p>

      <SwatchGroup title="Primary" swatches={[
        { label: 'Primary',    variable: '--color-primary' },
        { label: 'Primary Hover', variable: '--color-primary-hover' },
        { label: 'Primary FG', variable: '--color-primary-fg', textDark: false },
      ]} />

      <SwatchGroup title="Secondary" swatches={[
        { label: 'Secondary',      variable: '--color-secondary' },
        { label: 'Secondary Hover',variable: '--color-secondary-hover' },
        { label: 'Secondary FG',   variable: '--color-secondary-fg' },
      ]} />

      <SwatchGroup title="Destructive" swatches={[
        { label: 'Destructive',      variable: '--color-destructive' },
        { label: 'Destructive Hover',variable: '--color-destructive-hover' },
        { label: 'Destructive FG',   variable: '--color-destructive-fg' },
      ]} />

      <SwatchGroup title="Surface" swatches={[
        { label: 'Surface',       variable: '--color-surface' },
        { label: 'Surface Raised',variable: '--color-surface-raised' },
        { label: 'Border',        variable: '--color-border' },
        { label: 'Ring',          variable: '--color-ring' },
      ]} />

      <SwatchGroup title="Text" swatches={[
        { label: 'Text',        variable: '--color-text' },
        { label: 'Text Muted',  variable: '--color-text-muted' },
        { label: 'Text Subtle', variable: '--color-text-subtle' },
      ]} />
    </div>
  ),
}
