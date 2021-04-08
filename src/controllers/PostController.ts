import { Request, Response } from 'express'
import Post from '../models/Post'

class PostController {

    async CreatePost( Req: Request, Res: Response ) {

        const { nameProject, description, justification, imageOne, imageTwo, imageThree } = Req.body

        try{

            await Post.create({
                
                nameProject: nameProject,
                description: description,
                justification: justification,
                imageOne: imageOne,
                imageTwo: imageTwo,
                imageThree: imageThree

            })

            return Res.status(200).send({ message: "Post realizado com sucesso!" });  

        }catch(error){

            return Res.status(401).send({ message: `Desculpe, mas não foi possivel realizar a postagem!` })
        }

    }

    async FindPost(Req:Request, Res: Response){
        
        const { id } = Req.body
           
        try{
          
            const GetPost: any = await Post.find({})
            return Res.json(GetPost)

        }catch(error){

            return Res.status(401).send({ message: `Desculpe, mas não foi possivel encontrar as postagens!` })

        }
    }

    async UpdatePost(Req:Request, Res: Response){

        const { id,nameProject, description, justification, imageOne, imageTwo, imageThree } = Req.body

        try {
            
            await Post.updateOne({_id: id},{
                $set: {
                    nameProject: nameProject,
                    description: description,
                    justification: justification,
                    imageOne: imageOne,
                    imageTwo: imageTwo,
                    imageThree: imageThree
                }
            })


            return Res.status(200).send({ message: "Post atualizado com sucesso!" })    
            
        } catch (error) {
            return Res.status(401).send({message: "Não foi possivel atualizar o post :/"})
        }

    }

    async DeletePost(Req:Request, Res: Response){
        const { id } = Req.body
        
        try{

          await Post.deleteOne({_id: id})          
          return Res.status(200).send({ message: "Post deletado" })

        }catch(error){
            return Res.status(401).send({ message: `Desculpe, mas não foi possivel deletar a postagem!` })
        }
    }


}

export default new PostController();