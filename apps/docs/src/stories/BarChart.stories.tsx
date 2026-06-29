import type { Meta, StoryObj } from '@storybook/react'
import { BarChart } from '@petal-ui/ui'

const meta: Meta<typeof BarChart> = {
  title: 'Components/BarChart',
  component: BarChart,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof BarChart>

const monthlyData = [
  { month: 'Jan', revenue: 4200, expenses: 2800, profit: 1400, overhead: 600 },
  { month: 'Feb', revenue: 3800, expenses: 2500, profit: 1300, overhead: 550 },
  { month: 'Mar', revenue: 5100, expenses: 3100, profit: 2000, overhead: 700 },
  { month: 'Apr', revenue: 4700, expenses: 2900, profit: 1800, overhead: 620 },
  { month: 'May', revenue: 6200, expenses: 3400, profit: 2800, overhead: 750 },
  { month: 'Jun', revenue: 5800, expenses: 3200, profit: 2600, overhead: 680 },
]

const weeklyData = [
  { day: 'Mon', visitors: 320 },
  { day: 'Tue', visitors: 480 },
  { day: 'Wed', visitors: 410 },
  { day: 'Thu', visitors: 560 },
  { day: 'Fri', visitors: 720 },
  { day: 'Sat', visitors: 390 },
  { day: 'Sun', visitors: 210 },
]

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <BarChart
        data={weeklyData}
        series={[{ key: 'visitors', name: 'Visitors' }]}
        xKey="day"
      />
    </div>
  ),
}

export const MultiSeries: Story = {
  render: () => (
    <div className="w-[600px]">
      <BarChart
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

export const Stacked: Story = {
  render: () => (
    <div className="w-[600px]">
      <BarChart
        data={monthlyData}
        series={[
          { key: 'expenses', name: 'Expenses' },
          { key: 'profit', name: 'Profit' },
          { key: 'overhead', name: 'Overhead' },
          { key: 'revenue', name: 'Revenue' },
        ]}
        xKey="month"
        stacked
        showLegend
      />
    </div>
  ),
}

export const NoGrid: Story = {
  render: () => (
    <div className="w-[600px]">
      <BarChart
        data={weeklyData}
        series={[{ key: 'visitors', name: 'Visitors' }]}
        xKey="day"
        showGrid={false}
      />
    </div>
  ),
}
