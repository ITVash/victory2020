import { Request, Response } from "express"

import { RouteMapModels } from "../models"
import { IRouteMap } from "../models/RouteMapModels"
import { NativeError } from "mongoose"

class RouteMapControllers {
  create = (req: Request, res: Response) => {
    const file = req.files
		const data: IRouteMap = req.body
		const PostData = {
			city: data.city,
			photo: data.photo,
			body: data.body,
			lat: data.lat,
			lng: data.lng,
			visited: data.visited,
      images: file,
      videos: data.videos
		}
		const routeMap = new RouteMapModels(PostData)
		routeMap
			.save()
      .then((obj: IRouteMap) => {
        res.status(201).json(obj)
      })
      .catch((err: any) => {
        res.status(500).json({
          status: 'error',
          message: err
        })
      })
	}
  show = (_: any, res: Response) => {
    RouteMapModels.find({}, (err: any, routeMap: IRouteMap) => {
      if (err) return res.status(500).json({ status: 500, message: err })
      if (!routeMap) return res.status(404).json({ status: 404, message: 'Нет городов для отображения' })
      res.json(routeMap)
    })
  }
  showID = (req: Request, res: Response) => {
    const id = req.params.id
    RouteMapModels.findById(id)
      .exec((err: NativeError, obj: IRouteMap) => {
        if (err) return res.status(500).json({ status: 500, message: err })
        if (!obj) return res.status(404).json({ status: 404, message: `Город ${id} не найден!` })
        res.json(obj)
      })
  }
  update = (req: Request, res: Response) => {
    const id = req.params.id
    const file = req.files
    const data: IRouteMap = req.body
    const UppData = {
      city: data.city,
			photo: data.photo,
			body: data.body,
			lat: data.lat,
			lng: data.lng,
			visited: data.visited,
      images: file,
      videos: data.videos
    }
    RouteMapModels.findByIdAndUpdate({ _id: id }, UppData, { new: true }, (err: any, routeMap: IRouteMap | any) => {
      if (err) return res.status(500).json({ status: 500, message: err })
      if (!routeMap) return res.status(404).json({ status: 404, message: `Город ${id} не найден!` })
      res.json(routeMap)
    })
  }
	delete = (req: Request, res: Response) => {}
}

export default RouteMapControllers
