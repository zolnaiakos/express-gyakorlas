import express from "express";
import pool from "../utils/db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/",async(req,res)=>{
    let{name, password}= req.body;
    //adatok ellenőrzése
    if(name===undefined||password===undefined){
        return res.status(401).json({error:"nincs vagy a jelszó vagy a password megadva"})
    }
    // kapott adatok kiíratása
    let passwordhash=await bcrypt.hash(password,10);
    console.log(passwordhash);
    let sql=`INSERT INTO users (userid, username, password, role) VALUES (NULL, ?, ?, 'user');`
try{
const [result]= await pool.execute(sql,[name, passwordhash]);
}
catch{
    return res.status(500).json({success:false, error:"létrehozás sikertelen"})
}
    return res.status(201).json({message:"sikeres regisztrálás"});
})

export default router;