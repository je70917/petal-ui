import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Label, FieldDescription } from '@petal-ui/ui'

const meta: Meta = {
  title: 'Components/Checkbox',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <Checkbox id="default" />,
}

export const Checked: Story = {
  render: () => <Checkbox id="checked" defaultChecked />,
}

export const Disabled: Story = {
  render: () => <Checkbox id="disabled" disabled />,
}

export const DisabledChecked: Story = {
  render: () => <Checkbox id="disabled-checked" disabled defaultChecked />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-start gap-2">
        <Checkbox id="marketing" className="mt-0.5" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="marketing">Marketing emails</Label>
          <FieldDescription>Receive updates about new features and promotions.</FieldDescription>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="notifications" className="mt-0.5" defaultChecked />
        <div className="flex flex-col gap-1">
          <Label htmlFor="notifications">Product notifications</Label>
          <FieldDescription>Get notified when something requires your attention.</FieldDescription>
        </div>
      </div>
    </div>
  ),
}
