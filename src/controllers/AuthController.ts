import { Request, Response } from 'express'
import User from '../models/User'

class AuthController {

  //criando usuario
  async CreateUser(Req:Request, Res: Response){
    const { username, password } = Req.body

    try{
      await User.create({
        username: username,
        password: password
      })
      return Res.status(200).send({ message: `Usuario criado` })
    }catch(error){
      return Res.status(401).send({ message: `Não foi possivel criar usuário` })
    }
  }

  //deletando usuário
  async DeleteUser(Req:Request, Res: Response){
    const id = Req.params

    try{

      await User.deleteOne({"_id" : id}) 
               
      return Res.status(200).send({ message: "Usuário deletado" })

    }catch(error){
        return Res.status(401).send({ message: `Desculpe, mas não foi possivel deletar usuário!` })
    }
  }

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

}

export default new AuthController()