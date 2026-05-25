"use client"

import { ChartCard } from "@/components/common/chart-card"
import { PieChartWidget } from "@/components/common/charts/pie-chart"
import type { LabelValue } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  segment1: { label: "Organic", color: "var(--chart-1)" },
  segment2: { label: "Paid", color: "var(--chart-2)" },
  segment3: { label: "Referral", color: "var(--chart-3)" },
  segment4: { label: "Direct", color: "var(--chart-4)" },
} satisfies ChartConfig

export function TrafficSourcesChart({ data }: { data: LabelValue[] }) {
  return (
    <ChartCard title="Traffic sources" description="Share by channel">
      <PieChartWidget data={data} config={config} innerRadius={60} />
    </ChartCard>
  )
}
