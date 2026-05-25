"use client"

import { ChartCard } from "@/components/common/chart-card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"

const config = {
  positive: { label: "Inflow", color: "var(--chart-1)" },
  negative: { label: "Outflow", color: "var(--chart-3)" },
  total: { label: "Total", color: "var(--chart-2)" },
} satisfies ChartConfig

type Step = { label: string; value: number; type: string }

function getFill(type: string) {
  if (type === "negative") return "var(--color-negative)"
  if (type === "total") return "var(--color-total)"
  return "var(--color-positive)"
}

export function PlWaterfallChart({ data }: { data: Step[] }) {
  const chartData = data.map((d) => ({
    label: d.label,
    value: Math.abs(d.value),
    displayValue: d.value,
    type: d.type,
  }))

  return (
    <ChartCard title="P&L waterfall" description="Monthly breakdown">
      <ChartContainer config={config} className="h-[280px] w-full">
        <BarChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value, _name, item) => {
                  const payload = item.payload as { displayValue: number }
                  return [
                    `$${payload.displayValue.toLocaleString()}`,
                    item.payload?.label,
                  ]
                }}
              />
            }
          />
          <Bar dataKey="value" radius={4}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getFill(entry.type)} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartCard>
  )
}
