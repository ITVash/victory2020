import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'

import { UserControllers, RouteMapControllers, AttachmentsControllers } from '../controllers'
import { verifyToken } from '../utils'

const userCtrl = new UserControllers()
const routeMapCtrl = new RouteMapControllers()
const attachmentsCtrl = new AttachmentsControllers()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload')
  },
  filename: (req, file, cb) => {    
    cb(null, file.originalname)
  }
})
let upload = multer({storage: storage})

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

  /**
   * Attachments Routers
   */
  app.post('/api/attachments', upload.array('file'), attachmentsCtrl.create)
  app.put('/api/attachments/:id', verifyToken, attachmentsCtrl.update)
  app.get('/api/attachments', attachmentsCtrl.show)
  app.get('/api/attachments/:id', attachmentsCtrl.showID)
  app.delete('/api/attachments/:id', verifyToken, attachmentsCtrl.delete)
    
}
export default CreateRoutes