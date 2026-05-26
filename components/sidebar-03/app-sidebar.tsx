"use client"

import { Logo } from "@/components/sidebar-03/logo"
import DashboardNavigation from "@/components/sidebar-03/nav-main"
import { NotificationsPopover } from "@/components/sidebar-03/nav-notifications"
import { NavUser } from "@/components/sidebar-03/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import {
  IconCurrencyDollar,
  IconHome,
  IconTicket,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"
import type { Route } from "./nav-main"

const sampleNotifications = [
  {
    id: "1",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=OM",
    fallback: "OM",
    text: "New order received.",
    time: "10m ago",
  },
  {
    id: "2",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JL",
    fallback: "JL",
    text: "Server upgrade completed.",
    time: "1h ago",
  },
  {
    id: "3",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=HH",
    fallback: "HH",
    text: "New user signed up.",
    time: "2h ago",
  },
]

const dashboardRoutes: Route[] = [
  {
    id: "home",
    title: "Home",
    icon: <IconHome className="size-4" />,
    link: "/",
  },
  {
    id: "customers",
    title: "Customers",
    icon: <IconUsers className="size-4" />,
    link: "/customers",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <IconTrendingUp className="size-4" />,
    link: "/analytics",
  },
  {
    id: "finance",
    title: "Finance",
    icon: <IconCurrencyDollar className="size-4" />,
    link: "/finance",
  },
  {
    id: "tickets",
    title: "Tickets",
    icon: <IconTicket className="size-4" />,
    link: "/tickets",
  },
]

export function DashboardSidebar() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader
        className={cn(
          "flex md:pt-3.5",
          isCollapsed
            ? "flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start"
            : "flex-row items-center justify-between"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          {!isCollapsed && (
            <span className="font-semibold text-sidebar-foreground">Acme</span>
          )}
        </Link>

        <motion.div
          key={isCollapsed ? "header-collapsed" : "header-expanded"}
          className={cn(
            "flex items-center gap-2",
            isCollapsed ? "flex-row md:flex-col-reverse" : "flex-row"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NotificationsPopover notifications={sampleNotifications} />
          <SidebarTrigger />
        </motion.div>
      </SidebarHeader>
      <SidebarContent className="gap-4 px-2 py-4">
        <DashboardNavigation routes={dashboardRoutes} />
      </SidebarContent>
      <SidebarFooter className="px-2">
        <NavUser name="Ashutosh Dash" email="dashashutosh1999@gmail.com" />
      </SidebarFooter>
    </Sidebar>
  )
}
