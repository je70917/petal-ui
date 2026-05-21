import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

const sizes = [
  { label: 'text-4xl',  px: '36px', size: 'var(--text-4xl)'  },
  { label: 'text-3xl',  px: '30px', size: 'var(--text-3xl)'  },
  { label: 'text-2xl',  px: '24px', size: 'var(--text-2xl)'  },
  { label: 'text-xl',   px: '20px', size: 'var(--text-xl)'   },
  { label: 'text-lg',   px: '18px', size: 'var(--text-lg)'   },
  { label: 'text-base', px: '16px', size: 'var(--text-base)' },
  { label: 'text-sm',   px: '14px', size: 'var(--text-sm)'   },
  { label: 'text-xs',   px: '12px', size: 'var(--text-xs)'   },
]

const weights = [
  { label: 'Bold',     value: 'var(--font-bold)' },
  { label: 'Semibold', value: 'var(--font-semibold)' },
  { label: 'Medium',   value: 'var(--font-medium)' },
  { label: 'Regular',  value: 'var(--font-regular)' },
]

export const TypeScale: Story = {
  name: 'Type Scale',
  render: () => (
    <div className="p-6 bg-surface min-h-screen">
      <h1 className="text-2xl font-bold text-text mb-1">Typography</h1>
      <p className="text-text-muted mb-10">Font: <span className="font-mono text-sm">--font-sans</span> (Inter)</p>

      <section className="mb-12">
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Type Scale</h2>
        <div className="flex flex-col gap-4">
          {sizes.map(({ label, px, size }) => (
            <div key={label} className="flex items-baseline gap-6">
              <span className="w-20 text-xs text-text-subtle font-mono shrink-0">{label}</span>
              <span className="w-10 text-xs text-text-muted  font-mono shrink-0">{px}</span>
              <span style={{ fontSize: size, fontWeight: 400, lineHeight: 'var(--leading-tight)', color: 'var(--color-text)' }}>
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Font Weights</h2>
        <div className="flex flex-col gap-3">
          {weights.map(({ label, value }) => (
            <div key={label} className="flex items-baseline gap-6">
              <span className="w-20 text-xs text-text-subtle font-mono shrink-0">{label}</span>
              <span style={{ fontSize: 'var(--text-xl)', fontWeight: value, color: 'var(--color-text)' }}>
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Headings</h2>
        <div className="flex flex-col gap-4">
          {([
            { tag: 'h1', label: 'H1', token: '--text-h1', px: '30px', weight: 'Bold',     weightPx: '700' },
            { tag: 'h2', label: 'H2', token: '--text-h2', px: '24px', weight: 'Bold',     weightPx: '700' },
            { tag: 'h3', label: 'H3', token: '--text-h3', px: '20px', weight: 'Semibold', weightPx: '600' },
            { tag: 'h4', label: 'H4', token: '--text-h4', px: '18px', weight: 'Semibold', weightPx: '600' },
          ] as const).map(({ tag: Tag, label, token, px, weight, weightPx }) => (
            <div key={label} className="flex items-baseline gap-6">
              <span className="w-6  text-xs text-text-subtle font-mono shrink-0">{label}</span>
              <span className="w-10 text-xs text-text-muted  font-mono shrink-0">{px}</span>
              <span className="w-20 text-xs text-text-muted  font-mono shrink-0">{weight} / {weightPx}</span>
              <span className="w-32 text-xs text-text-subtle font-mono shrink-0">{token}</span>
              <Tag>The quick brown fox</Tag>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Monospace</h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>
          const token = 'var(--color-primary)'
        </p>
      </section>
    </div>
  ),
}
