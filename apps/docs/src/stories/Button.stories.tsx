import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@petal-ui/ui'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Button' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Button' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Button' },
}

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete' },
}

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
}

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs text-text-muted font-mono mb-3">size=md</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
      <div>
        <p className="text-xs text-text-muted font-mono mb-3">size=sm</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary"     size="sm">Primary</Button>
          <Button variant="secondary"   size="sm">Secondary</Button>
          <Button variant="ghost"       size="sm">Ghost</Button>
          <Button variant="destructive" size="sm">Destructive</Button>
        </div>
      </div>
    </div>
  ),
}
