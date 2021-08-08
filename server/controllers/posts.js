import { jwt } from 'jsonwebtoken'

import { Post } from '../models/post'
import { User } from '../models/user'

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

const createPost = async (req, res) => {
    const { body, title, author, message, keywords, imageFile } = req.body

    const user = await User.findById(body.userId)

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