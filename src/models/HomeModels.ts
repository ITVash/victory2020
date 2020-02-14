import mongoose, { Schema, Document } from 'mongoose'

export interface IHome extends Document {
  routeMap: [{
    city: string
    lat: number
    lng: number
  }]
  organising: [{
    avatar: string
    name: string
    desc: string
    body: string
    link: string
  }]
  sponsors: [{
    avatar: string
    name: string
    desc: string
    body: string
    link: string
  }]
  generalSupport: [{
    avatar: string
    name: string
    desc: string
    body: string
    link: string
  }]
  mediaSupport: [{
    avatar: string
    name: string
    desc: string
    body: string
    link: string
  }]
  partners: [{
    avatar: string
    name: string
    desc: string
    body: string
    link: string
  }]
  social: [{
    name: string
    type: string
    link: string
  }]
}

const HomeSchema = new Schema({
  routeMap: [{
    city: {type: String, default: 'Город'},
    lat: {type: Number, default: 0},
    lng: {type: Number, default: 0}
  }],
  organising: [{
    avatar: {type: String, default: 'Город'},
    name: {type: String, default: 'Город'},
    desc: {type: String, default: 'Город'},
    body: {type: String, default: 'Город'},
    link: {type: String, default: 'Город'}
  }],
  sponsors: [{
    avatar: {type: String, default: 'Город'},
    name: {type: String, default: 'Город'},
    desc: {type: String, default: 'Город'},
    body: {type: String, default: 'Город'},
    link: {type: String, default: 'Город'}
  }],
  generalSupport: [{
    avatar: {type: String, default: 'Город'},
    name: {type: String, default: 'Город'},
    desc: {type: String, default: 'Город'},
    body: {type: String, default: 'Город'},
    link: {type: String, default: 'Город'}
  }],
  mediaSupport: [{
    avatar: {type: String, default: 'Город'},
    name: {type: String, default: 'Город'},
    desc: {type: String, default: 'Город'},
    body: {type: String, default: 'Город'},
    link: {type: String, default: 'Город'}
  }],
  partners: [{
    avatar: {type: String, default: 'Город'},
    name: {type: String, default: 'Город'},
    desc: {type: String, default: 'Город'},
    body: {type: String, default: 'Город'},
    link: {type: String, default: 'Город'}
  }],
  social: [{
    name: {type: String, default: 'Город'},
    type: {type: String, default: 'Город'},
    link: {type: String, default: 'Город'}
  }]
}, { timestamps: true, versionKey: false })

const HomeModels = mongoose.model<IHome>('Home', HomeSchema)

export default HomeModels