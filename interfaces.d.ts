interface ReactNodeChildrenProp {
    children: React.ReactNode;
}

interface SectionLink {
    name: string;
    href: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    date: string;
    content: string;
    github?: string;
    pdf?: string;
}