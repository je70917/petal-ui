import type { Meta, StoryObj } from '@storybook/react'
import { LineChart } from '@petal-ui/ui'

const meta: Meta<typeof LineChart> = {
  title: 'Components/LineChart',
  component: LineChart,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof LineChart>

const monthlyData = [
  { month: 'Jan', revenue: 4200, expenses: 2800 },
  { month: 'Feb', revenue: 3800, expenses: 2500 },
  { month: 'Mar', revenue: 5100, expenses: 3100 },
  { month: 'Apr', revenue: 4700, expenses: 2900 },
  { month: 'May', revenue: 6200, expenses: 3400 },
  { month: 'Jun', revenue: 5800, expenses: 3200 },
  { month: 'Jul', revenue: 7100, expenses: 3800 },
  { month: 'Aug', revenue: 6800, expenses: 3600 },
]

const weeklyData = [
  { day: 'Mon', sessions: 1200 },
  { day: 'Tue', sessions: 1850 },
  { day: 'Wed', sessions: 1600 },
  { day: 'Thu', sessions: 2100 },
  { day: 'Fri', sessions: 2400 },
  { day: 'Sat', sessions: 1300 },
  { day: 'Sun', sessions: 900 },
]

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <LineChart
        data={weeklyData}
        series={[{ key: 'sessions', name: 'Sessions' }]}
        xKey="day"
      />
    </div>
  ),
}

export const MultiSeries: Story = {
  render: () => (
    <div className="w-[600px]">
      <LineChart
        data={monthlyData}
        series={[
          { key: 'revenue', name: 'Revenue' },
          { key: 'expenses', name: 'Expenses' },
        ]}
        xKey="month"
        showLegend
      />
    </div>
  ),
}

export const Straight: Story = {
  render: () => (
    <div className="w-[600px]">
      <LineChart
        data={monthlyData}
        series={[
          { key: 'revenue', name: 'Revenue' },
          { key: 'expenses', name: 'Expenses' },
        ]}
        xKey="month"
        curved={false}
        showLegend
      />
    </div>
  ),
}

export const NoDots: Story = {
  render: () => (
    <div className="w-[600px]">
      <LineChart
        data={monthlyData}
        series={[
          { key: 'revenue', name: 'Revenue' },
          { key: 'expenses', name: 'Expenses' },
        ]}
        xKey="month"
        showDots={false}
        showLegend
      />
    </div>
  ),
}
