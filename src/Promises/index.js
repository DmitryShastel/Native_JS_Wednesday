import axios from "/axios";

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
/*


const resolvedPromise1 = Promise.resolve(100)
console.log(resolvedPromise1)

const resolvedPromise2 = Promise.reject(100)
console.log(resolvedPromise2)

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'D'}, {name: 'N'}])
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'Inccorect Login password'})
        } else {
            return Promise.resolve({name: 'Dima', id: 12, avatarUrl: ''})
        }
    }
}

const pr = usersAPI.getAllUsers()
pr.then(users => console.log(users))

usersAPI.login('123', '44142')
.then( () => {
    // makeRedirect
})
.catch( error => {
    // show error
})*/

/*
let promise = new Promise(function(resolve,reject){
    throw new Error('error');
})
    .finally(() => alert("done"))
    .catch(err => alert(err))

console.log(promise)*/



/*axios.get('https://gogle.com')
    .then(res => res.data)
    .then(data => console.log(data))*/
/*

axios.get('https://gogle.com')
    .then(res => res.data)
    .then(data => console.log(data))

const makeGoogleRequest = () => {
    const promise = axios.get('https://gogle.com')
    const promise2 = promise.then(res => res.data)
    return promise2;

    return axios.get('https://gogle.com')
        .then(res => res.data)
        .then(data => data.vacancies)
}

makeGoogleRequest().then(vacancies => console.log(vacancies))*/

let findUserInDB

const lastPromise = findUserInDB(1)
    .then(user => {
        console.log(user)
        findUserInDB(user.friend)
            .then(user => {
                console.log(user)
                findUserInDB(user.friend)
                    .then(user => {
                        console.log(user)
                    })
            })
    })


