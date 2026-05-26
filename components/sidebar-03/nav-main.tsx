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
import Link from "next/link";
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

const navButtonClass = cn(
  "flex w-full items-center rounded-lg px-2 py-2 text-sm font-medium transition-colors",
  "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
);

export default function DashboardNavigation({ routes }: { routes: Route[] }) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Accordion.Root multiple={false} className="flex flex-col gap-0.5 w-full">
      {routes.map((route) => {
        const hasSubRoutes = !!route.subs?.length;

        if (!hasSubRoutes) {
          const linkEl = (
            <Link
              key={route.id}
              href={route.link}
              prefetch={true}
              className={cn(navButtonClass, isCollapsed && "justify-center")}
            >
              {route.icon}
              {!isCollapsed && <span className="ml-2">{route.title}</span>}
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

        return (
          <Accordion.Item key={route.id} value={route.id}>
            <Accordion.Header render={<div />}>
              {isCollapsed ? (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Accordion.Trigger
                        className={cn(
                          navButtonClass,
                          "justify-center",
                          "aria-expanded:bg-sidebar-accent aria-expanded:text-sidebar-accent-foreground"
                        )}
                      />
                    }
                  >
                    {route.icon}
                  </TooltipTrigger>
                  <TooltipContent side="right">{route.title}</TooltipContent>
                </Tooltip>
              ) : (
                <Accordion.Trigger
                  className={cn(
                    navButtonClass,
                    "group aria-expanded:bg-sidebar-accent aria-expanded:text-sidebar-accent-foreground"
                  )}
                >
                  {route.icon}
                  <span className="ml-2 flex-1 text-left">{route.title}</span>
                  <IconChevronDown className="size-4 ml-auto transition-transform group-aria-expanded:rotate-180" />
                </Accordion.Trigger>
              )}
            </Accordion.Header>

            {!isCollapsed && (
              <Accordion.Panel className="overflow-hidden h-(--accordion-panel-height) transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                <SidebarMenuSub className="my-1 ml-3.5">
                  {route.subs?.map((subRoute) => (
                    <SidebarMenuSubItem
                      key={`${route.id}-${subRoute.title}`}
                      className="h-auto"
                    >
                      <SidebarMenuSubButton
                        render={
                          <Link
                            href={subRoute.link}
                            prefetch={true}
                            className="flex items-center rounded-md px-4 py-1.5 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          />
                        }
                      >
                        {subRoute.title}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </Accordion.Panel>
            )}
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
