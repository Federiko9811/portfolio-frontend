interface ReactNodeChildrenProp {
    children: React.ReactNode;
}

interface SectionLink {
    name: string;
    href: string;
}

interface Author {
    name: string;
    github: string;
    linkedin: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    start_date: string;
    end_date: string;
    content: string;
    github?: string;
    pdf?: string;
    authors?: Author[];
}