import { createUser, getUserByEmail } from "../repository/user.repository.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ENVIRONMENT from "../config/enviroment.config.js"

export async function registerController (request, response){
    const {email, username, password} = request.body

    const already_registered_user = await getUserByEmail(email)
    if(already_registered_user){
        return response.json(
            {
                ok: false,
                status: 400,
                message: 'El usuario con ese mail ya esta registrado en el sistema'
            }
        )
    }

    const hashed_password = await bcrypt.hash(password, 12)
    await createUser(username, hashed_password, email)

    return response.json({
        message: 'Usuario registrado existosamente',
        ok: true, 
        status: 201
    })
}


export async function loginController (request, response){
    const {email, password} = request.body
    

    const user_found = await getUserByEmail(email)

    if(!user_found){
        return response.json({
            ok:false,
            status: 404,
            message:"usuario no encontrado"
        })
    }
    const is_same_password = await bcrypt.compare(password, user_found.password)
    if(!is_same_password){
        return response.json({
            ok:false,
            status:401,
            message: 'Credenciales invalidas'
        })
    }

    const session_token = jwt.sign(
        {
            id: user_found._id,
            email: user_found.email,
            username: user_found.username
        },
        ENVIRONMENT.JWT_SECRET_KEY,
        {
            expiresIn: '1d'
        }
    )

    return response.json({
        ok: true, 
        status: 200,
        message: 'Inicio de sesion exitoso',
        data: {
            session_token: session_token
        }
    })
}