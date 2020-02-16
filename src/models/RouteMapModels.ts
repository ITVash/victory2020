import mongoose, { Schema, Document } from "mongoose"

export interface IRouteMap extends Document {
	city: string
	body: string
	lat: number
	lng: number
	visited: boolean
	attachments: [{
		type: Schema.Types.ObjectId,
		ref: string
	}]
}

const RouteMapSchema = new Schema(
	{
		city: { type: String, default: "Город" },
		body: {type: String, default: 'Информация о событиях' },
		lat: { type: Number, default: 0 },
		lng: { type: Number, default: 0 },
		visited: { type: Boolean, default: false },
		attachments: [{
			type: Schema.Types.ObjectId,
			ref: 'Attachments'
		}]
	},
	{ timestamps: true, versionKey: false },
)

const RouteMapModels = mongoose.model<IRouteMap>("RouteMap", RouteMapSchema)

export default RouteMapModels
