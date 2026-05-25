"use client"

import { ChartCard } from "@/components/common/chart-card"
import { BarChartWidget } from "@/components/common/charts/bar-chart"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  open: { label: "Open", color: "var(--chart-1)" },
  resolved: { label: "Resolved", color: "var(--chart-2)" },
} satisfies ChartConfig

type Point = { label: string; open: number; resolved: number }

export function TicketsByAgentChart({ data }: { data: Point[] }) {
  return (
    <ChartCard title="Tickets by agent" description="This week">
      <BarChartWidget
        data={data}
        xAxisKey="label"
        seriesKeys={["open", "resolved"]}
        config={config}
        stacked
      />
    </ChartCard>
  )
}
