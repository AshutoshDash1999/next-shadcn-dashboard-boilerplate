import { PageHeader } from "@/components/common/page-header"
import { getTicketsData } from "@/lib/mock-data"
import { AgentCardsRow } from "./_components/agent-cards-row"
import { CsatTrendChart } from "./_components/csat-trend-chart"
import { ResolutionByPriorityChart } from "./_components/resolution-by-priority-chart"
import { StatusBreakdownChart } from "./_components/status-breakdown-chart"
import { TicketVolumeChart } from "./_components/ticket-volume-chart"
import { TicketsByAgentChart } from "./_components/tickets-by-agent-chart"
import { TicketsByCategoryChart } from "./_components/tickets-by-category-chart"
import { KpiGrid } from "@/components/common/kpi-grid"
import { TicketsTable } from "./_components/tickets-table"

export default function TicketsPage() {
  const data = getTicketsData()

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <PageHeader
        title="Tickets"
        description="Support volume, agents, and customer satisfaction"
      />
      <KpiGrid kpis={data.kpis} iconSet="tickets" />
      <AgentCardsRow agents={data.agents} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <TicketsByCategoryChart data={data.charts.byCategory} />
        <TicketVolumeChart data={data.charts.volume30Days} />
        <StatusBreakdownChart data={data.charts.statusBreakdown} />
        <ResolutionByPriorityChart
          data={data.charts.resolutionByPriority}
        />
        <TicketsByAgentChart data={data.charts.ticketsByAgent} />
        <CsatTrendChart data={data.charts.csatTrend} />
      </div>
      <TicketsTable tickets={data.ticketList} />
    </div>
  )
}
