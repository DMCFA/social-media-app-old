import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema({
    title: String,
    author: String,
    message: String,
    comments: [{
        body: String,
        date: Date
    }],
    date: {
        type: Date,
        default: new Date ()
    },
    keywords: [String],
    imageFile: String,
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id,
        delete returnedObject.__v
    }
})

export default mongoose.model('Post', postSchema)