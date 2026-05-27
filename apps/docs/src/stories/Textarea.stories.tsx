import type { Meta, StoryObj } from '@storybook/react'
import { Textarea, Label, FieldDescription } from '@petal-ui/ui'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant:  { control: 'select', options: ['default', 'error'] },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-80">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Write your message here..." />
    </div>
  ),
}

export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-80">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself..." />
      <FieldDescription>Max 280 characters. Shown on your public profile.</FieldDescription>
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-80">
      <Label htmlFor="feedback">Feedback</Label>
      <Textarea id="feedback" variant="error" defaultValue="x" />
      <FieldDescription className="text-destructive">Please enter at least 20 characters.</FieldDescription>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-80">
      <Label htmlFor="readonly">Notes</Label>
      <Textarea id="readonly" disabled defaultValue="This field is read-only." />
    </div>
  ),
}
