
import express from 'express'
import productRouter from './routes/product.router.js'
import ENVIRONMENT from './config/enviroment.config.js'
import connectDB from './config/db.config.js'
import Product from './models/product.model.js'

const app = express()

app.use(express.json())

app.get(
    '/', 

    (request, response) => {
        console.log("Alguien entro a la aplicacion")
        response.status(200).send({ok: true, message: 'Bienvenido a mi primera API en express!'})
    }
)



app.use('/api/products', productRouter)

//Dedicamos un puerto donde nuestra app de express va a estar ejecutandose
app.listen(
    ENVIRONMENT.PORT,
    () => {
        console.log(`La aplicacion se esta escuchando correctamente en el puerto ${ENVIRONMENT.PORT}`)
    }
)

connectDB()


