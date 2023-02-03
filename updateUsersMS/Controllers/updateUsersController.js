const { Usuario } = require("../Models/user")


const updateUsers=async(req,res)=>{
    const{id,username, email,pass,rol} = req.body

    let users = await Usuario.update({username, email,pass,rol},{
        raw:true,
        where:{
            id
        }
    });
    return res.status(200).json({
        ok:true,
        users
    })
}

module.exports={
    updateUsers
}