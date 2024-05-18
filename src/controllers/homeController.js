import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }

}
let getAboutPage = (req, res) => {
    return res.render('./test/about.ejs')
}
let getCRUD = (req, res) => {
    return res.render('./crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    let data = await CRUDservice.getAllUser();
    return res.render('displayCRUD.ejs', {
        data: data
    })
}

let displayCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    return res.render('displayCRUD.ejs', {
        data: data
    })
}

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId)
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        return res.render('editCRUD.ejs', {
            usersInfo: userData
        });
    }
    else {
        return res.send('hello from controller')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDservice.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        data: allUser
    });
}
let displayDeleteCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId)
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        return res.render('deleteCRUD.ejs', {
            usersInfo: userData
        });
    }
    else {
        return res.send('hello from controller')
    }
}
let deleteCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDservice.deleteUserData(data);
    return res.render('displayCRUD.ejs', {
        data: allUser
    });
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    displayDeleteCRUD: displayDeleteCRUD
}