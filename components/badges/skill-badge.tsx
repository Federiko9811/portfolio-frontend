import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
    name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
    return (
        <Badge variant="accent" className="px-3 py-1 text-sm">
            {name}
        </Badge>
    )
}

