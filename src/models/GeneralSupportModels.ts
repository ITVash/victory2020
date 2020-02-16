import mongoose, { Schema, Document } from "mongoose"

export interface IGeneralSupport extends Document {
	avatar: string
	name: string
	desc: string
	body: string
	link: string
}

const GeneralSupportSchema = new Schema(
	{
		avatar: { type: String, default: "Город" },
		name: { type: String, default: "Город" },
		desc: { type: String, default: "Город" },
		body: { type: String, default: "Город" },
		link: { type: String, default: "Город" },
	},
	{ timestamps: true, versionKey: false },
)

const GeneralSupportModels = mongoose.model<IGeneralSupport>(
	"GeneralSuport",
	GeneralSupportSchema,
)

export default GeneralSupportModels
