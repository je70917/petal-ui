import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { cn } from '../../utils/cn'

const CHART_COLORS = [
  'var(--color-chart-1)',
  'var(--color-chart-2)',
  'var(--color-chart-3)',
  'var(--color-chart-4)',
  'var(--color-chart-5)',
  'var(--color-chart-6)',
]

export interface BarSeries {
  key: string
  name?: string
  color?: string
}

export interface BarChartProps {
  data: Record<string, unknown>[]
  series: BarSeries[]
  xKey: string
  height?: number
  stacked?: boolean
  showGrid?: boolean
  showLegend?: boolean
  className?: string
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-border bg-surface shadow-md px-3 py-2 text-sm font-sans">
      <p className="font-semibold text-text mb-1">{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-text-muted">
          <span className="h-2 w-2 rounded-full shrink-0" style={{ background: entry.fill }} />
          <span>{entry.name ?? entry.dataKey}</span>
          <span className="ml-auto pl-4 font-medium text-text">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

export function BarChart({
  data,
  series,
  xKey,
  height = 300,
  stacked = false,
  showGrid = true,
  showLegend = false,
  className,
}: BarChartProps) {
  return (
    <div className={cn('w-full font-sans', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} barCategoryGap="30%" barGap={4}>
          {showGrid && (
            <CartesianGrid
              vertical={false}
              stroke="var(--color-border)"
              strokeDasharray="3 3"
            />
          )}
          <XAxis
            dataKey={xKey}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
            dy={8}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
            dx={-8}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: 'var(--color-surface-raised)' }} />
          {showLegend && (
            <Legend
              wrapperStyle={{ fontSize: 12, color: 'var(--color-text-muted)', paddingTop: 16 }}
            />
          )}
          {series.map((s, i) => {
            const isLast = i === series.length - 1
            return (
              <Bar
                key={s.key}
                dataKey={s.key}
                name={s.name ?? s.key}
                fill={s.color ?? CHART_COLORS[i % CHART_COLORS.length]}
                stackId={stacked ? 'stack' : undefined}
                radius={stacked ? (isLast ? [4, 4, 0, 0] : [0, 0, 0, 0]) : [4, 4, 0, 0]}
              />
            )
          })}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
