"use client"

import { StatCard } from "@/components/common/stat-card"
import type { Kpi } from "@/lib/mock-data/types"
import type React from "react"

type TablerIcon = React.ComponentType<{ className?: string; size?: number }>

export function KpiGrid({ kpis, icons }: { kpis: Kpi[]; icons: TablerIcon[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi, i) => (
        <StatCard key={kpi.label} kpi={kpi} icon={icons[i]} colorIndex={i} />
      ))}
    </div>
  )
}
