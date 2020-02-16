import mongoose, { Schema, Document } from "mongoose"

export interface IMediaSupport extends Document {
	avatar: string
	name: string
	desc: string
	body: string
	link: string
}

const MediaSupportSchema = new Schema(
	{
		avatar: { type: String, default: "Город" },
		name: { type: String, default: "Город" },
		desc: { type: String, default: "Город" },
		body: { type: String, default: "Город" },
		link: { type: String, default: "Город" },
	},
	{ timestamps: true, versionKey: false },
)

const MediaSupportModels = mongoose.model<IMediaSupport>(
	"MediaSupport",
	MediaSupportSchema,
)

export default MediaSupportModels
