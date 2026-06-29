import {
  PieChart as RechartsPieChart,
  Pie,
  Sector,
  Cell,
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

export interface PieSlice {
  name: string
  value: number
  color?: string
}

export interface PieChartProps {
  data: PieSlice[]
  height?: number
  donut?: boolean
  centerLabel?: string
  showLabels?: boolean
  showLegend?: boolean
  className?: string
}

function PieTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const entry = payload[0]
  return (
    <div className="rounded-lg border border-border bg-surface shadow-md px-3 py-2 text-sm font-sans">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full shrink-0" style={{ background: entry.payload.fill }} />
        <span className="text-text-muted">{entry.name}</span>
        <span className="ml-auto pl-4 font-medium text-text">{entry.value}</span>
      </div>
    </div>
  )
}

function SliceLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
  if (percent < 0.05) return null
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function RoundedArcShape({ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill }: any) {
  const RADIAN = Math.PI / 180
  const capRadius = (outerRadius - innerRadius) / 2
  const midRadius = (innerRadius + outerRadius) / 2
  const startRad = -startAngle * RADIAN
  const endRad = -endAngle * RADIAN

  return (
    <g>
      <Sector
        cx={cx} cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <circle cx={cx + midRadius * Math.cos(startRad)} cy={cy + midRadius * Math.sin(startRad)} r={capRadius} fill={fill} />
      <circle cx={cx + midRadius * Math.cos(endRad)} cy={cy + midRadius * Math.sin(endRad)} r={capRadius} fill={fill} />
    </g>
  )
}

export function PieChart({
  data,
  height = 300,
  donut = false,
  centerLabel,
  showLabels = false,
  showLegend = false,
  className,
}: PieChartProps) {
  return (
    <div className={cn('relative w-full font-sans', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={donut ? '52%' : 0}
            outerRadius="75%"
            paddingAngle={donut ? 4 : 0}
            labelLine={false}
            label={showLabels ? SliceLabel : false}
            shape={donut ? RoundedArcShape : undefined}
          >
            {data.map((entry, i) => (
              <Cell
                key={entry.name}
                fill={entry.color ?? CHART_COLORS[i % CHART_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<PieTooltip />} />
          {showLegend && (
            <Legend
              wrapperStyle={{ fontSize: 12, color: 'var(--color-text-muted)', paddingTop: 16 }}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
      {donut && centerLabel && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-lg font-semibold text-text">{centerLabel}</span>
        </div>
      )}
    </div>
  )
}
