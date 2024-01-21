export function getDate(addDays = 1) {
    const offset = 3; //UTC+3
    const today = new Date(new Date().getTime() + offset * 3600 * 1000);
    today.setDate(today.getDate() + addDays);
    return today.toISOString().split('T')[0];
}
