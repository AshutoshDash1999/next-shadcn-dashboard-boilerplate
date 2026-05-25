"use client"

import { ChartCard } from "@/components/common/chart-card"
import { ComposedChartWidget } from "@/components/common/charts/composed-chart"
import type { ChartConfig } from "@/components/ui/chart"

const config = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-3)" },
  netProfit: { label: "Net profit", color: "var(--chart-2)" },
} satisfies ChartConfig

type Point = {
  label: string
  revenue: number
  expenses: number
  netProfit: number
}

export function RevenueExpensesChart({ data }: { data: Point[] }) {
  return (
    <ChartCard
      title="Revenue vs expenses"
      description="Monthly bars with net profit line"
    >
      <ComposedChartWidget
        data={data}
        xAxisKey="label"
        barKeys={["revenue", "expenses"]}
        lineKeys={["netProfit"]}
        config={config}
      />
    </ChartCard>
  )
}
