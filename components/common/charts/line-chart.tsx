"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

type LineChartWidgetProps = {
  data: Record<string, string | number>[]
  xAxisKey: string
  seriesKeys: string[]
  config: ChartConfig
  className?: string
}

export function LineChartWidget({
  data,
  xAxisKey,
  seriesKeys,
  config,
  className,
}: LineChartWidgetProps) {
  return (
    <ChartContainer config={config} className={className ?? "h-[280px] w-full"}>
      <LineChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        {seriesKeys.map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={`var(--color-${key})`}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ChartContainer>
  )
}
