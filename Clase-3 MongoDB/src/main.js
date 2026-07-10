
import express from 'express'
import productRouter from './routes/product.router.js'

//Crea una aplicacion de express (servidor web)
const app = express()

//Configuramos nuestra app para que las consultas entrantes que tengan json en el body se puedan procesar
app.use(express.json())

const PORT = 8080



//App.get podemos configurar el comportamiento de nuestro servidor cuando llegue la consulta HTTP GET a este
app.get(
    '/', 
    //Request sirve para tener los datos de la consulta entrante
    //Response sirve para poder emitir respuestas desde el servidor
    (request, response) => {
        console.log("Alguien entro a la aplicacion")

        //response.send("<h1>Hola mundo</h1>")
        response.status(200).send({ok: true, message: 'Bienvenido a mi primera API en express!'})
    }
)



app.use('/api/products', productRouter)

//Dedicamos un puerto donde nuestra app de express va a estar ejecutandose
app.listen(
    PORT,
    () => {
        console.log(`La aplicacion se esta escuchando correctamente en el puerto ${PORT}`)
    }
)



/* 
Estatus de respuesta:
    Nos dan informacion de como fue la respuesta
    EJ: 404 hace referencia a que recurso del servidor no se encuentra
    EJ: 200 hace referencia a que la respuesta es exitosa

Los estatus se dividen en categorias
    2xx: Todo salio bien, pero con ciertas diferencias
        EJ: 200 es ok
        pero 201 es creado
        y 203 es creado con informacion adicional

    4xx: Hubo error y es culpa del cliente
        EJ: 404 not found no es un fallo de servidor, debido a que esta el cliente deliberadamente buscando un recurso inexistente
        EJ: 400 bad request, no me envias los datos correctos
        EJ: 401 unauthorized, el sistema no reconoce tu sesion, o te identifica como usuario
        EJ: 403 forbiden, Prohebido para mi usuario, no tiene permisos para hacer la consulta

    5xx: Hubo error y es culpa del servidor
        EJ: 500 Internal server error, el servidor crasheo

*/