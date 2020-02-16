import mongoose, { Schema, Document } from "mongoose"

export interface ISponsors extends Document {
	avatar: string
	name: string
	desc: string
	body: string
	link: string
}

const SponsorSchema = new Schema(
	{
		avatar: { type: String, default: "Город" },
		name: { type: String, default: "Город" },
		desc: { type: String, default: "Город" },
		body: { type: String, default: "Город" },
		link: { type: String, default: "Город" },
	},
	{ timestamps: true, versionKey: false },
)

const SponsorModels = mongoose.model<ISponsors>("Sponsor", SponsorSchema)

export default SponsorModels
