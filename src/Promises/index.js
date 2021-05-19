//import axios from "/axios";

/*const axios = {}
const findUserInDB = (id) => {}

const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})

const promise2 = findUserInDB(100)
promise2
    .then((user) => {
        console.log(user)
    })*/


//const otherPromise = Promise.all([promise1, promise2])
/*
otherPromise
    .then( (results) => {
        const dataFromGogle = results[0]
        const userFromDB = results[1]
        console.log(dataFromGogle.data.vacancies + '; ' +  userFromDB.name)
    })
    .catch( () => {
        console.log('initialization failed. Try later')
    })
*/

/*const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise2
    .then((results) => {
        console.log(results)

        const dataFromGogle =
            results[0].status === 'fulfilled'
                ? results[0].value
                : {data: {vacansies: null}}

        const userFromDB = results[1].status === 'fulfilled'
            ? results[1].value
            : {name: results[1].reson}
        console.log(dataFromGogle.data.vacansies + '; ' + userFromDB.name)
    })*/


const resolvedPromise = Promise.resolve(100)
console.log(resolvedPromise)