"use client"

import { ChartCard } from "@/components/common/chart-card"
import { AreaChartWidget } from "@/components/common/charts/area-chart"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
  tablet: { label: "Tablet", color: "var(--chart-3)" },
} satisfies ChartConfig

type Point = { date: string; desktop: number; mobile: number; tablet: number }

export function DeviceBreakdownChart({ data }: { data: Point[] }) {
  return (
    <ChartCard title="Device breakdown" description="Share over time (%)">
      <AreaChartWidget
        data={data}
        xAxisKey="date"
        seriesKeys={["desktop", "mobile", "tablet"]}
        config={config}
        stacked
      />
    </ChartCard>
  )
}
