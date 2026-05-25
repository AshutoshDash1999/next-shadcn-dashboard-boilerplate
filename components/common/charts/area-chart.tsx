"use client"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

type AreaChartWidgetProps = {
  data: Record<string, string | number>[]
  xAxisKey: string
  seriesKeys: string[]
  config: ChartConfig
  stacked?: boolean
  className?: string
}

export function AreaChartWidget({
  data,
  xAxisKey,
  seriesKeys,
  config,
  stacked = false,
  className,
}: AreaChartWidgetProps) {
  return (
    <ChartContainer config={config} className={className ?? "h-[280px] w-full"}>
      <AreaChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        {seriesKeys.length > 1 ? (
          <ChartLegend content={<ChartLegendContent />} />
        ) : null}
        {seriesKeys.map((key) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stackId={stacked ? "a" : undefined}
            fill={`var(--color-${key})`}
            fillOpacity={0.4}
            stroke={`var(--color-${key})`}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  )
}
