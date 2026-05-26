import { PageHeader } from "@/components/common/page-header"
import { getAnalyticsData } from "@/lib/mock-data"
import { KpiGrid } from "@/components/common/kpi-grid"
import { DeviceBreakdownChart } from "./_components/device-breakdown-chart"
import { PageViewsChart } from "./_components/page-views-chart"
import { ScatterChartWidget } from "./_components/scatter-chart"
import { SessionDurationChart } from "./_components/session-duration-chart"
import { TopPagesBarChart } from "./_components/top-pages-bar-chart"
import { TopPagesTable } from "./_components/top-pages-table"
import { TrafficHeatmap } from "./_components/traffic-heatmap"

export default function AnalyticsPage() {
  const data = getAnalyticsData()

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <PageHeader
        title="Analytics"
        description="Traffic, engagement, and page performance"
      />
      <KpiGrid kpis={data.kpis} iconSet="analytics" />
      <PageViewsChart data={data.charts.pageViewsVsVisitors} />
      <div className="grid gap-4 md:grid-cols-2">
        <TrafficHeatmap data={data.charts.trafficHeatmap} />
        <TopPagesBarChart data={data.charts.topPagesByVisits} />
        <SessionDurationChart data={data.charts.sessionDurationTrend} />
        <DeviceBreakdownChart data={data.charts.deviceBreakdown} />
        <ScatterChartWidget data={data.charts.scatterData} />
      </div>
      <TopPagesTable pages={data.topPages} />
    </div>
  )
}
