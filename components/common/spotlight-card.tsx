import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type SpotlightCardProps = {
  title: string
  name: string
  subtitle: string
  avatar: string
  badge?: string
  meta?: { label: string; value: string }[]
}

export function SpotlightCard({
  title,
  name,
  subtitle,
  avatar,
  badge,
  meta = [],
}: SpotlightCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>Featured this period</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="size-14">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="font-medium">{name}</span>
            <span className="text-sm text-muted-foreground">{subtitle}</span>
            {badge ? <Badge variant="secondary">{badge}</Badge> : null}
          </div>
        </div>
        {meta.length > 0 ? (
          <dl className="grid grid-cols-2 gap-3 text-sm">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-muted-foreground">{item.label}</dt>
                <dd className="font-medium tabular-nums">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </CardContent>
    </Card>
  )
}
