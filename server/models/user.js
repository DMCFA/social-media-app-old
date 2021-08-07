import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        minlength: 3,
        unique: true
    },
    passwordHash: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id,
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

userSchema.plugin(uniqueValidator)

export default mongoose.model('User', userSchema)