import axios from "../axios";

const handleLoginApi = async (userEmail, userPassword, ) => {
    return await axios.post('/api/login', {
        email: userEmail,
        password: userPassword

    })
}
export { handleLoginApi }