"use client"

import { ChartCard } from "@/components/common/chart-card"
import { AreaChartWidget } from "@/components/common/charts/area-chart"
import type { TimeSeriesPoint } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Cumulative", color: "var(--chart-1)" },
} satisfies ChartConfig

export function CumulativeRevenueChart({ data }: { data: TimeSeriesPoint[] }) {
  const chartData = data.map((d) => ({ date: d.date, value: d.value }))

  return (
    <ChartCard title="Cumulative revenue" description="Year to date">
      <AreaChartWidget
        data={chartData}
        xAxisKey="date"
        seriesKeys={["value"]}
        config={config}
      />
    </ChartCard>
  )
}
