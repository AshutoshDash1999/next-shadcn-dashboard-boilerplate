"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Cell, Pie, PieChart } from "recharts"

type PieChartWidgetProps = {
  data: { label: string; value: number }[]
  config: ChartConfig
  innerRadius?: number
  className?: string
}

const COLORS = [
  "var(--color-segment1)",
  "var(--color-segment2)",
  "var(--color-segment3)",
  "var(--color-segment4)",
  "var(--color-segment5)",
]

export function PieChartWidget({
  data,
  config,
  innerRadius = 0,
  className,
}: PieChartWidgetProps) {
  const chartData = data.map((d) => ({
    name: d.label,
    value: d.value,
  }))

  return (
    <ChartContainer config={config} className={className ?? "mx-auto h-[280px] w-full"}>
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={100}
          paddingAngle={innerRadius > 0 ? 2 : 0}
        >
          {chartData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
