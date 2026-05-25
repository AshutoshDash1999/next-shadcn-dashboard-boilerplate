import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Kpi } from "@/lib/mock-data/types"
import { TrendingDown, TrendingUp } from "lucide-react"

type StatCardProps = {
  kpi: Kpi
  className?: string
}

export function StatCard({ kpi, className }: StatCardProps) {
  const isPositiveChange = kpi.changePercent >= 0
  const TrendIcon = isPositiveChange ? TrendingUp : TrendingDown
  const trendPositive =
    (kpi.trend === "up" && isPositiveChange) ||
    (kpi.trend === "down" && !isPositiveChange)

  return (
    <Card size="sm" className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-sm font-normal text-muted-foreground">
          {kpi.label}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span className="text-2xl font-semibold tabular-nums">{kpi.value}</span>
        <div
          className={cn(
            "flex items-center gap-1 text-xs font-medium",
            trendPositive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
          )}
        >
          <TrendIcon className="size-3.5" />
          <span>
            {isPositiveChange ? "+" : ""}
            {kpi.changePercent}% vs last month
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
