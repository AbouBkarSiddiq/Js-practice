const axios = require("axios")

const url1 = axios('https://jsonplaceholder.typicode.com/todos/')
console.log(url1)
const url2 = axios('https://jsonplaceholder.typicode.com/users')

Promise.all([url1,url2]).then(responce => 
    console.log(responce)    
)
// .then(responce => {
//     const res = responce.data.slice(0, 5)
//     console.log("Responce from api:", res)
// }).catch((error) => {
//     console.log(error)
// })
















// let partyPromise = true;

// let giveParty = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (partyPromise) {
//             resolve("I given party to friends");
//         } else {
//             reject("I am not given party to friends");
//         }
//     }, 4000);
// });

// console.log('Party given or not', giveParty)

// function makePromise(partyPromise) {
//     return new Promise(function (resolve, reject) {
//         console.log("Waiting for response......")
//         setTimeout(() => {
//             if (partyPromise) {
//                 resolve("I given party to friends");
//             } else {
//                 reject("I am not given party to friends");
//             }
//         }, 6 * 1000);
//     });
// }
// let partyPromise = makePromise(false);

// partyPromise
//     .then(success => console.log(success))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log("Friends are ready for party !"));

// async function simpleAsync() {
//     return "Hello Promises"
//   }

// simpleAsync().then((data) => {
//     console.log(data)
// })


// function returnPromises() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("Sample Data");
//       }, 3000);
//     });
//   }

//   async function ExecuteFunction() {

//     var getData = await returnPromises();
//     console.log(getData);
//   }
//   ExecuteFunction()

// let value = true;

// function newPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (value) {
//                 resolve("Promise Resolved.")
//             } else {
//                 reject("Promise Rejected and get in catch.")
//             }
//         }, 3000)
//     })
// }

// function ExecuteFunction() {
//     console.log("Excuting function")
//     newPromise().then(Response => {
//         console.log('Responce of Resolve:', Response)
//     }).catch(error => {
//         console.log('Responce of Error:',error)
//     })
    
// }
// ExecuteFunction()



