import { Router } from 'express'
import PostController from '../controllers/PostController'
import ContactController from '../controllers/ContactController'

const ActionsRoutes = Router()

// All of Posts
ActionsRoutes.get('/api/allposts', PostController.FindAllPosts) //Testado
ActionsRoutes.get('/api/findpostbyid/:_id', PostController.FindPostById)
ActionsRoutes.post('/api/createpost', PostController.CreatePost ) //Testado
ActionsRoutes.delete('/api/deletepost/:_id', PostController.DeletePost) //Testado
ActionsRoutes.put('/api/editpost/:_id', PostController.UpdatePost) //Testado

// All of Contact
ActionsRoutes.get('/api/getallmessages', ContactController.FindMessage) //testado
ActionsRoutes.post('/api/sendmessage', ContactController.CreateMessage) //testado
ActionsRoutes.delete('/api/deletemessage/:_id',ContactController.DeleteMessage) //testado


export default ActionsRoutes