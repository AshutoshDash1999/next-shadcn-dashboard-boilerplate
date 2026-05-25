import { PageHeader } from "@/components/common/page-header"
import { getCustomersData } from "@/lib/mock-data"
import { CustomersByRegionChart } from "./_components/customers-by-region-chart"
import { CustomersKpiGrid } from "./_components/customers-kpi-grid"
import { CustomersTable } from "./_components/customers-table"
import { GrowthChart } from "./_components/growth-chart"
import { NewVsReturningChart } from "./_components/new-vs-returning-chart"
import { PlanDistributionChart } from "./_components/plan-distribution-chart"
import { RetentionFunnelChart } from "./_components/retention-funnel-chart"
import { TopCustomerCard } from "./_components/top-customer-card"

export default function CustomersPage() {
  const data = getCustomersData()

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <PageHeader
        title="Customers"
        description="Customer growth, plans, and retention metrics"
      />
      <CustomersKpiGrid kpis={data.kpis} />
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GrowthChart data={data.charts.growth12Months} />
        </div>
        <TopCustomerCard customer={data.topCustomer} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <CustomersByRegionChart data={data.charts.byCountry} />
        <PlanDistributionChart data={data.charts.planDistribution} />
        <NewVsReturningChart data={data.charts.newVsReturning} />
        <RetentionFunnelChart data={data.charts.funnel} />
      </div>
      <CustomersTable customers={data.customerList} />
    </div>
  )
}
