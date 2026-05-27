import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from '@petal-ui/ui'

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
        <InfoIcon />
        <div className="flex flex-col gap-1">
          <AlertTitle>New version available</AlertTitle>
          <AlertDescription>Version 2.0 is out with new features and improvements.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="success">
        <SuccessIcon />
        <div className="flex flex-col gap-1">
          <AlertTitle>Payment successful</AlertTitle>
          <AlertDescription>Your payment has been processed. A receipt was sent to your email.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="warning">
        <WarningIcon />
        <div className="flex flex-col gap-1">
          <AlertTitle>Subscription expiring</AlertTitle>
          <AlertDescription>Your plan expires in 3 days. Renew to avoid interruption.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="destructive">
        <ErrorIcon />
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
      <WarningIcon />
      <AlertTitle>Your session will expire in 5 minutes.</AlertTitle>
    </Alert>
  ),
}

function InfoIcon() {
  return <svg className="h-4 w-4 mt-0.5 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
}
function SuccessIcon() {
  return <svg className="h-4 w-4 mt-0.5 shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
}
function WarningIcon() {
  return <svg className="h-4 w-4 mt-0.5 shrink-0 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/></svg>
}
function ErrorIcon() {
  return <svg className="h-4 w-4 mt-0.5 shrink-0 text-destructive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>
}
