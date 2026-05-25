"use client"

import { ChartCard } from "@/components/common/chart-card"
import { BarChartWidget } from "@/components/common/charts/bar-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Users", color: "var(--chart-1)" },
} satisfies ChartConfig

export function RetentionFunnelChart({ data }: { data: LabelValue[] }) {
  const chartData = data.map((d) => ({ label: d.label, value: d.value }))

  return (
    <ChartCard
      title="Retention funnel"
      description="Signup → Onboarded → Active → Retained"
    >
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
