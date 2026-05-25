"use client"

import { ChartCard } from "@/components/common/chart-card"
import { PieChartWidget } from "@/components/common/charts/pie-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  segment1: { label: "Enterprise", color: "var(--chart-1)" },
  segment2: { label: "Pro", color: "var(--chart-2)" },
  segment3: { label: "Free", color: "var(--chart-3)" },
  segment4: { label: "Add-ons", color: "var(--chart-4)" },
} satisfies ChartConfig

export function RevenueBreakdownChart({ data }: { data: LabelValue[] }) {
  return (
    <ChartCard title="Revenue by plan" description="Product mix">
      <PieChartWidget data={data} config={config} innerRadius={55} />
    </ChartCard>
  )
}
