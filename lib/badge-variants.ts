import type { VariantProps } from "class-variance-authority"
import type { badgeVariants } from "@/components/ui/badge"

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>

export function getCustomerStatusVariant(
  status: string
): BadgeVariant {
  switch (status) {
    case "active":
      return "default"
    case "at-risk":
      return "outline"
    case "churned":
      return "destructive"
    default:
      return "secondary"
  }
}

export function getActivityStatusVariant(
  status: string
): BadgeVariant {
  switch (status) {
    case "success":
      return "default"
    case "pending":
      return "outline"
    case "error":
      return "destructive"
    default:
      return "secondary"
  }
}

export function getPaymentStatusVariant(
  status: string
): BadgeVariant {
  switch (status) {
    case "paid":
      return "default"
    case "pending":
      return "outline"
    case "overdue":
      return "destructive"
    default:
      return "secondary"
  }
}

export function getTicketPriorityVariant(
  priority: string
): BadgeVariant {
  switch (priority) {
    case "critical":
      return "destructive"
    case "high":
      return "default"
    case "medium":
      return "outline"
    case "low":
      return "secondary"
    default:
      return "secondary"
  }
}

export function getTicketStatusVariant(status: string): BadgeVariant {
  switch (status) {
    case "open":
      return "outline"
    case "in-progress":
      return "default"
    case "resolved":
      return "secondary"
    case "closed":
      return "secondary"
    default:
      return "secondary"
  }
}

export function formatStatusLabel(status: string): string {
  return status
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}
