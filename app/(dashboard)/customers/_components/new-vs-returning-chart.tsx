"use client"

import { ChartCard } from "@/components/common/chart-card"
import { BarChartWidget } from "@/components/common/charts/bar-chart"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  new: { label: "New", color: "var(--chart-1)" },
  returning: { label: "Returning", color: "var(--chart-4)" },
} satisfies ChartConfig

type Point = { label: string; new: number; returning: number }

export function NewVsReturningChart({ data }: { data: Point[] }) {
  return (
    <ChartCard title="New vs returning" description="Monthly breakdown">
      <BarChartWidget
        data={data}
        xAxisKey="label"
        seriesKeys={["new", "returning"]}
        config={config}
        stacked
      />
    </ChartCard>
  )
}
