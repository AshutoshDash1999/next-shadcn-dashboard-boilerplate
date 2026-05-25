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
  getPaymentStatusVariant,
} from "@/lib/badge-variants"
import type { Transaction } from "@/lib/mock-data/types"

export function TransactionsTable({
  transactions,
}: {
  transactions: Transaction[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Transactions</CardTitle>
        <CardDescription>Invoices and payment status</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Due</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell className="font-medium">{tx.invoiceNumber}</TableCell>
                <TableCell>{tx.customer}</TableCell>
                <TableCell className="tabular-nums">
                  ${tx.amount.toLocaleString()}
                </TableCell>
                <TableCell>{tx.plan}</TableCell>
                <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                <TableCell className="text-muted-foreground">
                  {tx.dueDate}
                </TableCell>
                <TableCell>{tx.method}</TableCell>
                <TableCell>
                  <Badge variant={getPaymentStatusVariant(tx.status)}>
                    {formatStatusLabel(tx.status)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
