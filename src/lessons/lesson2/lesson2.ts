console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a: number) {
    function s(b: number) {
        return a + b
    }
}
console.log(sum(3),(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};


//Task 07
//Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
//Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
//function makeCounter() {
//    let count = 0;
//
//    return function() {
//        return count++;
//    };
//}
//
//let counter = makeCounter();
//let counter2 = makeCounter();
//
//alert( counter() ); // 0
//alert( counter() ); // 1
//
//alert( counter2() ); // 0
//alert( counter2() ); // 1


//Task 08
//Здесь объект счётчика создан с помощью функции-конструктора.
//Будет ли он работать? Что покажет?

//function Counter() {
//    let count = 0;
//
//   this.up = function() {
//       return ++count;
//    };
//   this.down = function() {
//        return --count;
//   };
//}
//
//let counter = new Counter();

//alert( counter.up() ); // 1
//alert( counter.up() ); // 2
//alert( counter.down() ); // 1


//Task 09
//Посмотрите на код. Какой будет результат у вызова на последней строке?

//let phrase = "Hello";
//
//if (true) {
//    let user = "John";
//
//    function sayHi() {
//        alert(`${phrase}, ${user}`);
//    }
//}
//
//sayHi();// error, Функция sayHi объявлена внутри if, так что она живёт только внутри этого блока. Снаружи нет sayHi.


//Task 10
//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b

//function sum(a) {
//
//   return function (b) {
//        return a + b
//   }
//}
//
//console.log(sum(1)(2));
//console.log(sum(5)(-1));

//sum(1)(2) = 3
//sum(5)(-1) = 4


//Task 11
//У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f.
// Если она возвращает true, то элемент добавится в возвращаемый массив.
//Сделайте набор «готовых к употреблению» фильтров:
//inBetween(a, b) – между a и b (включительно).
//inArray([...]) – находится в данном массиве.
//Они должны использоваться таким образом:
//arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
//arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

//function inBetween(a, b) {
//    return function(x) {
//        return x >= a && x <= b;
//    }
//}
//let arr = [1, 2, 3, 4, 5, 6, 7];
//alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

//function inArray(arr) {
//    return function(x) {
//        return arr.includes(x);
//   };
//}
//let arr = [1, 2, 3, 4, 5, 6, 7];
//alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


//Task 12
//У нас есть массив объектов, который нужно отсортировать:
//let users = [
//    { name: "John", age: 20, surname: "Johnson" },
//    { name: "Pete", age: 18, surname: "Peterson" },
//    { name: "Ann", age: 19, surname: "Hathaway" }
//];

//function userSortName (arr){
//    return users.sort((a, b) => a.name > b.name ? 1 : -1)
//}

//function userSortAge (arr){
//    return users.sort((a, b) => a.age > b.age ? 1 : -1)
//}

//Task 13
//Следующий код создаёт массив из стрелков (shooters).
//Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

//function makeArmy() {
//    let shooters = [];

//    let i = 0;
//    while (i < 10) {
//        let shooter = function() { // функция shooter
//            alert( i ); // должна выводить порядковый номер
//        };
//        shooters.push(shooter);
//        i++;
//    }
//
//    return shooters;
//}

//let army = makeArmy();

//army[0](); // у 0-го стрелка будет номер 10
//army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...//









