"use client"

import { ChartCard } from "@/components/common/chart-card"
import { PieChartWidget } from "@/components/common/charts/pie-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  segment1: { label: "Open", color: "var(--chart-1)" },
  segment2: { label: "In Progress", color: "var(--chart-2)" },
  segment3: { label: "Resolved", color: "var(--chart-3)" },
  segment4: { label: "Closed", color: "var(--chart-4)" },
} satisfies ChartConfig

export function StatusBreakdownChart({ data }: { data: LabelValue[] }) {
  return (
    <ChartCard title="Status breakdown" description="All tickets by status">
      <PieChartWidget data={data} config={config} innerRadius={55} />
    </ChartCard>
  )
}
