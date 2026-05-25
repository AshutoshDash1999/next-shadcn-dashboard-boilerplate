"use client"

import { ChartCard } from "@/components/common/chart-card"
import { BarChartWidget } from "@/components/common/charts/bar-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Customers", color: "var(--chart-2)" },
} satisfies ChartConfig

export function CustomersByRegionChart({ data }: { data: LabelValue[] }) {
  const chartData = data.map((d) => ({ label: d.label, value: d.value }))

  return (
    <ChartCard title="Customers by region" description="Top countries">
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
