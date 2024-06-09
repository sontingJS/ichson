import { where } from "sequelize";
import db from "../models/index";
import bcrypt from 'bcryptjs';
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: {
                        exclude: ['firstName',
                            "lastName",
                            "address",
                            "phonenumber",
                            "gender",
                            "image",
                            "id",
                            "positionId",
                            "createdAt",
                            "updatedAt"]
                    },
                    raw: true,
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = `Ok`;
                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = `wrong password`;
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMessage = `user's not found`
                }
            }

            else {
                //return error
                userData.errCode = 1;
                userData.errMessage = `your's Email isn't exist in your system . pls try other email !`
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}
let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            });
            if (user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail,
}