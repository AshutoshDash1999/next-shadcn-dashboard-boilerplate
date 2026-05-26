import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  formatStatusLabel,
  getTicketPriorityVariant,
  getTicketStatusVariant,
} from "@/lib/badge-variants"
import type { Ticket } from "@/lib/mock-data/types"


export function TicketsTable({ tickets }: { tickets: Ticket[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">All tickets</CardTitle>
        <CardDescription>Support queue and resolution tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.customer}</TableCell>
                <TableCell>
                  <Badge variant={getTicketPriorityVariant(ticket.priority)}>
                    {formatStatusLabel(ticket.priority)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getTicketStatusVariant(ticket.status)}>
                    {formatStatusLabel(ticket.status)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </CardContent>
    </Card>
  )
}
