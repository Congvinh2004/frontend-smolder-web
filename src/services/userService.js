import axios from "../axios";

let handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (userId) => {
    return axios.get(`/api/get-all-user?id=${userId}`)
}

const createNewUsersFromService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/add-user', data)
}
const deleteUser = (userID) => {
    return axios.delete(`/api/delete-user?id=${userID}`)
}
export { getAllUsers, createNewUsersFromService, deleteUser, handleLoginApi }