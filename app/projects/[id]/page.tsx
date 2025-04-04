import ClientPage from "@/app/projects/[id]/client-page";
import project from "@/data/projects.json";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateStaticParams() {
    return project.map((p) => ({
        id: p.id.toString(),
    }));
}

export default async function ProjectPage({params}: Props) {
    const {id} = await params;
    return <ClientPage projectId={id}/>;
}
