import { Router } from 'express'
import PostController from '../controllers/PostController'

const ActionsRoutes = Router()

// All of Posts
ActionsRoutes.get('/api/allposts', PostController.FindPost)
ActionsRoutes.post('/api/createpost', PostController.CreatePost )
ActionsRoutes.delete('/api/deletepost', PostController.DeletePost)
ActionsRoutes.put('/api/editpost', PostController.UpdatePost)

// All of Contact
ActionsRoutes.get('/api/getallmessages', )
ActionsRoutes.post('/api/sendmessage', )
ActionsRoutes.delete('/api/deletemessage', )
ActionsRoutes.put('/api/editmessage/:_id', )