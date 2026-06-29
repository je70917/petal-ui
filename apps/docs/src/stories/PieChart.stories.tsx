import type { Meta, StoryObj } from '@storybook/react'
import { PieChart } from '@petal-ui/ui'

const meta: Meta<typeof PieChart> = {
  title: 'Components/PieChart',
  component: PieChart,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PieChart>

const budgetData = [
  { name: 'Engineering', value: 4200 },
  { name: 'Design', value: 1800 },
  { name: 'Marketing', value: 2400 },
  { name: 'Operations', value: 1200 },
  { name: 'Sales', value: 3000 },
]

export const Default: Story = {
  render: () => (
    <div className="w-[480px]">
      <PieChart data={budgetData} />
    </div>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <div className="w-[480px]">
      <PieChart data={budgetData} showLabels />
    </div>
  ),
}

export const WithLegend: Story = {
  render: () => (
    <div className="w-[480px]">
      <PieChart data={budgetData} showLegend />
    </div>
  ),
}
