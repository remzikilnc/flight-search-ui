export const getDurationInMinutes = (duration) => {
    const parts = duration.match(/(\d+)h (\d+)m/);
    if (parts) {
        const hours = parseInt(parts[1], 10);
        const minutes = parseInt(parts[2], 10);
        return hours * 60 + minutes;
    }
    return 0;
};