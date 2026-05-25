"use client"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

type BarChartWidgetProps = {
  data: Record<string, string | number>[]
  xAxisKey: string
  seriesKeys: string[]
  config: ChartConfig
  stacked?: boolean
  layout?: "horizontal" | "vertical"
  className?: string
}

export function BarChartWidget({
  data,
  xAxisKey,
  seriesKeys,
  config,
  stacked = false,
  layout = "vertical",
  className,
}: BarChartWidgetProps) {
  const isHorizontal = layout === "horizontal"

  return (
    <ChartContainer config={config} className={className ?? "h-[280px] w-full"}>
      <BarChart
        data={data}
        layout={isHorizontal ? "vertical" : "horizontal"}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        {isHorizontal ? (
          <>
            <XAxis type="number" tickLine={false} axisLine={false} />
            <YAxis
              type="category"
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              width={80}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          </>
        )}
        <ChartTooltip content={<ChartTooltipContent />} />
        {seriesKeys.length > 1 ? (
          <ChartLegend content={<ChartLegendContent />} />
        ) : null}
        {seriesKeys.map((key) => (
          <Bar
            key={key}
            dataKey={key}
            stackId={stacked ? "a" : undefined}
            fill={`var(--color-${key})`}
            radius={4}
          />
        ))}
      </BarChart>
    </ChartContainer>
  )
}
