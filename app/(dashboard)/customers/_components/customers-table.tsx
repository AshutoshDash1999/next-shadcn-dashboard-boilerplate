import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  getCustomerStatusVariant,
} from "@/lib/badge-variants"
import type { CustomerListItem } from "@/lib/mock-data/types"

export function CustomersTable({ customers }: { customers: CustomerListItem[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">All customers</CardTitle>
        <CardDescription>Full customer list with plan and LTV</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>LTV</TableHead>
              <TableHead>Last active</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((c) => (
              <TableRow key={c.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarImage src={c.avatar} alt={c.name} />
                      <AvatarFallback>
                        {c.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {c.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{c.plan}</TableCell>
                <TableCell className="tabular-nums">
                  ${c.ltv.toLocaleString()}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {c.lastActive}
                </TableCell>
                <TableCell>
                  <Badge variant={getCustomerStatusVariant(c.status)}>
                    {formatStatusLabel(c.status)}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {c.joinDate}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
