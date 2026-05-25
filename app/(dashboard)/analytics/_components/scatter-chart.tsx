"use client"

import { ChartCard } from "@/components/common/chart-card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  CartesianGrid,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts"

const config = {
  sessionDuration: {
    label: "Session duration",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

type Point = {
  pagesVisited: number
  sessionDuration: number
  user: string
}

export function ScatterChartWidget({ data }: { data: Point[] }) {
  return (
    <ChartCard
      title="Engagement scatter"
      description="Pages visited vs session duration"
    >
      <ChartContainer config={config} className="h-[280px] w-full">
        <ScatterChart margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            type="number"
            dataKey="pagesVisited"
            name="Pages"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="number"
            dataKey="sessionDuration"
            name="Duration"
            tickLine={false}
            axisLine={false}
          />
          <ZAxis range={[60, 60]} />
          <ChartTooltip
            content={<ChartTooltipContent />}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Scatter
            data={data}
            fill="var(--color-sessionDuration)"
            name="Users"
          />
        </ScatterChart>
      </ChartContainer>
    </ChartCard>
  )
}
