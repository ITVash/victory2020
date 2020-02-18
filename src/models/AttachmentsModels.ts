import mongoose, { Schema, Document } from "mongoose"

export interface IAttachments extends Document {
	fieldname: string
	originalname: string
	encoding: string
	mimetype: string
	destination: string
	filename: string
	path: string
	size: number
  desc: string
  body: string
}

const AttachmentsSchema = new Schema(
	{
    fieldname: { type: String, default: "ссылка" },
		originalname: { type: String, default: "название" },
		encoding: { type: String, default: "what!" },
		mimetype: { type: String, default: "what!" },
		destination: { type: String, default: "what!" },
		filename: { type: String, default: "название" },
		path: { type: String, default: "what!" },
		size: { type: Number, default: 0 },
    desc: { type: String, default: 'описание файла' },
    body: { type: String, default: 'Текст' }
	},
	{ timestamps: true, versionKey: false },
)

const AttachmentsModels = mongoose.model<IAttachments>("Attachments", AttachmentsSchema)

export default AttachmentsModels
