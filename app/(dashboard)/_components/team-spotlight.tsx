import { SpotlightCard } from "@/components/common/spotlight-card"
import type { TeamMember } from "@/lib/mock-data/types"

type TeamSpotlightProps = TeamMember & { subtitle: string }

export function TeamSpotlight({
  name,
  role,
  avatar,
  tasksCompleted,
  subtitle,
}: TeamSpotlightProps) {
  return (
    <SpotlightCard
      title="Team spotlight"
      name={name}
      subtitle={`${role} · ${tasksCompleted} ${subtitle}`}
      avatar={avatar}
      badge={role}
      meta={[
        { label: "Tasks this week", value: String(tasksCompleted) },
        { label: "Role", value: role },
      ]}
    />
  )
}
