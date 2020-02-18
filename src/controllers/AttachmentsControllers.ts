import { Request, Response } from "express"

import { AttachmentsModels } from "../models"
import { IAttachments } from "../models/AttachmentsModels"
import { Field } from "multer"

class AttachmentsControllers {
	create = (req: Request, res: Response) => {
		const filez = req.files

		const attachments = new AttachmentsModels({images: filez})
		attachments
			.save()
      .then((obj: IAttachments) => {
        res.status(201).json(obj)
      })
			.catch((err: any) => {
				res.status(500).json({
					status: 500,
					message: err
				})
        console.log(err)
      })
	}
	show = (req: Request, res: Response) => {}
	showID = (req: Request, res: Response) => {}
	update = (req: Request, res: Response) => {}
	delete = (req: Request, res: Response) => {}
}

export default AttachmentsControllers
