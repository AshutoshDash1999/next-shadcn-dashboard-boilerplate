"use client"

import { StatCard } from "@/components/common/stat-card"
import type { Kpi } from "@/lib/mock-data/types"
import {
  IconChartBar,
  IconCircleCheck,
  IconClock,
  IconCreditCard,
  IconCurrencyDollar,
  IconEye,
  IconFileText,
  IconInbox,
  IconPointer,
  IconStar,
  IconTrendingUp,
  IconUserCheck,
  IconUserMinus,
  IconUserPlus,
  IconUserX,
  IconUsers,
  IconWallet,
} from "@tabler/icons-react"
import type React from "react"

type TablerIcon = React.ComponentType<{ className?: string; size?: number }>

const ICON_SETS = {
  home: [IconCurrencyDollar, IconUsers, IconUserPlus, IconUserMinus],
  analytics: [IconEye, IconPointer, IconChartBar, IconClock],
  finance: [IconCurrencyDollar, IconCreditCard, IconTrendingUp, IconFileText],
  tickets: [IconInbox, IconCircleCheck, IconClock, IconStar],
  customers: [IconUsers, IconUserCheck, IconUserX, IconWallet],
} satisfies Record<string, TablerIcon[]>

export type KpiGridIconSet = keyof typeof ICON_SETS

export function KpiGrid({ kpis, iconSet }: { kpis: Kpi[]; iconSet: KpiGridIconSet }) {
  const icons = ICON_SETS[iconSet]
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi, i) => (
        <StatCard key={kpi.label} kpi={kpi} icon={icons[i]} colorIndex={i} />
      ))}
    </div>
  )
}
