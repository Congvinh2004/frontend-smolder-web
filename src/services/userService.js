import axios from "../axios";

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)
}

const createNewUsersFromService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/add-user', data)
}
const deleteUser = (userID) => {
    return axios.delete(`/api/delete-user?id=${userID}`)
}
export { getAllUsers, createNewUsersFromService, deleteUser }