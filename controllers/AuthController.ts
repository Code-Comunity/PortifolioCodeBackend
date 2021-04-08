import { Request, Response } from 'express'
import User from '../models/User'

class AuthController {

  //Metodos
  async Authenticate( Req: Request, Res: Response ) {

    const { username, password } = Req.body
    
    try {
      
      const UserExists: any = await User.findOne({ username })

      // Tratando erros possíveis.
      if(!UserExists) return Res.status(401).send({ message: `Desculpe ${username}, aqui consta q seu usuario não existe!` })
      if(password === UserExists.password) return Res.status(401).send({ message: `Desculpe ${username}, aqui consta q seu usuario não existe!` })

      // Falta implementar token
      return Res.status(200).send({ message: `${username} logado!` })

    } catch (error) {

      return Res.status(401).send({ message: `Desculpe ${username} não foi possivel logar!` })
      
    }

  }
User
}

export default new AuthController()