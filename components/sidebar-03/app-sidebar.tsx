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
import { motion } from "framer-motion"
import {
  DollarSign,
  Home,
  Ticket,
  TrendingUp,
  Users,
} from "lucide-react"
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
    icon: <Home className="size-4" />,
    link: "/",
  },
  {
    id: "customers",
    title: "Customers",
    icon: <Users className="size-4" />,
    link: "/customers",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <TrendingUp className="size-4" />,
    link: "/analytics",
  },
  {
    id: "finance",
    title: "Finance",
    icon: <DollarSign className="size-4" />,
    link: "/finance",
  },
  {
    id: "tickets",
    title: "Tickets",
    icon: <Ticket className="size-4" />,
    link: "/tickets",
  },
]

export function DashboardSidebar() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar
      variant="floating"
      collapsible="icon"
      style={
        {
          "--sidebar": "var(--primary)",
          "--sidebar-foreground": "var(--primary-foreground)",
          "--sidebar-accent": "oklch(from var(--primary) calc(l + 0.08) c h)",
          "--sidebar-accent-foreground": "var(--primary-foreground)",
          "--sidebar-border": "oklch(from var(--primary) calc(l - 0.04) c h)",
        } as React.CSSProperties
      }
    >
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
