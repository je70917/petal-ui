import {
  LineChart as RechartsLineChart,
  Line,
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

export interface LineSeries {
  key: string
  name?: string
  color?: string
}

export interface LineChartProps {
  data: Record<string, unknown>[]
  series: LineSeries[]
  xKey: string
  height?: number
  curved?: boolean
  showGrid?: boolean
  showDots?: boolean
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
          <span className="h-2 w-2 rounded-full shrink-0" style={{ background: entry.stroke }} />
          <span>{entry.name ?? entry.dataKey}</span>
          <span className="ml-auto pl-4 font-medium text-text">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

export function LineChart({
  data,
  series,
  xKey,
  height = 300,
  curved = true,
  showGrid = true,
  showDots = true,
  showLegend = false,
  className,
}: LineChartProps) {
  return (
    <div className={cn('w-full font-sans', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
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
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'var(--color-border)', strokeWidth: 1 }} />
          {showLegend && (
            <Legend
              wrapperStyle={{ fontSize: 12, color: 'var(--color-text-muted)', paddingTop: 16 }}
            />
          )}
          {series.map((s, i) => {
            const color = s.color ?? CHART_COLORS[i % CHART_COLORS.length]
            return (
              <Line
                key={s.key}
                dataKey={s.key}
                name={s.name ?? s.key}
                type={curved ? 'monotone' : 'linear'}
                stroke={color}
                strokeWidth={2}
                dot={showDots ? { fill: color, strokeWidth: 0, r: 3 } : false}
                activeDot={{ fill: color, strokeWidth: 0, r: 5 }}
              />
            )
          })}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}
