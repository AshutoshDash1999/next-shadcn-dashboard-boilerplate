"use client"

import { ChartCard } from "@/components/common/chart-card"
import { LineChartWidget } from "@/components/common/charts/line-chart"
import type { TimeSeriesPoint } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "MRR", color: "var(--chart-2)" },
} satisfies ChartConfig

export function MrrChart({ data }: { data: TimeSeriesPoint[] }) {
  const chartData = data.map((d) => ({ date: d.date, value: d.value }))

  return (
    <ChartCard title="MRR growth" description="Monthly recurring revenue trend">
      <LineChartWidget
        data={chartData}
        xAxisKey="date"
        seriesKeys={["value"]}
        config={config}
      />
    </ChartCard>
  )
}
