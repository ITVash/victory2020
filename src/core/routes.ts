import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { UserControllers, RouteMapControllers } from '../controllers'
import { verifyToken } from '../utils'

const userCtrl = new UserControllers()
const routeMapCtrl = new RouteMapControllers()

const CreateRoutes = (app: express.Express) => {
  app.use(cors())
  app.use(bodyParser.json())

  app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Добро пожаловать на сервер!!!')
  })
  app.get('/api', (req: express.Request, res: express.Response) => {
    res.send('Тут все роуты нашего сервера!!!')
  })

  /**
   * User Routers
   */
  app.post('/api/signup', userCtrl.create)
  app.post('/api/login', userCtrl.login)
  app.get('/api/getMe', verifyToken, userCtrl.getMe)
  app.put('/api/user/:id', verifyToken, userCtrl.update)
  app.delete('/api/user/:id', verifyToken, userCtrl.delete)

  /**
   * RouteMap Routers
   */
  app.post('/api/routeMap', verifyToken, routeMapCtrl.create)
  app.get('/api/routeMap', routeMapCtrl.show)
  app.get('/api/routeMap/:id', routeMapCtrl.showID)
  app.put('/api/routeMap/:id', verifyToken, routeMapCtrl.update)
  app.delete('/api/routeMap/:id', verifyToken, routeMapCtrl.delete)

    
}
export default CreateRoutes