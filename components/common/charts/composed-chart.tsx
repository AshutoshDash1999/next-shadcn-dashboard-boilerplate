"use client"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts"

type ComposedChartWidgetProps = {
  data: Record<string, string | number>[]
  xAxisKey: string
  barKeys: string[]
  lineKeys: string[]
  config: ChartConfig
  className?: string
}

export function ComposedChartWidget({
  data,
  xAxisKey,
  barKeys,
  lineKeys,
  config,
  className,
}: ComposedChartWidgetProps) {
  return (
    <ChartContainer config={config} className={className ?? "h-[280px] w-full"}>
      <ComposedChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {barKeys.map((key) => (
          <Bar key={key} dataKey={key} fill={`var(--color-${key})`} radius={4} />
        ))}
        {lineKeys.map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={`var(--color-${key})`}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </ComposedChart>
    </ChartContainer>
  )
}
