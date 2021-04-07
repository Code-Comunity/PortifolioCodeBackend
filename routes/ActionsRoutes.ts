import { Router } from 'express'

const ActionsRoutes = Router()

// All of Posts
ActionsRoutes.get('/api/allposts', )
ActionsRoutes.post('/api/createpost', )
ActionsRoutes.delete('/api/deletepost', )
ActionsRoutes.put('/api/editpost')

// All of Contact
ActionsRoutes.get('/api/getallmessages', )
ActionsRoutes.post('/api/sendmessage', )
ActionsRoutes.delete('/api/deletemessage', )
ActionsRoutes.put('/api/editmessage/:_id', )