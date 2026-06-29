import type { Meta, StoryObj } from '@storybook/react'
import { PieChart } from '@petal-ui/ui'

const meta: Meta<typeof PieChart> = {
  title: 'Components/DonutChart',
  component: PieChart,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PieChart>

const trafficData = [
  { name: 'Organic', value: 5400 },
  { name: 'Direct', value: 2100 },
  { name: 'Referral', value: 1600 },
  { name: 'Social', value: 900 },
]

export const Default: Story = {
  render: () => (
    <div className="w-[480px]">
      <PieChart data={trafficData} donut />
    </div>
  ),
}

export const WithCenterLabel: Story = {
  render: () => (
    <div className="w-[480px]">
      <PieChart
        data={trafficData}
        donut
        centerLabel="10,000"
        showLegend
      />
    </div>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <div className="w-[480px]">
      <PieChart data={trafficData} donut showLabels showLegend />
    </div>
  ),
}
