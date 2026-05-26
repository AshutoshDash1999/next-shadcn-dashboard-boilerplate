"use client";

import { Accordion } from "@base-ui/react/accordion";
import {
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuItem as SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import type React from "react";

export type Route = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  link: string;
  subs?: {
    title: string;
    link: string;
    icon?: React.ReactNode;
  }[];
};

const baseItemClass = cn(
  "relative flex w-full items-center rounded-lg px-2 py-2 text-sm font-medium",
  "transition-colors duration-150"
);

const spring = { type: "spring", stiffness: 380, damping: 30 } as const;

export default function DashboardNavigation({ routes }: { routes: Route[] }) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState<{ top: number; height: number } | null>(null);

  const isActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link);

  const isSubActive = (link: string) => pathname === link;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeRoute = routes.find((r) => isActive(r.link));
    if (!activeRoute) { setPill(null); return; }

    const el = container.querySelector<HTMLElement>(`[data-route-id="${activeRoute.id}"]`);
    if (!el) { setPill(null); return; }

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setPill({ top: elRect.top - containerRect.top, height: el.offsetHeight });
  }, [pathname, state]);

  return (
    <div ref={containerRef} className="relative w-full">
      {pill && (
        <motion.div
          className="absolute inset-x-0 rounded-lg bg-primary pointer-events-none"
          initial={false}
          animate={{ top: pill.top, height: pill.height }}
          transition={spring}
        />
      )}

      <Accordion.Root multiple={false} className="flex flex-col gap-0.5 w-full">
        {routes.map((route) => {
          const hasSubRoutes = !!route.subs?.length;
          const active = isActive(route.link);

          if (!hasSubRoutes) {
            const linkEl = (
              <Link
                key={route.id}
                href={route.link}
                prefetch={true}
                data-route-id={route.id}
                className={cn(
                  baseItemClass,
                  isCollapsed && "justify-center",
                  active
                    ? "text-white font-semibold"
                    : "text-sidebar-foreground/60 hover:text-sidebar-foreground"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {route.icon}
                  {!isCollapsed && route.title}
                </span>
              </Link>
            );

            if (isCollapsed) {
              return (
                <Tooltip key={route.id}>
                  <TooltipTrigger render={linkEl} />
                  <TooltipContent side="right">{route.title}</TooltipContent>
                </Tooltip>
              );
            }

            return linkEl;
          }

          const hasActiveChild = route.subs?.some((s) => isSubActive(s.link));

          return (
            <Accordion.Item key={route.id} value={route.id}>
              <Accordion.Header render={<div />}>
                {isCollapsed ? (
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Accordion.Trigger
                          data-route-id={route.id}
                          className={cn(
                            baseItemClass,
                            "justify-center",
                            hasActiveChild
                              ? "text-white font-semibold"
                              : "text-sidebar-foreground/60 hover:text-sidebar-foreground aria-expanded:text-sidebar-foreground"
                          )}
                        >
                          <span className="relative z-10">{route.icon}</span>
                        </Accordion.Trigger>
                      }
                    />
                    <TooltipContent side="right">{route.title}</TooltipContent>
                  </Tooltip>
                ) : (
                  <Accordion.Trigger
                    data-route-id={route.id}
                    className={cn(
                      baseItemClass,
                      "group",
                      hasActiveChild
                        ? "text-white font-semibold"
                        : "text-sidebar-foreground/60 hover:text-sidebar-foreground aria-expanded:text-sidebar-foreground"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-2 w-full">
                      {route.icon}
                      <span className="flex-1 text-left">{route.title}</span>
                      <IconChevronDown className="size-4 transition-transform duration-200 group-aria-expanded:rotate-180" />
                    </span>
                  </Accordion.Trigger>
                )}
              </Accordion.Header>

              {!isCollapsed && (
                <Accordion.Panel className="overflow-hidden h-(--accordion-panel-height) transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                  <SidebarMenuSub className="my-1 ml-3.5">
                    {route.subs?.map((subRoute) => {
                      const subActive = isSubActive(subRoute.link);
                      return (
                        <SidebarMenuSubItem
                          key={`${route.id}-${subRoute.title}`}
                          className="h-auto"
                        >
                          <SidebarMenuSubButton
                            render={
                              <Link
                                href={subRoute.link}
                                prefetch={true}
                                className={cn(
                                  "relative flex items-center rounded-md px-4 py-1.5 text-sm font-medium transition-colors duration-150",
                                  subActive
                                    ? "text-white font-semibold"
                                    : "text-sidebar-foreground/60 hover:text-sidebar-foreground"
                                )}
                              />
                            }
                          >
                            <span className="relative z-10">{subRoute.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </Accordion.Panel>
              )}
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
