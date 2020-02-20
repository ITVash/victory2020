import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'
import path from 'path'

import { UserControllers, RouteMapControllers, PeopleControllers } from '../controllers'
import { verifyToken } from '../utils'

const userCtrl = new UserControllers()
const routeMapCtrl = new RouteMapControllers()
const peopleCtrl = new PeopleControllers()

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
  app.use('/upload', express.static('upload'))
  app.use(bodyParser.json())
  app.use('/', express.static(path.join('client')))
  app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve('client', 'index.html'))
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
  app.post('/api/routeMap', upload.array('file'),  verifyToken, routeMapCtrl.create)
  app.get('/api/routeMap', routeMapCtrl.show)
  app.get('/api/routeMap/:id', routeMapCtrl.showID)
  app.put('/api/routeMap/:id', upload.array('file'),  verifyToken, routeMapCtrl.update)
  app.delete('/api/routeMap/:id', verifyToken, routeMapCtrl.delete)

  /**
   * People Routers
   */
  app.post('/api/people', upload.single('file'), peopleCtrl.create)
  app.put('/api/people/:id', upload.single('file'),  verifyToken, peopleCtrl.update)
  app.get('/api/people', peopleCtrl.show)
  app.get('/api/people/:id', peopleCtrl.showID)
  app.delete('/api/people/:id', verifyToken, peopleCtrl.delete)
    
}
export default CreateRoutes