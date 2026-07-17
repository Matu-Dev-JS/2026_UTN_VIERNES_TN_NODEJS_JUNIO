import User from "../models/user.model.js";


async function createUser (username, password, email){
    await User.create({username: username, password: password, email: email})
}

async function getUserByEmail (email){
    const user_found = await User.findOne({email: email})
    return user_found
}

export {createUser, getUserByEmail}