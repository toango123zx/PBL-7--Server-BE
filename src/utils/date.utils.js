export const formatDBDate = (date) => {
    return new Date(date.split('/').reverse().join('-'))
}
