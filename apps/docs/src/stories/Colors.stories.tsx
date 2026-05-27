import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

type Swatch = { label: string; variable: string; hex: string }

function SwatchGroup({ title, swatches }: { title: string; swatches: Swatch[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-3">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {swatches.map(({ label, variable, hex }) => (
          <div key={variable} className="flex flex-col gap-1 w-36">
            <div
              className="h-14 w-full rounded-md border border-border shadow-sm"
              style={{ background: `var(${variable})` }}
            />
            <span className="text-xs font-medium text-text">{label}</span>
            <span className="text-xs text-text-muted font-mono">{variable}</span>
            <span className="text-xs text-text-subtle font-mono">{hex}</span>
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
        { label: 'Primary',       variable: '--color-primary',       hex: '#363f88' },
        { label: 'Primary Hover', variable: '--color-primary-hover', hex: '#2d3575' },
        { label: 'Primary FG',    variable: '--color-primary-fg',    hex: '#ffffff' },
      ]} />

      <SwatchGroup title="Secondary" swatches={[
        { label: 'Secondary',       variable: '--color-secondary',       hex: '#f3f4f6' },
        { label: 'Secondary Hover', variable: '--color-secondary-hover', hex: '#e5e7eb' },
        { label: 'Secondary FG',    variable: '--color-secondary-fg',    hex: '#111827' },
      ]} />

      <SwatchGroup title="Destructive" swatches={[
        { label: 'Destructive',       variable: '--color-destructive',       hex: '#9f284c' },
        { label: 'Destructive Hover', variable: '--color-destructive-hover', hex: '#87223f' },
        { label: 'Destructive FG',    variable: '--color-destructive-fg',    hex: '#ffffff' },
      ]} />

      <SwatchGroup title="Surface" swatches={[
        { label: 'Surface',        variable: '--color-surface',        hex: '#ffffff' },
        { label: 'Surface Raised', variable: '--color-surface-raised', hex: '#f9fafb' },
        { label: 'Border',         variable: '--color-border',         hex: '#e5e7eb' },
        { label: 'Ring',           variable: '--color-ring',           hex: '#363f88' },
      ]} />

      <SwatchGroup title="Text" swatches={[
        { label: 'Text',        variable: '--color-text',        hex: '#111827' },
        { label: 'Text Muted',  variable: '--color-text-muted',  hex: '#6b7280' },
        { label: 'Text Subtle', variable: '--color-text-subtle', hex: '#9ca3af' },
      ]} />
    </div>
  ),
}
