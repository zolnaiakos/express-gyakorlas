import express from 'express'

const route = express.Router();

route.post('/login', async(req,res)=>{
    return res.status(201).json({message : "Belépés"})
})

export default route