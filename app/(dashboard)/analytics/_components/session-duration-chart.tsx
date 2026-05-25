"use client"

import { ChartCard } from "@/components/common/chart-card"
import { AreaChartWidget } from "@/components/common/charts/area-chart"
import type { TimeSeriesPoint } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Duration (sec)", color: "var(--chart-3)" },
} satisfies ChartConfig

export function SessionDurationChart({ data }: { data: TimeSeriesPoint[] }) {
  const chartData = data.map((d) => ({ date: d.date, value: d.value }))

  return (
    <ChartCard title="Session duration" description="Average seconds per session">
      <AreaChartWidget
        data={chartData}
        xAxisKey="date"
        seriesKeys={["value"]}
        config={config}
      />
    </ChartCard>
  )
}
