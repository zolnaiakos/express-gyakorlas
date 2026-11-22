import express, { application } from "express";
import hitelesites from "../middleware/hitelesits.js";

const router = express.Router();

router.post("/",(req,res)=>{
    return res.status(201).json({message:"profil megtekintése"});
})

router.get("/",hitelesites,(req,res)=>{
    return res.status(200).json({message:`Üdv ${req.user.username}, szerepköröd:${req.user.role}`
    })
})

export default router;