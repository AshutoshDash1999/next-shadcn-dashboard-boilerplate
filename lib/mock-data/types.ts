export type Trend = "up" | "down"

export type Kpi = {
  label: string
  value: string
  changePercent: number
  trend: Trend
}

export type TimeSeriesPoint = {
  date: string
  value: number
}

export type LabelValue = {
  label: string
  value: number
}

export type TeamMember = {
  id: string
  name: string
  role: string
  avatar: string
  tasksCompleted: number
}

export type CustomerEntity = {
  id: string
  name: string
  email: string
  avatar: string
  plan: string
  country: string
  joinDate: string
  ltv: number
  status: "active" | "churned" | "at-risk"
  company?: string
}

export type CustomerListItem = {
  id: string
  name: string
  email: string
  avatar: string
  plan: string
  ltv: number
  lastActive: string
  status: "active" | "churned" | "at-risk"
  joinDate: string
}

export type ActivityItem = {
  id: string
  user: string
  action: string
  page: string
  timestamp: string
  status: "success" | "pending" | "error"
}

export type Transaction = {
  id: string
  invoiceNumber: string
  customer: string
  amount: number
  plan: string
  date: string
  dueDate: string
  method: string
  status: "paid" | "pending" | "overdue"
}

export type Ticket = {
  id: string
  title: string
  customer: string
  agent: string
  category: string
  priority: "low" | "medium" | "high" | "critical"
  status: "open" | "in-progress" | "resolved" | "closed"
  createdAt: string
  lastUpdated: string
  resolutionTime: string | null
}

export type Agent = {
  id: string
  name: string
  role: string
  avatar: string
  openTickets: number
  resolvedThisWeek: number
  avgResponseTime: string
  csat: number
}

export type TopPage = {
  url: string
  views: number
  uniqueVisitors: number
  bounceRate: number
  avgTimeOnPage: string
  exitRate: number
}

export type MockData = {
  entities: {
    teamMembers: TeamMember[]
    customers: CustomerEntity[]
    agents: Agent[]
  }
  home: {
    kpis: Kpi[]
    teamSpotlight: TeamMember & { subtitle: string }
    charts: {
      revenueOver12Months: TimeSeriesPoint[]
      dauThisWeek: {
        label: string
        thisWeek: number
        lastWeek: number
      }[]
      signups30Days: TimeSeriesPoint[]
      trafficSources: LabelValue[]
      serverUptime: number
    }
    recentActivity: ActivityItem[]
  }
  customers: {
    kpis: Kpi[]
    topCustomer: {
      id: string
      name: string
      company: string
      avatar: string
      spend: number
      plan: string
      joinDate: string
      subtitle: string
    }
    charts: {
      growth12Months: TimeSeriesPoint[]
      byCountry: LabelValue[]
      planDistribution: LabelValue[]
      newVsReturning: { label: string; new: number; returning: number }[]
      funnel: LabelValue[]
    }
    customerList: CustomerListItem[]
  }
  analytics: {
    kpis: Kpi[]
    charts: {
      pageViewsVsVisitors: {
        date: string
        pageViews: number
        uniqueVisitors: number
      }[]
      trafficHeatmap: {
        hours: string[]
        days: string[]
        values: number[][]
      }
      topPagesByVisits: LabelValue[]
      sessionDurationTrend: TimeSeriesPoint[]
      deviceBreakdown: {
        date: string
        desktop: number
        mobile: number
        tablet: number
      }[]
      scatterData: {
        pagesVisited: number
        sessionDuration: number
        user: string
      }[]
    }
    topPages: TopPage[]
  }
  finance: {
    kpis: Kpi[]
    charts: {
      revenueVsExpenses: {
        label: string
        revenue: number
        expenses: number
        netProfit: number
      }[]
      revenueByPlan: LabelValue[]
      cumulativeRevenueYtd: TimeSeriesPoint[]
      plWaterfall: { label: string; value: number; type: string }[]
      topCustomersRevenue: LabelValue[]
      mrrGrowth: TimeSeriesPoint[]
    }
    transactions: Transaction[]
  }
  tickets: {
    kpis: Kpi[]
    agents: Agent[]
    charts: {
      byCategory: LabelValue[]
      volume30Days: TimeSeriesPoint[]
      statusBreakdown: LabelValue[]
      resolutionByPriority: LabelValue[]
      ticketsByAgent: { label: string; open: number; resolved: number }[]
      csatTrend: TimeSeriesPoint[]
    }
    ticketList: Ticket[]
  }
}
