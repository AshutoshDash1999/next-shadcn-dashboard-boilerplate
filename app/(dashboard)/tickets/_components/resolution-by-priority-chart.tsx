"use client"

import { ChartCard } from "@/components/common/chart-card"
import { BarChartWidget } from "@/components/common/charts/bar-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Hours", color: "var(--chart-3)" },
} satisfies ChartConfig

export function ResolutionByPriorityChart({ data }: { data: LabelValue[] }) {
  const chartData = data.map((d) => ({ label: d.label, value: d.value }))

  return (
    <ChartCard
      title="Resolution time"
      description="Avg hours by priority"
    >
      <BarChartWidget
        data={chartData}
        xAxisKey="label"
        seriesKeys={["value"]}
        config={config}
      />
    </ChartCard>
  )
}
