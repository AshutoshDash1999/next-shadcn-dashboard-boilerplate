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
import type { TopPage } from "@/lib/mock-data/types"

export function TopPagesTable({ pages }: { pages: TopPage[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Top pages detail</CardTitle>
        <CardDescription>URL performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Unique visitors</TableHead>
              <TableHead>Bounce rate</TableHead>
              <TableHead>Avg time</TableHead>
              <TableHead>Exit rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.url}>
                <TableCell className="font-medium">{page.url}</TableCell>
                <TableCell className="tabular-nums">
                  {page.views.toLocaleString()}
                </TableCell>
                <TableCell className="tabular-nums">
                  {page.uniqueVisitors.toLocaleString()}
                </TableCell>
                <TableCell>{page.bounceRate}%</TableCell>
                <TableCell>{page.avgTimeOnPage}</TableCell>
                <TableCell>{page.exitRate}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
