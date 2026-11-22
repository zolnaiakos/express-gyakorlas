import express from "express";
import hitelesites from "../middleware/hitelesits.js";


const router = express.Router();

router.get("/",hitelesites, (req,res)=>{
    return res.status(200).json({message:"felhasználók"});
})

export default router;