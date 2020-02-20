import mongoose, { Schema, Document } from "mongoose"

export interface IPeople extends Document {
  avatar: string
  type: number
  cities: string
	name: string
	desc: string
	body: string
	link: string
}

const PeopleSchema = new Schema(
	{
    avatar: { type: String, default: 'Аватарка' },
    type: { type: Number, default: 0 },
    cities: { type: String, default: 'ID cities' },
		name: { type: String, default: "Имя" },
		desc: { type: String, default: "Описание" },
		body: { type: String, default: "Текст" },
		link: { type: String, default: "Ссылка" },
	},
	{ timestamps: true, versionKey: false },
)

const PeopleModels = mongoose.model<IPeople>("People", PeopleSchema)

export default PeopleModels
