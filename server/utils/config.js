require('dotenv').config()

let MONGODB_CONNECTION = process.env.CONNECT_URI
let PORT = process.env.PORT

export default {
    MONGODB_CONNECTION,
    PORT
}