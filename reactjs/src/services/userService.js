import axios from "../axios";

const handleLoginApi = async (userEmail, userPassword,) => {
    return await axios.post('/api/login', {
        email: userEmail,
        password: userPassword

    })
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)
}
const addNewUser = async (data) => {
    return await axios.post('/api/creat-new-user', data)
}
const deleteUser = async (userId) => {
    return await axios.delete(`/api/delete-user`, {
        data: {
            id: userId
        }
    });
}
const updateUser = async (data) => {
    return await axios.put(`/api/edit-user`, data);
}
export { handleLoginApi, getAllUsers, addNewUser, deleteUser, updateUser }