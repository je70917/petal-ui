import type { Meta, StoryObj } from '@storybook/react'
import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectGroup, SelectLabel, SelectItem, SelectSeparator,
  Label, FieldDescription,
} from '@petal-ui/ui'

const meta: Meta = {
  title: 'Components/Select',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="mango">Mango</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-56">
      <Label htmlFor="fruit">Favourite fruit</Label>
      <Select>
        <SelectTrigger id="fruit" className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-56">
      <Label htmlFor="plan" required>Billing plan</Label>
      <Select>
        <SelectTrigger id="plan" className="w-full">
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="enterprise" disabled>Enterprise (contact us)</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>You can change your plan at any time.</FieldDescription>
    </div>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-56">
      <Label htmlFor="grouped">Fruit</Label>
      <Select>
        <SelectTrigger id="grouped" className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tropical</SelectLabel>
            <SelectItem value="mango">Mango</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="papaya">Papaya</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Berries</SelectLabel>
            <SelectItem value="strawberry">Strawberry</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-56">
      <Label htmlFor="disabled-select">Region</Label>
      <Select disabled>
        <SelectTrigger id="disabled-select" className="w-full">
          <SelectValue placeholder="Not available" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>Region cannot be changed after signup.</FieldDescription>
    </div>
  ),
}
