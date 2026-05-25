"use client"

import { ChartCard } from "@/components/common/chart-card"
import { BarChartWidget } from "@/components/common/charts/bar-chart"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  thisWeek: { label: "This week", color: "var(--chart-1)" },
  lastWeek: { label: "Last week", color: "var(--chart-3)" },
} satisfies ChartConfig

type DauPoint = { label: string; thisWeek: number; lastWeek: number }

export function DauComparisonChart({ data }: { data: DauPoint[] }) {
  return (
    <ChartCard
      title="Daily active users"
      description="This week vs last week"
    >
      <BarChartWidget
        data={data}
        xAxisKey="label"
        seriesKeys={["thisWeek", "lastWeek"]}
        config={config}
      />
    </ChartCard>
  )
}
