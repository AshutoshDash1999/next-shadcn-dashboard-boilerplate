"use client"

import { Fragment } from "react"
import { ChartCard } from "@/components/common/chart-card"
import { cn } from "@/lib/utils"

type HeatmapData = {
  hours: string[]
  days: string[]
  values: number[][]
}

export function TrafficHeatmap({ data }: { data: HeatmapData }) {
  const max = Math.max(...data.values.flat(), 1)

  return (
    <ChartCard
      title="Traffic heatmap"
      description="Visits by hour × day of week"
      className="md:col-span-2"
    >
      <div className="overflow-x-auto">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: `80px repeat(${data.hours.length}, minmax(48px, 1fr))`,
          }}
        >
          <div />
          {data.hours.map((hour) => (
            <div
              key={hour}
              className="text-center text-xs text-muted-foreground"
            >
              {hour}
            </div>
          ))}
          {data.days.map((day, rowIndex) => (
            <Fragment key={day}>
              <div className="flex items-center text-xs font-medium text-muted-foreground">
                {day}
              </div>
              {data.hours.map((hour, colIndex) => {
                const value = data.values[rowIndex]?.[colIndex] ?? 0
                const intensity = value / max
                return (
                  <div
                    key={`${day}-${hour}`}
                    title={`${day} ${hour}: ${value}`}
                    className={cn(
                      "flex h-10 items-center justify-center rounded-md text-xs font-medium tabular-nums",
                      intensity > 0.6
                        ? "text-primary-foreground"
                        : "text-foreground"
                    )}
                    style={{
                      backgroundColor: `oklch(from var(--chart-1) l c h / ${0.15 + intensity * 0.85})`,
                    }}
                  >
                    {value}
                  </div>
                )
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </ChartCard>
  )
}
