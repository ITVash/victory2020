import mongoose from 'mongoose'

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/victory', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
}

export default connect