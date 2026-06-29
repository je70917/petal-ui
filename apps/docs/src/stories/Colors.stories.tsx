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

const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

function ScaleRow({ name, hexes }: { name: string; hexes: string[] }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-2">{name}</p>
      <div className="flex gap-1">
        {SCALE_STEPS.map((step, i) => (
          <div key={step} className="flex flex-col gap-1 flex-1">
            <div
              className="h-10 rounded-md border border-border"
              style={{ background: `var(--${name.toLowerCase()}-${step})` }}
            />
            <span className="text-[10px] text-text-muted font-mono text-center">{step}</span>
            <span className="text-[10px] text-text-subtle font-mono text-center">{hexes[i]}</span>
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
        { label: 'Primary (navy-700)',       variable: '--color-primary',       hex: '#2e3861' },
        { label: 'Primary Hover (navy-800)', variable: '--color-primary-hover', hex: '#252d45' },
        { label: 'Primary FG',              variable: '--color-primary-fg',    hex: '#ffffff' },
      ]} />

      <SwatchGroup title="Secondary" swatches={[
        { label: 'Secondary (gray-100)',    variable: '--color-secondary',       hex: '#f3f4f6' },
        { label: 'Secondary Hover (gray-200)', variable: '--color-secondary-hover', hex: '#e5e7eb' },
        { label: 'Secondary FG (gray-900)', variable: '--color-secondary-fg',    hex: '#111827' },
      ]} />

      <SwatchGroup title="Destructive" swatches={[
        { label: 'Destructive (red-500)',        variable: '--color-destructive',        hex: '#d2423a' },
        { label: 'Destructive Hover (red-600)',  variable: '--color-destructive-hover',  hex: '#b02e27' },
        { label: 'Destructive FG',                       variable: '--color-destructive-fg',     hex: '#ffffff' },
        { label: 'Destructive Subtle (red-50)',  variable: '--color-destructive-subtle', hex: '#fdf2f2' },
        { label: 'Destructive Border (red-200)', variable: '--color-destructive-border', hex: '#f9bdba' },
      ]} />

      <SwatchGroup title="Status — Info" swatches={[
        { label: 'Info (blue-600)',        variable: '--color-info',        hex: '#3f68a0' },
        { label: 'Info Subtle (blue-50)',  variable: '--color-info-subtle', hex: '#f0f6fc' },
        { label: 'Info Border (blue-200)', variable: '--color-info-border', hex: '#bdd5ee' },
        { label: 'Info Text (blue-900)',   variable: '--color-info-text',   hex: '#162542' },
      ]} />

      <SwatchGroup title="Status — Success" swatches={[
        { label: 'Success (green-600)',        variable: '--color-success',        hex: '#286a4e' },
        { label: 'Success Subtle (green-50)',  variable: '--color-success-subtle', hex: '#edf7f2' },
        { label: 'Success Border (green-200)', variable: '--color-success-border', hex: '#a0dabd' },
        { label: 'Success Text (green-900)',   variable: '--color-success-text',   hex: '#132820' },
      ]} />

      <SwatchGroup title="Status — Warning" swatches={[
        { label: 'Warning (yellow-600)',        variable: '--color-warning',        hex: '#b07f10' },
        { label: 'Warning Subtle (yellow-50)',  variable: '--color-warning-subtle', hex: '#fdfaf0' },
        { label: 'Warning Border (yellow-200)', variable: '--color-warning-border', hex: '#f5e6af' },
        { label: 'Warning Text (yellow-900)',   variable: '--color-warning-text',   hex: '#4a3405' },
      ]} />

      <SwatchGroup title="Chart Palette" swatches={[
        { label: 'Chart 1 — Mauve (mauve-600)',      variable: '--color-chart-1', hex: '#6b515e' },
        { label: 'Chart 2 — Yellow (yellow-400)',    variable: '--color-chart-2', hex: '#e5b448' },
        { label: 'Chart 3 — Navy (navy-800)',        variable: '--color-chart-3', hex: '#252d45' },
        { label: 'Chart 4 — Lilacs (lilacs-300)',   variable: '--color-chart-4', hex: '#d3b6d3' },
        { label: 'Chart 5 — Teal (teal-500)',       variable: '--color-chart-5', hex: '#47b5a8' },
        { label: 'Chart 6 — Fuchsia (fuchsia-300)', variable: '--color-chart-6', hex: '#f885b2' },
      ]} />

      <SwatchGroup title="Surface" swatches={[
        { label: 'Surface',        variable: '--color-surface',        hex: '#ffffff' },
        { label: 'Surface Raised (gray-50)',  variable: '--color-surface-raised', hex: '#f9fafb' },
        { label: 'Border (gray-200)',         variable: '--color-border',         hex: '#e5e7eb' },
        { label: 'Ring',           variable: '--color-ring',           hex: '#252d45' },
      ]} />

      <SwatchGroup title="Text" swatches={[
        { label: 'Text (gray-900)',        variable: '--color-text',        hex: '#111827' },
        { label: 'Text Muted (gray-500)',  variable: '--color-text-muted',  hex: '#6b7280' },
        { label: 'Text Subtle (gray-400)', variable: '--color-text-subtle', hex: '#9ca3af' },
      ]} />

      <div className="mb-8">
        <h2 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-4">Color Scales</h2>
        <ScaleRow name="Gray"         hexes={['#f9fafb','#f3f4f6','#e5e7eb','#d1d5db','#9ca3af','#6b7280','#4b5563','#374151','#1f2937','#111827']} />
        <ScaleRow name="red" hexes={['#fdf2f2','#fce0df','#f9bdba','#f49490','#ec6b66','#d2423a','#b02e27','#8e201a','#6e1611','#4e0e0b']} />
        <ScaleRow name="orange"      hexes={['#fff8f4','#ffeee3','#fed8c4','#fbb28b','#f88c5e','#f56831','#d94c18','#b33810','#8e2a0a','#691e07']} />
        <ScaleRow name="yellow"       hexes={['#fdfaf0','#faf3d8','#f5e6af','#efce7b','#e5b448','#d49a1e','#b07f10','#8c640b','#6b4c08','#4a3405']} />
        <ScaleRow name="green"       hexes={['#edf7f2','#d0eddf','#a0dabd','#6cc29a','#41a47a','#2e7a5b','#286a4e','#25533f','#1c3d2f','#132820']} />
        <ScaleRow name="teal"    hexes={['#f0faf9','#d9f3f0','#b3e7e1','#80d4cc','#59c2ba','#47b5a8','#35908a','#29726c','#1f5855','#163d3a']} />
        <ScaleRow name="blue"   hexes={['#f0f6fc','#dceaf7','#bdd5ee','#a3c1e2','#7da3d0','#5784bc','#3f68a0','#2f4f80','#213860','#162542']} />
        <ScaleRow name="navy"         hexes={['#f4f5f9','#e7e9f2','#d0d4e7','#adb4d5','#8490bd','#5e6ea1','#3e4c7d','#2e3861','#252d45','#151b2d']} />
        <ScaleRow name="lilacs"       hexes={['#faf7fa','#f3edf3','#e6d9e6','#d3b6d3','#b88fb8','#9b6e9b','#7d527d','#623d62','#4a2d4a','#321e32']} />
        <ScaleRow name="fuchsia"      hexes={['#fef0f5','#fddae9','#fbb4d2','#f885b2','#ea5e86','#d43d6a','#b02a53','#8c1e3e','#66142c','#420b1b']} />
        <ScaleRow name="mauve"        hexes={['#faf6f8','#f3ecf0','#e4d7dc','#cfbac4','#b59aa6','#8e7380','#6b515e','#503c47','#372931','#231a1f']} />
      </div>

    </div>
  ),
}
