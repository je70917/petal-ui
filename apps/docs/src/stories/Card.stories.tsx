import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from '@petal-ui/ui'

const meta: Meta = {
  title: 'Components/Card',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of the card content goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text">This is the main content area of the card.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Confirm</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text-muted">Just a card with a title and content, no footer.</p>
      </CardContent>
    </Card>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Feature Update</CardTitle>
          <Badge variant="success">New</Badge>
        </div>
        <CardDescription>We just shipped something exciting.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text">Check out what's new in this release and how it impacts your workflow.</p>
      </CardContent>
    </Card>
  ),
}

export const Stat: Story = {
  render: () => (
    <div className="flex gap-4">
      {[
        { label: 'Total Users',   value: '12,430', badge: '+8%' },
        { label: 'Active Today',  value: '1,209',  badge: '+2%' },
        { label: 'Churn Rate',    value: '2.4%',   badge: '-0.3%' },
      ].map(({ label, value, badge }) => (
        <Card key={label} className="w-44">
          <CardHeader>
            <CardDescription>{label}</CardDescription>
            <CardTitle className="text-2xl">{value}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">{badge}</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
}
