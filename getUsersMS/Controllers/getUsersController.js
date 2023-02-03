const { Usuario } = require("../Models/user")


const getUsers=async(req,res)=>{
    const{username, email,pass} = req.body

    let users = await Usuario.findAll({
        raw:true
    });

    return res.status(200).json({
        ok:true,
        users
    })
}

module.exports={
    getUsers
}