import mongoose, { Schema, Document } from "mongoose"

export interface IPartner extends Document {
	avatar: string
	name: string
	desc: string
	body: string
	link: string
}

const PartnerSchema = new Schema(
	{
		avatar: { type: String, default: "Город" },
		name: { type: String, default: "Город" },
		desc: { type: String, default: "Город" },
		body: { type: String, default: "Город" },
		link: { type: String, default: "Город" },
	},
	{ timestamps: true, versionKey: false },
)

const PartnerModels = mongoose.model<IPartner>("Partner", PartnerSchema)

export default PartnerModels
