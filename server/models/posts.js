import mongoose, { mongo } from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{
        body: String,
        date: Date
    }],
    date: {
        type: Date,
        default: Date.now
    },
    likes: Number
})

postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id,
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Post', postSchema)