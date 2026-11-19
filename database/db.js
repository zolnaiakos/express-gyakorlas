import mysql2 from 'mysql2/promise'
import 'dotenv/config'

const dbConfig = {
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER ?? "user",
    database: process.env.DB_DATABASE ?? "auth",
    port: Number(process.env.DB_PORT) ?? "3307",
    dateStrings : true
}


const pool = mysql2.createPool(dbConfig)

export default pool