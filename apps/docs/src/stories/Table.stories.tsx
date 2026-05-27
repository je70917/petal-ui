import type { Meta, StoryObj } from '@storybook/react'
import {
  Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption,
  Badge,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuDestructiveItem,
} from '@petal-ui/ui'

const meta: Meta = {
  title: 'Components/Table',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

const invoices = [
  { id: 'INV-001', status: 'Paid',    method: 'Credit Card', amount: '$250.00' },
  { id: 'INV-002', status: 'Pending', method: 'Bank Transfer', amount: '$150.00' },
  { id: 'INV-003', status: 'Paid',    method: 'PayPal', amount: '$350.00' },
  { id: 'INV-004', status: 'Failed',  method: 'Credit Card', amount: '$450.00' },
  { id: 'INV-005', status: 'Pending', method: 'Bank Transfer', amount: '$550.00' },
]

const statusVariant: Record<string, 'success' | 'warning' | 'destructive'> = {
  Paid:    'success',
  Pending: 'warning',
  Failed:  'destructive',
}

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[inv.status]}>{inv.status}</Badge>
            </TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[inv.status]}>{inv.status}</Badge>
            </TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right">{inv.amount}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex h-8 w-8 items-center justify-center rounded-md text-text-muted hover:bg-secondary hover:text-text">
                    <DotsIcon />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuDestructiveItem>Delete</DropdownMenuDestructiveItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

function DotsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5"  r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
    </svg>
  )
}

export const Simple: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { name: 'Jane Smith',  role: 'Designer', email: 'jane@example.com' },
          { name: 'John Doe',    role: 'Engineer', email: 'john@example.com' },
          { name: 'Sara Lee',    role: 'PM',       email: 'sara@example.com' },
        ].map((row) => (
          <TableRow key={row.email}>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell className="text-text-muted">{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
