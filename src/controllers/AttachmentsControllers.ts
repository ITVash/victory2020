import { Request, Response } from "express"

import { AttachmentsModels } from "../models"
import { IAttachments } from "../models/AttachmentsModels"

class AttachmentsControllers {
	create = (req: Request, res: Response) => {
		const filez = req.files
		console.log(filez)
		res.json(filez)
		const attachments = new AttachmentsModels(filez)
		attachments
			.save()
      .then((obj: IAttachments) => {
        console.log(obj)
      })
      .catch((err: any) => {
        console.log(err)
      })
	}
	show = (req: Request, res: Response) => {}
	showID = (req: Request, res: Response) => {}
	update = (req: Request, res: Response) => {}
	delete = (req: Request, res: Response) => {}
}

export default AttachmentsControllers
