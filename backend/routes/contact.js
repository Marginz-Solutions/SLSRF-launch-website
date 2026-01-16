const express=require("express");
const router = express.Router();
const sendMail=require("../config/emailConfig")
router.post("/",async (req,res)=>{
    try{
        await sendMail(req)
        res.status(200).json({success:true,message:"Email sent successfully"})
    }catch(err){
        console.error(err)
        res.status(500).json({success:false,message:"Failed to send email"})
    }
})
module.exports=router;
