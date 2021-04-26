import express from 'express'
import cors from 'cors'
import ActionsRoutes  from './routes/ActionsRoutes'
import AuthRoutes  from './routes/AuthRoutes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(ActionsRoutes)
app.use(AuthRoutes)

app.use(cors())

app.listen(8080)