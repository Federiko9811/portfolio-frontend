// lib/utils/slug.ts
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .trim()
        // Rimuovi caratteri speciali e sostituisci con spazi
        .replace(/[^\w\s-]/g, '')
        // Sostituisci spazi multipli con uno singolo
        .replace(/\s+/g, ' ')
        // Sostituisci spazi con trattini
        .replace(/\s/g, '-')
        // Rimuovi trattini multipli
        .replace(/-+/g, '-')
        // Rimuovi trattini all'inizio e alla fine
        .replace(/^-|-$/g, '');
}
