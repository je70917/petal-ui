import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ToastProvider, ToastViewport,
  Toast, ToastTitle, ToastDescription, ToastClose,
  Button,
} from '@petal-ui/ui'

const meta: Meta = {
  title: 'Components/Toast',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

function ToastDemo({ variant, title, description }: {
  variant?: 'default' | 'success' | 'warning' | 'destructive'
  title: string
  description?: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)}>Show toast</Button>
      <Toast variant={variant} open={open} onOpenChange={setOpen} duration={3000}>
        <div className="flex flex-col gap-1 flex-1">
          <ToastTitle>{title}</ToastTitle>
          {description && <ToastDescription>{description}</ToastDescription>}
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}

export const Default: Story = {
  render: () => <ToastDemo title="Changes saved" description="Your profile has been updated successfully." />,
}

export const Success: Story = {
  render: () => <ToastDemo variant="success" title="Payment successful" description="Your invoice has been paid." />,
}

export const Warning: Story = {
  render: () => <ToastDemo variant="warning" title="Session expiring" description="You'll be logged out in 5 minutes." />,
}

export const Destructive: Story = {
  render: () => <ToastDemo variant="destructive" title="Something went wrong" description="Please try again or contact support." />,
}

export const TitleOnly: Story = {
  render: () => <ToastDemo title="Link copied to clipboard" />,
}
