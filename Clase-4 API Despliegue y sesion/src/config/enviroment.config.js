
import dotenv from 'dotenv'

//Leer el archivo .env de la raiz del proyecto y cargar las variables de entorno en process.env
dotenv.config()


const ENVIRONMENT = {
    MONGO_DB_CONNECTION_STRING: process.env.MONGO_DB_CONNECTION_STRING,
    PORT: process.env.PORT,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
}


export default ENVIRONMENT