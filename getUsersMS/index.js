const cors = require('cors');
const express = require('express');
const port = (process.env.port || 3000 );

//CONFIG SERVER
//express
const app = express();
app.use(cors());
//admitir
app.use(express.json())
//config
app.set('port',port)


//RUTAS
app.use('/api/appsDistribuidas/getUsers',require('./Routes/getRoute'))

//iniciar express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('error al inciar servidor: '+error)
    }
    else{
        console.log('servidor iniciado en el puerto: '+port)
    }
})