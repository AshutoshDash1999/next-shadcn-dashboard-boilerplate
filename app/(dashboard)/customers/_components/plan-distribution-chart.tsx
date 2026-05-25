"use client"

import { ChartCard } from "@/components/common/chart-card"
import { PieChartWidget } from "@/components/common/charts/pie-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  segment1: { label: "Free", color: "var(--chart-3)" },
  segment2: { label: "Pro", color: "var(--chart-1)" },
  segment3: { label: "Enterprise", color: "var(--chart-2)" },
} satisfies ChartConfig

export function PlanDistributionChart({ data }: { data: LabelValue[] }) {
  return (
    <ChartCard title="Plan distribution" description="Free / Pro / Enterprise">
      <PieChartWidget data={data} config={config} innerRadius={55} />
    </ChartCard>
  )
}
