import { Router } from "express";

const productRouter = Router()


const products = [
    {
        id: 1,
        title: 'Tv Noblex 50"',
        price: 4000
    },
    {
        id: 2,
        title: 'Tv Samsung 55"',
        price: 4500
    },
]


productRouter.get(
    "/",
    (request, response) => {
        const {search, min_price} = request.query

        const product_list_selected = [...products]
        if(search){
            for(const product of product_list_selected){
                if(!product.title.toLowerCase().includes( search.toLowerCase() )){
                    console.log(product)
                    const product_index = product_list_selected.indexOf(product)
                    product_list_selected.splice(product_index, 1)
                }
            }
        }

        if(min_price){
            for(const product of product_list_selected){
                if(product.price < min_price ){
                    const product_index = product_list_selected.indexOf(product)
                    product_list_selected.splice(product_index, 1)
                }
            }
        }
        response.status(200).send({
            ok: true,
            data: {
                products: product_list_selected
            }
        })
    }
)

productRouter.post(
    '/',
    (request, response) => {
        //console.log("Datos recibidos", request.body)

        if(!request.body.title){
            response.status(400).send({
                ok: false,
                message:'Te falta enviar titulo'
            })
        }
        const new_product = {
            id: products.length + 1,
            title: request.body.title,
            price: request.body.price
        }

        products.push(new_product)

        response.status(201).send({
            ok: true,
            message: "producto creado con exito"
        })
    }
)


productRouter.get(
    '/:product_id', 
    (request, response) => {
        const {product_id} = request.params

        if(!product_id){
            return response.send({
                ok:false,
                message:`Producto con id ${product_id} no encontrado`
            })
        }

        const product_found = products.find(product => Number(product.id) === Number(product_id))

        if(!product_found){
            return response.status(404).send({
                ok:false,
                message:`Producto con id ${product_id} no encontrado`
            })
        }
        response.send(
            {
                ok: true,
                message: "producto encontrado!",
                data: {
                    product: product_found
                }
            }
        )
    }
)



export default productRouter