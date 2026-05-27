import type { Meta, StoryObj } from '@storybook/react'
import { Input, Label, FieldDescription } from '@petal-ui/ui'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  argTypes: {
    variant:     { control: 'select', options: ['default', 'error'] },
    size:        { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled:    { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="name">Full name</Label>
      <Input id="name" placeholder="Jane Smith" />
    </div>
  ),
}

export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
      <FieldDescription>We'll never share your email with anyone.</FieldDescription>
    </div>
  ),
}

export const DescriptionAbove: Story = {
  name: 'Description Above',
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="password">Password</Label>
      <FieldDescription>Must be at least 12 characters and include a symbol.</FieldDescription>
      <Input id="password" type="password" placeholder="••••••••••••" />
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="username" required>Username</Label>
      <Input id="username" placeholder="yourhandle" />
      <FieldDescription>Must be 3–20 characters, letters and numbers only.</FieldDescription>
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="email-error">Email address</Label>
      <Input id="email-error" variant="error" defaultValue="not-an-email" />
      <FieldDescription className="text-destructive">Please enter a valid email address.</FieldDescription>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="disabled-input">Account ID</Label>
      <Input id="disabled-input" disabled defaultValue="ACC-00129" />
      <FieldDescription>This field cannot be changed.</FieldDescription>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex flex-col gap-1.5">
        <Label>Small — 32px</Label>
        <Input size="sm" placeholder="Small input" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Medium — 40px</Label>
        <Input size="md" placeholder="Medium input" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Large — 48px</Label>
        <Input size="lg" placeholder="Large input" />
      </div>
    </div>
  ),
}
