import { Request, Response } from 'express'
import Contact from '../models/Contact'

class ContactController {

    async CreateMessage( Req: Request, Res: Response ) {

        const { name, email, phone, message, about, date } = Req.body

        try{

            const NewMessage: any = await Contact.create({
                
                name: name,
                email: email,
                message: message,
                about: about

            })

            return Res.status(200).send({ message: "Mensagem enviada com sucesso" }) 

        }catch(error){

            return Res.status(401).send({ message: "Não foi possivel enviar a menssagem :/" })
        }

    }  

    async FindMessage(Req:Request, Res: Response){
           
        try{
          
            const GetMessage: any = await Contact.find({})
            return Res.json(GetMessage)

        }catch(error){

            return Res.status(401).send({ message: `Desculpe, mas não foi possivel encontrar as mensagens!` })

        }
    }

}

export default new ContactController