/* eslint-disable no-undef */
import dotenv from 'dotenv'

dotenv.config()

export let MONGODB_CONNECTION = process.env.CONNECT_URI
export let PORT = process.env.PORT || 3001