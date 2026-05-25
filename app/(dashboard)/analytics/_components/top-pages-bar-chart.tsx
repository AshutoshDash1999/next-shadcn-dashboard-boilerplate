"use client"

import { ChartCard } from "@/components/common/chart-card"
import { BarChartWidget } from "@/components/common/charts/bar-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Visits", color: "var(--chart-1)" },
} satisfies ChartConfig

export function TopPagesBarChart({ data }: { data: LabelValue[] }) {
  const chartData = data.map((d) => ({ label: d.label, value: d.value }))

  return (
    <ChartCard title="Top pages" description="By visit count">
      <BarChartWidget
        data={chartData}
        xAxisKey="label"
        seriesKeys={["value"]}
        config={config}
        layout="horizontal"
      />
    </ChartCard>
  )
}
