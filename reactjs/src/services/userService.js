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
export { handleLoginApi, getAllUsers }