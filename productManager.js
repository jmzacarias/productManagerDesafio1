class ProductManager {
    #_products
    constructor() {
        this.#_products = []
    }
    
    getProducts() {
        return this.#_products
    }

    addProduct(product) {
        if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) return 'ERR. Missing Fields';
        let validateCode = this.#_products.find(item => item.code === product.code);
        if(validateCode) return 'ERR Code already exists';
        if(this.#_products.length === 0) {
            product.id=1
        }else{
            product.id= this.#_products[this.#_products.length-1].id+1;
        }
        this.#_products.push(product)
        return `New product added: ${product}`
    }

    getProductById(id) {
        const productById = this.#_products.find(item => item.id === id)
        if(!productById) return `ERR: ID product doesn´t exists`
        console.log(productById)
        return productById
    }
}

const productManager = new ProductManager();
productManager.addProduct({title: 'Manzana', description: 'Frutas', price: 123, thumbnail: 'No image', code: 'A123B', stock: 9929})
productManager.addProduct({title: 'Pera', description: 'Frutas', price: 321, thumbnail: 'No image', code: 'A213F', stock: 1259})
productManager.addProduct({title: 'Pera', description: 'Frutas', price: 321, thumbnail: 'No image', code: 'A213F', stock: 1259})
console.log(productManager.getProducts())

console.log(`ID 2 Product is: ${productManager.getProductById(2)}`)