"use client"

import { ChartCard } from "@/components/common/chart-card"
import { LineChartWidget } from "@/components/common/charts/line-chart"
import type { TimeSeriesPoint } from "@/lib/mock-data/types"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  value: { label: "Tickets", color: "var(--chart-1)" },
} satisfies ChartConfig

export function TicketVolumeChart({ data }: { data: TimeSeriesPoint[] }) {
  const chartData = data.map((d) => ({ date: d.date, value: d.value }))

  return (
    <ChartCard title="Ticket volume" description="Last 30 days">
      <LineChartWidget
        data={chartData}
        xAxisKey="date"
        seriesKeys={["value"]}
        config={config}
      />
    </ChartCard>
  )
}
