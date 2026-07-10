import mongoose from "mongoose";
import ENVIRONMENT from "./enviroment.config.js";


async function connectDB (){
    try{
        await mongoose.connect(ENVIRONMENT.MONGO_DB_CONNECTION_STRING)
        console.log("Conexion con la DB exitosa")
    }
    catch(error){
        console.error("Conexion con DB no exitosa. ERROR", error)
    }
}

export default connectDB