export function validateInput(text) {
    if (text.length < 40 || text.split(' ').length < 20)
        return [false, 'Văn bản quá ngắn']

    const unique_word = new Set(text.split(' '))

    if (unique_word < 10) return [false, 'Văn bản không hợp lệ']

    return [true, 'ok']
}
