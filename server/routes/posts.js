/* eslint-disable no-unused-vars */

import express from 'express'
import {
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost
} from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post()