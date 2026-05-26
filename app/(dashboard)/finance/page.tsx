import { PageHeader } from "@/components/common/page-header"
import { getFinanceData } from "@/lib/mock-data"
import { CumulativeRevenueChart } from "./_components/cumulative-revenue-chart"
import { KpiGrid } from "@/components/common/kpi-grid"
import { MrrChart } from "./_components/mrr-chart"
import { PlWaterfallChart } from "./_components/pl-waterfall-chart"
import { RevenueBreakdownChart } from "./_components/revenue-breakdown-chart"
import { RevenueExpensesChart } from "./_components/revenue-expenses-chart"
import { TopCustomersRevenueChart } from "./_components/top-customers-revenue-chart"
import { TransactionsTable } from "./_components/transactions-table"

export default function FinancePage() {
  const data = getFinanceData()

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <PageHeader
        title="Finance"
        description="Revenue, expenses, and transaction overview"
      />
      <KpiGrid kpis={data.kpis} iconSet="finance" />
      <RevenueExpensesChart data={data.charts.revenueVsExpenses} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <RevenueBreakdownChart data={data.charts.revenueByPlan} />
        <CumulativeRevenueChart data={data.charts.cumulativeRevenueYtd} />
        <PlWaterfallChart data={data.charts.plWaterfall} />
        <TopCustomersRevenueChart data={data.charts.topCustomersRevenue} />
        <MrrChart data={data.charts.mrrGrowth} />
      </div>
      <TransactionsTable transactions={data.transactions} />
    </div>
  )
}
