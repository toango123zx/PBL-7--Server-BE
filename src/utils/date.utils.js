export function formatDBDate(date) {
    return new Date(date.split('/').reverse().join('-'))
}

export function getNextDate(date) {
    const nextDate = new Date(date)
    nextDate.setDate(nextDate.getDate() + 1)
    return nextDate
}
