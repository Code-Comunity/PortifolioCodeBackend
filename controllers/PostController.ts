import { Request, Response } from 'express'
import Post from '../models/Post'

class PostController {

    async CreatePost( Req: Request, Res: Response ) {

        const { id, description, justification, imageOne, imageTwo, imageThree } = Req.body
        try{

          const NewPost = new Post({
            description: description,
            justification: justification,
            imageOne: imageOne,
            imageTwo: imageTwo,
            imageThree: imageThree

        })
        await NewPost.save().then((data)=>{Res.json(data)}).catch((err)=>{Res.json(err)})

        }catch(error){

            return Res.status(401).send({ message: `Desculpe, mas não foi possivel realizar a postagem!` })
        }

    }

    async FindPost(Req:Request, Res: Response){
        
        const { id } = Req.body
        
        
        try{
          
          const GetPost = await Post.find({})

            if(!GetPost) return Res.status(401).send({ message: `Desculpe, mas não conseguimos encontrar nenhum post :/` })
            return Res.json(GetPost)

        }catch(error){

            return Res.status(401).send({ message: `Desculpe, mas não foi possivel encontrar as postagens!` })

        }
    }

    async UpdatePost(){}

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