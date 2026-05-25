"use client"

import { ChartCard } from "@/components/common/chart-card"
import { LineChartWidget } from "@/components/common/charts/line-chart"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  pageViews: { label: "Page views", color: "var(--chart-1)" },
  uniqueVisitors: { label: "Unique visitors", color: "var(--chart-2)" },
} satisfies ChartConfig

type Point = { date: string; pageViews: number; uniqueVisitors: number }

export function PageViewsChart({ data }: { data: Point[] }) {
  return (
    <ChartCard
      title="Page views vs visitors"
      description="Last 30 days"
    >
      <LineChartWidget
        data={data}
        xAxisKey="date"
        seriesKeys={["pageViews", "uniqueVisitors"]}
        config={config}
      />
    </ChartCard>
  )
}
