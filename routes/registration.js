import express from 'express'
import pool from '../database/db.js'
import bcrypt from 'bcrypt'
import 'dotenv/config'

const route = express.Router();

route.post('/login', async(req,res)=>{
    let {name , password} = req.body;
    //adatok ellenőrzése
    if( name === undefined || password === undefined){
        return res.status(401).json({ error: "hiányzó adatok"});
    }
        // a kapot adatok kiírása az adatbázisba
    const passwordHash = await bcrypt.hash(password, 10);
    const sql =  `INSERT INTO users (userid, username, password, role) VALUES (NULL, ?, ?, user)`
try{
    const [result] = await pool.execute(sql, [name, passwordHash]);
    
}   catch (error){
    
    return res.status(500).json({ succes: false,  error: "Létrehozás sikertelen! "})
}
    
  return res.status(201).json({message : "Regisztráció"})
})

export default route