"use client"

import { ChartCard } from "@/components/common/chart-card"
import { AreaChartWidget } from "@/components/common/charts/area-chart"
import type { TimeSeriesPoint } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Signups", color: "var(--chart-2)" },
} satisfies ChartConfig

export function SignupsChart({ data }: { data: TimeSeriesPoint[] }) {
  const chartData = data.map((d) => ({ date: d.date, value: d.value }))

  return (
    <ChartCard title="New signups" description="Last 30 days">
      <AreaChartWidget
        data={chartData}
        xAxisKey="date"
        seriesKeys={["value"]}
        config={config}
      />
    </ChartCard>
  )
}
