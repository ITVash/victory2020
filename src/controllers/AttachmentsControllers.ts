import { Request, Response } from 'express'

import { AttachmentsModels } from '../models'
import { IAttachments } from '../models/AttachmentsModels'


class AttachmentsControllers {
  create = (req: Request, res: Response) => {
    const file = req.file
    //const data = []
    /*data.push({
      filename: file.originalname,
      path: file.path,
      type: file.mimetype
    })*/
    console.log(file)
    res.json(file)
  }
  show = (req: Request, res: Response) => { }
  showID = (req: Request, res: Response) => { }
  update = (req: Request, res: Response) => { }
  delete = (req: Request, res: Response) => { }
}

export default AttachmentsControllers