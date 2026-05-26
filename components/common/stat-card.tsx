"use client"

import { cn } from "@/lib/utils"
import type { Kpi } from "@/lib/mock-data/types"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import type React from "react"

type TablerIcon = React.ComponentType<{ className?: string; size?: number }>

const colorStyles = [
  {
    card: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    card: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    card: "from-purple-500/20 to-purple-500/5",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    card: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
]

type StatCardProps = {
  kpi: Kpi
  className?: string
  icon?: TablerIcon
  colorIndex?: number
  description?: string
}

export function StatCard({
  kpi,
  className,
  icon: Icon,
  colorIndex = 0,
  description = "vs last month",
}: StatCardProps) {
  const isPositiveChange = kpi.changePercent >= 0
  const TrendIcon = isPositiveChange ? IconTrendingUp : IconTrendingDown
  const trendPositive =
    (kpi.trend === "up" && isPositiveChange) ||
    (kpi.trend === "down" && !isPositiveChange)

  const { card, iconBg, iconColor } = colorStyles[colorIndex % colorStyles.length]

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl bg-linear-to-br p-4",
        card,
        className
      )}
    >
      {Icon && (
        <div className={cn("flex w-11 shrink-0 self-stretch items-center justify-center rounded-lg", iconBg)}>
          <Icon className={cn("size-5", iconColor)} />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-muted-foreground">{kpi.label}</p>
        <p className="mt-0.5 text-2xl font-semibold tabular-nums tracking-tight">{kpi.value}</p>
        <div className="mt-1 flex items-center gap-1.5">
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-xs font-medium",
              trendPositive
                ? "text-emerald-500 dark:text-emerald-400"
                : "text-red-500 dark:text-red-400"
            )}
          >
            <TrendIcon className="size-3.5" />
            {isPositiveChange ? "+" : ""}
            {kpi.changePercent}%
          </span>
          <span className="text-xs text-muted-foreground">{description}</span>
        </div>
      </div>
    </div>
  )
}
