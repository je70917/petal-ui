import type { Meta, StoryObj } from '@storybook/react'
import { Toggle, Label, FieldDescription } from '@petal-ui/ui'

const meta: Meta = {
  title: 'Components/Toggle',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <Toggle id="default" />,
}

export const Checked: Story = {
  render: () => <Toggle id="checked" defaultChecked />,
}

export const Disabled: Story = {
  render: () => <Toggle id="disabled" disabled />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Toggle id="dark-mode" />
      <Label htmlFor="dark-mode">Dark mode</Label>
    </div>
  ),
}

export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="notifications">Push notifications</Label>
          <FieldDescription>Receive alerts on your device.</FieldDescription>
        </div>
        <Toggle id="notifications" defaultChecked />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="emails">Email digest</Label>
          <FieldDescription>Weekly summary of your activity.</FieldDescription>
        </div>
        <Toggle id="emails" />
      </div>
    </div>
  ),
}
