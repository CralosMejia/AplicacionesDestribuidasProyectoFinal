const { Usuario } = require("../Models/user")


const crearUsuario=async(req,res)=>{
    const{username, email,pass} = req.body

    let user = await Usuario.create({username,email,pass},{
        raw:true
    });

    return res.status(200).json({
        ok:true,
        user
    })
}

module.exports={
    crearUsuario
}