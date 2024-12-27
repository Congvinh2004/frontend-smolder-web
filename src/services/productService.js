import axios from "../axios";

const getAllProducts = (inputId) => {
    return axios.get(`/api/get-all-product?id=${inputId}`)
}

const createNewProductsFromService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/add-product', data)
}

const deleteProduct = (productID) => {
    return axios.delete(`/api/delete-product?id=${productID}`)
}
export { getAllProducts, deleteProduct, createNewProductsFromService }