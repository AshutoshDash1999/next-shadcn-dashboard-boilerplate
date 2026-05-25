import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Agent } from "@/lib/mock-data/types"

export function AgentCardsRow({ agents }: { agents: Agent[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent) => (
        <Card key={agent.id} size="sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage src={agent.avatar} alt={agent.name} />
                <AvatarFallback>
                  {agent.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm">{agent.name}</CardTitle>
                <CardDescription>{agent.role}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">Open</p>
              <p className="font-medium tabular-nums">{agent.openTickets}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Resolved/wk</p>
              <p className="font-medium tabular-nums">
                {agent.resolvedThisWeek}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Avg response</p>
              <p className="font-medium">{agent.avgResponseTime}</p>
            </div>
            <div>
              <p className="text-muted-foreground">CSAT</p>
              <p className="font-medium tabular-nums">{agent.csat}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
