//import axios from "/axios";

/*var axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                }else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomInFromInterval(1, 5) * 1000);
        })
    },

    post(url, data) {
        return this._fake(url, data);
    },
    get(url, data) {
        return this._fake(url, data);
    }
}
var findUserInDB = (id) => {
    const users = [
        { id: 1, name: 'Dimych', friend: 4},
        { id: 2, name: 'Sveta', friend: null},
        { id: 3, name: 'Valera', friend: 2}
    ]

    return new Promise((res, reg) => {
        setTimeout(() => {
            let user = users.find(u => u.id == id);
            if (user == null) {
                reg('user not found')
            } else {
                res(user);
            }
        }, randomInFromInterval(500, 1500))
    })
}
function randomInFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const lastPromise = findUserInDB(1)
    .then(user => {
        console.log(user.name)
        return user.friend;
    })
    .then(friendId => findUserInDB(friendId))
    .catch(error => {
        return {name: 'Friend Bot', friend: 3}
    })
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friendId => findUserInDB(friendId))
    .then(friend2 => console.log(friend2.name))
    .catch(error => alert(error))*/


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
/*let findUserInDB

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
    })*/





//await

/*async function run() {
    let user = await findUserInDB(1)
    console.log(user)
    let friend = await findUserInDB(user.friend)
    console.log(friend1)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2.name)
}

run()*/
/*function findUserInDB() {

}*/
/*findUserInDB(1)
.then(user => {
        console.log(user.name)
    })*/
/*function getNumber() {
    //Promise.resolve( Math.random());

    const promise = new Promise((resolve, regect) => {
        regect("some error")
        setTimeout(() => {
            resolve(Math.random())
        }, 3000)
    })
    return promise
}*/

//getNumber().then(n => console.log(n))
//getNumber().then(n => console.log(n))

/*const repo = {
    save(data) {
        localStorage.setItem('some-key', JSON.stringify(data))
    }
}

repo.save({name: 'IT-KAMASUTRA'})
console.log('saved')*/
/*setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
        }, 3000)
    }, 2000)
}, 1000)*/
/*function wait(ms) {
    return new Promise( (res) => {
        setTimeout(() => {
            res()
        }, ms)
    })
}*/
/*async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run();*/

/*new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    console.log(result)
    return result * 2;
}).then(function(result) {
    console.log(result)
    return result * 2;
}).then(function(result) {
    console.log(result)
    return result * 2;
})*/

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});

promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});

promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});







