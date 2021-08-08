import jwt from 'jsonwebtoken'

import Post from '../models/post'
import User from '../models/user'

const getPosts = async (req, res) => {
    const posts = await Post
        .find({}).populate('user', { username: 1 })

    res.json(posts)
}

const getPost = async (req, res) => {
    const id = await req.params.id
    const post = await Post.find(post => post.id === id)
    if (post) {
        res.json(post)
    } else {
        res.status(404).end()
    }
}

//createPost helper function to get auth token
const getToken = req => {
    const auth = req.get('authorization')

    if (auth && auth.toLowerCase().startsWith('bearer ')) {
        return auth.substring(7)
    }
    return null
}


const createPost = async (req, res) => {
    const { title, author, message, keywords, imageFile } = req.body

    const token = getToken(req)

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
        return res.status(401).json({
            error: 'missing validation'
        })
    }

    const user = await User.findById(decodedToken.id)

    const post = new Post({
        title,
        author,
        message,
        keywords,
        imageFile,
        date: new Date(),
        user: user._id
    })

    const savedPost = await post.save()
    user.posts = user.posts.concat(savedPost._id)

    res.json(savedPost)
}

export {
    getPosts,
    getPost,
    createPost
}