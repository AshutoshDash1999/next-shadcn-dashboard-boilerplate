"use client"

import { ChartCard } from "@/components/common/chart-card"
import { AreaChartWidget } from "@/components/common/charts/area-chart"
import type { TimeSeriesPoint } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "CSAT", color: "var(--chart-1)" },
} satisfies ChartConfig

export function CsatTrendChart({ data }: { data: TimeSeriesPoint[] }) {
  const chartData = data.map((d) => ({ date: d.date, value: d.value }))

  return (
    <ChartCard title="CSAT trend" description="Customer satisfaction over time">
      <AreaChartWidget
        data={chartData}
        xAxisKey="date"
        seriesKeys={["value"]}
        config={config}
      />
    </ChartCard>
  )
}
