import webtoken from"jsonwebtoken";
import bcrypt from "bcrypt";

function hitelesites(req,res,next){
    
    //a kapott fejléc kiolvasása a requestből
    const authHeader=req.headers.authorization;

    //tartalom ellenőrzés
    if(!authHeader){
        return res.status(401).json({error:"Hiányzó hitelesítési adatok"});
    }
    const[type,token]=authHeader.split(" ");

    //Bearer token
    if(type!=="Bearer"||!token){
        return res.status(401).json({error:"Hibás formátum"});
    }
    try{
        const decoded=webtoken.verify(token, process.env.JWT_SECRET);
        req.user={
            role:decoded.role,
            userid:decoded.userid,
            username:decoded.username
        };
    next();
    }
    catch(error){
        return res.status(401).json({error: "érvénytelen vagy lejárt token"});
    }
}

export default hitelesites