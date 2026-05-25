"use client"

import { ChartCard } from "@/components/common/chart-card"
import { BarChartWidget } from "@/components/common/charts/bar-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Tickets", color: "var(--chart-1)" },
} satisfies ChartConfig

export function TicketsByCategoryChart({ data }: { data: LabelValue[] }) {
  const chartData = data.map((d) => ({ label: d.label, value: d.value }))

  return (
    <ChartCard title="Tickets by category" description="Open ticket mix">
      <BarChartWidget
        data={chartData}
        xAxisKey="label"
        seriesKeys={["value"]}
        config={config}
      />
    </ChartCard>
  )
}
