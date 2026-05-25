"use client"

import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"
import { PolarGrid, RadialBar, RadialBarChart } from "recharts"

type RadialChartWidgetProps = {
  value: number
  label?: string
  config: ChartConfig
  className?: string
}

export function RadialChartWidget({
  value,
  label = "Uptime",
  config,
  className,
}: RadialChartWidgetProps) {
  const data = [{ name: label, value, fill: "var(--color-value)" }]

  return (
    <ChartContainer
      config={config}
      className={className ?? "mx-auto aspect-square h-[220px] w-full max-w-[220px]"}
    >
      <RadialBarChart
        data={data}
        startAngle={90}
        endAngle={-270}
        innerRadius="70%"
        outerRadius="100%"
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="fill-muted/20"
        />
        <RadialBar dataKey="value" background cornerRadius={8} />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-foreground text-2xl font-semibold"
        >
          {value}%
        </text>
      </RadialBarChart>
    </ChartContainer>
  )
}
