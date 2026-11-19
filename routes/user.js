import express from 'express'

const route = express.Router();

route.delete('/user/:id', async(req,res)=>{
    let id = req.params.id;
    if(parseInt(Number(id)<=0)){
        
    }
    return res.status(201).json({message : `${id} "azonosítojú felhasználó törlése`})
})

export default route