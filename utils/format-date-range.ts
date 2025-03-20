export const formatDateRange= (startDate: string, endDate: string): string => {
    const options = { year: 'numeric', month: 'long' } as const;

    const start = new Date(startDate.split('/').reverse().join('-'));
    const end = new Date(endDate.split('/').reverse().join('-'));

    const startFormatted = start.toLocaleDateString('en-US', options);
    const endFormatted = end.toLocaleDateString('en-US', options);

    return `From ${startFormatted} to ${endFormatted}`;
}