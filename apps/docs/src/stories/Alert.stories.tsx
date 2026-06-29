import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from '@petal-ui/ui'
import { InfoIcon, CheckCircleIcon, WarningIcon, XCircleIcon } from '@phosphor-icons/react'

const meta: Meta = {
  title: 'Components/Alert',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Alert>
      <div className="flex flex-col gap-1">
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
      </div>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-[480px]">
      <Alert variant="info">
        <InfoIcon size={16} weight="fill" className="mt-0.5 shrink-0 text-info" />
        <div className="flex flex-col gap-1">
          <AlertTitle>New version available</AlertTitle>
          <AlertDescription>Version 2.0 is out with new features and improvements.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="success">
        <CheckCircleIcon size={16} weight="fill" className="mt-0.5 shrink-0 text-success" />
        <div className="flex flex-col gap-1">
          <AlertTitle>Payment successful</AlertTitle>
          <AlertDescription>Your payment has been processed. A receipt was sent to your email.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="warning">
        <WarningIcon size={16} weight="fill" className="mt-0.5 shrink-0 text-warning" />
        <div className="flex flex-col gap-1">
          <AlertTitle>Subscription expiring</AlertTitle>
          <AlertDescription>Your plan expires in 3 days. Renew to avoid interruption.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="destructive">
        <XCircleIcon size={16} weight="fill" className="mt-0.5 shrink-0 text-destructive" />
        <div className="flex flex-col gap-1">
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>We couldn't process your request. Please try again.</AlertDescription>
        </div>
      </Alert>
    </div>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Alert variant="warning" className="w-[480px]">
      <WarningIcon size={16} weight="fill" className="mt-0.5 shrink-0 text-warning" />
      <AlertTitle>Your session will expire in 5 minutes.</AlertTitle>
    </Alert>
  ),
}
