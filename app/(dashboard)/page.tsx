import { PageHeader } from "@/components/common/page-header"
import { getHomeData } from "@/lib/mock-data"
import { ActivityTable } from "./_components/activity-table"
import { DauComparisonChart } from "./_components/dau-comparison-chart"
import { KpiGrid } from "@/components/common/kpi-grid"
import { IconCurrencyDollar, IconUsers, IconUserPlus, IconUserMinus } from "@tabler/icons-react"
import { RevenueChart } from "./_components/revenue-chart"
import { SignupsChart } from "./_components/signups-chart"
import { TeamSpotlight } from "./_components/team-spotlight"
import { TrafficSourcesChart } from "./_components/traffic-sources-chart"
import { UptimeGauge } from "./_components/uptime-gauge"

export default function HomePage() {
  const data = getHomeData()

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <PageHeader
        title="Dashboard"
        description="Overview of revenue, users, and platform activity"
      />
      <KpiGrid kpis={data.kpis} icons={[IconCurrencyDollar, IconUsers, IconUserPlus, IconUserMinus]} />
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={data.charts.revenueOver12Months} />
        </div>
        <TeamSpotlight {...data.teamSpotlight} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <DauComparisonChart data={data.charts.dauThisWeek} />
        <SignupsChart data={data.charts.signups30Days} />
        <TrafficSourcesChart data={data.charts.trafficSources} />
        <UptimeGauge value={data.charts.serverUptime} />
      </div>
      <ActivityTable items={data.recentActivity} />
    </div>
  )
}
