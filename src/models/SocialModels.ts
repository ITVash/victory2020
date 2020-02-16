import mongoose, { Schema, Document } from "mongoose"

export interface IHome extends Document {
	name: string
	type: string
	link: string
}

const HomeSchema = new Schema(
	{
		name: { type: String, default: "Город" },
		type: { type: String, default: "Город" },
		link: { type: String, default: "Город" },
	},
	{ timestamps: true, versionKey: false },
)

const HomeModels = mongoose.model<IHome>("Home", HomeSchema)

export default HomeModels
