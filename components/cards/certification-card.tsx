import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface CertificationCardProps {
    title: string
    issuer: string
    date: string
    imageUrl: string
    credentialUrl: string
}

export function CertificationCard({ title, issuer, date, imageUrl, credentialUrl }: CertificationCardProps) {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="relative h-16 w-16 shrink-0">
                    <Image src={imageUrl || "/placeholder.svg"} alt={`${issuer} logo`} fill className="object-contain" />
                </div>
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{issuer}</p>
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <p className="text-sm">Issued: {date}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Link
                    href={credentialUrl}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                    View Credential
                </Link>
            </CardFooter>
        </Card>
    )
}

