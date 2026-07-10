import mongoose from "mongoose";


//Cada vez que creemos un producto se validara el esquema del producto (es que que estamos creando), esto permite que podamos crear de forma segura los productos ya que se cumpliran unas reglas minimas, esto se hace del lado de la API NO de la DB.
const product_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
})


//Modelo registrado, de ahora en adelante los productos seran instanciados o manipulados desde este modelo
const Product = mongoose.model('Product', product_schema)

export default Product