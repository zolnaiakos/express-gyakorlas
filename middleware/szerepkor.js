import { allRoles } from "../index.js";

function szerepkor(...[engedelyezettszerepkor]){

    return(req,res,next)=>(req,res,next)=>{

    if(!req.user.role) return res.status(401).json({error:"hiányzó szerepkör"});

    if(!engedelyezettszerepkor.includes(req.user.role))return res.status(403).json({error:"Nincs ilyen role"});
    next();
}}