// Дан массив с числами. Найдите сумму этих чисел.

let a = [11, 3, 4, 88]

let b = a.reduce((acc, item) => {
    return acc + item

},10)

console.log(b)