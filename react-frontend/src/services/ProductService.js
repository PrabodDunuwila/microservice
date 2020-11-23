import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8091/api/v1/products";

class ProductService {

    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(Product){
        return axios.post(PRODUCT_API_BASE_URL, Product);
    }

    getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId);
    }

    updateProduct(Product, productId){
        return axios.put(PRODUCT_API_BASE_URL + '/' + productId, Product);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId);
    }
}

export default new ProductService()