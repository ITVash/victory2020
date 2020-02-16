import mongoose, { Schema, Document } from "mongoose"

export interface IAttachments extends Document {
	filename: string
	size: number
	ext: string
  url: string
  desc: string
  body: string
}

const AttachmentsSchema = new Schema(
	{
		filename: { type: String, default: "название" },
		size: { type: Number, default: 0 },
		ext: { type: String, default: "what!" },
    url: { type: String, default: "ссылка" },
    desc: { type: String, default: 'описание файла' },
    body: { type: String, default: 'Текст' }
	},
	{ timestamps: true, versionKey: false },
)

const AttachmentsModels = mongoose.model<IAttachments>("Attachments", AttachmentsSchema)

export default AttachmentsModels
