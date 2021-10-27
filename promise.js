const axios = require("axios")

const getSendRequest = async () => {
    try {
        let res1 = axios('https://jsonplaceholder.typicode.com/todos/')
        let res2 = axios('https://jsonplaceholder.typicode.com/users')
        console.log('res1', res1)
        Promise.all([res1, res2]).then(Response => {
            console.log(Response)
        })
    }
    catch (error) {
        console.log(error)
    }
}
getSendRequest();

