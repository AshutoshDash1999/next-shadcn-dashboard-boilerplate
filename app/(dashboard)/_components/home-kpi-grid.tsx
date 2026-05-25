import { StatCard } from "@/components/common/stat-card"
import type { Kpi } from "@/lib/mock-data/types"

export function HomeKpiGrid({ kpis }: { kpis: Kpi[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => (
        <StatCard key={kpi.label} kpi={kpi} />
      ))}
    </div>
  )
}
