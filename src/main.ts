const FizzBuzz = (n, x, y) => {
    let result = []
    if (n % x === 0) {
        result.push('F')
    }
    if (n % y === 0) {
        result.push('B')
    }
    if (result.length > 0) {
        return result.join('')
    }
    return n
}

for(let i = 1, l = 100; i < l; i++) {
    console.log(FizzBuzz(i, 3, 9))
}
