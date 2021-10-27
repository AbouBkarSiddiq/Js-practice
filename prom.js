const axios = require("axios");

let p1 = axios.get("https://jsonplaceholder.typicode.com/todos/")
let p2 = axios.get("https://jsonplaceholder.typicode.com/users")

const promise = Promise.all([p1, p2])
    
promise.then(Response => {
        console.log('Response:', Response.map(ele => ele.data))
        // console.log('Response:', Response.map(ele => ele.data))
})
