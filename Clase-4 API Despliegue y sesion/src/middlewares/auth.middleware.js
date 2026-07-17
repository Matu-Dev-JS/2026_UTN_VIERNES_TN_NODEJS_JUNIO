import jwt from 'jsonwebtoken'
import ENVIRONMENT from '../config/enviroment.config.js'

export async function authMiddleware (request, response, next) {
    try{
         const auth_header = request.headers.authorization //Aca el cliente nos pasa el session token como 'Bearer {token_value}'
        const auth_token = auth_header.split(' ')[1]
        const payload = jwt.verify(auth_token, ENVIRONMENT.JWT_SECRET_KEY)

        //Guardamos dentro de la request como user los valores de sesion del usuario contenidos en el token
        request.user = payload

        
        next()
    }
    catch(error){
        if(error instanceof jwt.TokenExpiredError || error instanceof jwt.NotBeforeError || error instanceof jwt.JsonWebTokenError ) {
            return response.json({
                ok: false,
                status: 401,
                message: 'unauthorized'
            })
        }
        else{
            return response.json(
                {
                    status: 500,
                    message: 'Internal server error',
                    ok: false
                }
            )
        }
    }
   
} 