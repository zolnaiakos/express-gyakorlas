import express from "express";

const router = express.Router();

router.delete("/:id",(req,res)=>{
    let id = Number(req.params.id);
    if(!Number.isInteger(id)&& id<=0){
        return res.status(401).json({error:"hibás id"});
    }
    return res.status(201).json({message:`sikeres törlés ezen az idn: ${id}`});
})

router.get("/", (req,res)=>{
    return res.status(200).json({message:"felhasználók"});
})

export default router;