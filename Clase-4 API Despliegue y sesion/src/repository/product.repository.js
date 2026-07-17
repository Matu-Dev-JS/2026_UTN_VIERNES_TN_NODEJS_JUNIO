import Product from "../models/product.model.js"

export async function createProduct (name, price){
    await Product.create({title: name, price: price})
}

export async function getProducts (){
    const products = await Product.find()
    return products
}

export async function getProductById (product_id){
    const product_found = await Product.findById(product_id)
    return product_found
}


export async function updateProductById (product_id, update_product_data){
    await Product.findByIdAndUpdate(product_id, update_product_data)
}

export async function deleteProductById (product_id){
    await Product.findByIdAndDelete(product_id)
}


/* getProducts().then(result => console.log(result))

getProductById('6a518304d93d725b1d8b0caa').then(result => console.log(result)) */

//updateProductById('6a518304d93d725b1d8b0caa', {title: 'tv noblex 52"'})

/* deleteProductById('6a518304d93d725b1d8b0caa') */

//createProduct('tv test', 100)