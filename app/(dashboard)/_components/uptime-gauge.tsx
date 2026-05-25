"use client"

import { ChartCard } from "@/components/common/chart-card"
import { RadialChartWidget } from "@/components/common/charts/radial-chart"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Uptime", color: "var(--chart-1)" },
} satisfies ChartConfig

export function UptimeGauge({ value }: { value: number }) {
  return (
    <ChartCard title="Server uptime" description="Last 30 days">
      <RadialChartWidget value={value} config={config} />
    </ChartCard>
  )
}
