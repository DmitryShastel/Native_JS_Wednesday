// Дан массив с числами. Найдите сумму этих чисел.

/*
let a = [11, 3, 4, 88]

let b = a.reduce((acc, item) => {
    return acc + item

},0)

console.log(b)*/


// Дан массив с числами. Найдите сумму первых N элементов до первого нуля.
// Пример: [1, 2, 3,  0, 4, 5,6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0

/*let arr = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;
let result = arr.reduce(function(sum, elem) {
    if (elem == 0) {
        answer = sum;
    } else {
        return sum + elem;
    }
});
if(answer == undefined){answer = result};
alert(answer);*/

//Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0


let arr = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;
let result = arr.reduceRight(function(sum, elem) {
    if (elem == 0) {
        answer = sum;
    } else {
        return sum + elem;
    }
});
if(answer == undefined){answer = result};
alert(answer);





