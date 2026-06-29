import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover:   'var(--color-primary-hover)',
          fg:      'var(--color-primary-fg)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover:   'var(--color-secondary-hover)',
          fg:      'var(--color-secondary-fg)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          hover:   'var(--color-destructive-hover)',
          fg:      'var(--color-destructive-fg)',
          subtle:  'var(--color-destructive-subtle)',
          border:  'var(--color-destructive-border)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          subtle:  'var(--color-info-subtle)',
          border:  'var(--color-info-border)',
          text:    'var(--color-info-text)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          subtle:  'var(--color-success-subtle)',
          border:  'var(--color-success-border)',
          text:    'var(--color-success-text)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          subtle:  'var(--color-warning-subtle)',
          border:  'var(--color-warning-border)',
          text:    'var(--color-warning-text)',
        },
        chart: {
          '1': 'var(--color-chart-1)',
          '2': 'var(--color-chart-2)',
          '3': 'var(--color-chart-3)',
          '4': 'var(--color-chart-4)',
          '5': 'var(--color-chart-5)',
          '6': 'var(--color-chart-6)',
        },
        surface:  {
          DEFAULT: 'var(--color-surface)',
          raised:  'var(--color-surface-raised)',
        },
        border:   'var(--color-border)',
        ring:     'var(--color-ring)',
        text: {
          DEFAULT: 'var(--color-text)',
          muted:   'var(--color-text-muted)',
          subtle:  'var(--color-text-subtle)',
        },
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        '2xl':'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
}

export default config
