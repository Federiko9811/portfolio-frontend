import authors from "@/data/authors.json";

export interface Author {
    id: string;
    name: string;
    linkedin: string;
    github: string;
}

export function getAuthorsByIds(authorIds: string[]): Author[] {
    return authorIds
        .map(id => authors.find(author => author.id === id))
        .filter((author): author is Author => author !== undefined);
}
