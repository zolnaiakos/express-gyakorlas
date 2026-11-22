//hrlyes azonosító adatok esetén jwt token-t ad vissza
import express, { application } from "express";
import pool from "../utils/db.js";
import bcrypt from "bcrypt";
import webtoken from "jsonwebtoken";
import "dotenv/config";

const router = express.Router();

router.post("/",async(req,res)=>{
    let{name, password}= req.body;
        //adatok ellenőrzése
        if(name===undefined||password===undefined){
            return res.status(401).json({error:"nincs a username vagy a password megadva"})
        }
        // felhasználói adatok lekérése

        try{
            let sql=`SELECT * FROM users WHERE username= ?`;
            const [users]= await pool.query(sql,[name]);
            if(users === undefined){
                return res.status(401).json({success: false, error:"helytelen felhasználónév/jelszó"})    
            }
            const user = users[0];
            const joe= await bcrypt.compare(password,String(user.password));
            if(joe){
                //JWT előállítása
                const token= webtoken.sign(
                    {
                    "userid":user.userid,
                    "username":user.username,
                    "role":user.role
                    },
                    process.env.JWT_SECRET,
                    {
                        subject: String(user.userid),
                        expiresIn:"1h"
                    }
                )
                return res.status(200).json({
                    message:"Sikeres bejelentkezés",token
                })
            }

        }
        catch(error){
            return res.status(500).json({success: false, error:"szerver hiba"})
        }
        
    return res.status(201).json({message:"belépés"});
})

export default router;