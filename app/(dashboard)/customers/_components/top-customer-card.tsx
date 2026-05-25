import { SpotlightCard } from "@/components/common/spotlight-card"
import type { getCustomersData } from "@/lib/mock-data"

type TopCustomer = ReturnType<typeof getCustomersData>["topCustomer"]

export function TopCustomerCard({ customer }: { customer: TopCustomer }) {
  return (
    <SpotlightCard
      title="Top customer"
      name={customer.name}
      subtitle={customer.subtitle}
      avatar={customer.avatar}
      badge={customer.plan}
      meta={[
        {
          label: "Lifetime spend",
          value: `$${customer.spend.toLocaleString()}`,
        },
        {
          label: "Joined",
          value: new Date(customer.joinDate).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
        },
      ]}
    />
  )
}
