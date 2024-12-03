export const formatDigitsGrouping = (number: number | string): string => {
    const fullNumberString: string = number + ''

    let decimalIndex = fullNumberString.indexOf(',')
    if (decimalIndex === -1) {
        decimalIndex = fullNumberString.indexOf('.') 
    }
    if (decimalIndex === -1) {
        decimalIndex = fullNumberString.length
    }

    const decimalPart = fullNumberString.substring(decimalIndex, fullNumberString.length)
    const wholePart = fullNumberString.substring(0, decimalIndex)

    const groupedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return groupedWholePart + decimalPart
}

export const formatMaxFloat = (number: number | string): string => {
    let value = number + ''
    let minusSign = ''
    if (value?.charAt(0) === '-') {
        minusSign = '-'
    }

    const maximumFloatLength = 2
    value = value.replace(/[^\d,. ]/g, "")
    let until = value.length
    if (value.indexOf(',') !== -1) {
        until = value.indexOf(',') + maximumFloatLength + 1
    } else if (value.indexOf('.') !== -1) {
        until = value.indexOf('.') + maximumFloatLength + 1
    }
    value = value.substring(0, until)

    if (value.endsWith('.00')) {
        value = value.substring(0, value.indexOf('.'))
    }

    return minusSign + value
}

export const rounding = (number: number | string): string => {
    let value = number + ''
    let minusSign = ''
    if (value && value?.charAt(0) === '-') {
        minusSign = '-'
    }
    value = value.replace(/[^\d,. ]/g, "")
    let thirdIndex
    if (value.indexOf(',') !== -1) {
        thirdIndex = value.indexOf(',') + 3
    } else if (value.indexOf('.') !== -1) {
        thirdIndex = value.indexOf('.') + 3
    }
    if (thirdIndex) {
        const thirdNumber = parseInt(value[thirdIndex])
        if (thirdNumber >= 5 && thirdNumber <= 9) {
            value = (parseFloat(value) + 0.01).toString()
        }
    }

    return minusSign + value
}

export const formatNumberCombined = (number: number | string): string => {
    return formatDigitsGrouping(formatMaxFloat(rounding(number)))
}

export const padLeadingZeros = (number: number | string, size: number): string => {
    let s = String(number)
    while (s.length < size) {
        s = '0' + s;
    }
    return s
}
