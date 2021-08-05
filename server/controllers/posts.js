import { jwt } from 'jsonwebtoken'

import { Post } from '../models/post'

const getPosts = async (req, res) => {
    const posts = await Post
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
    const post = new Post(req.body)
    
}

export {
    getPosts,
    getPost
}