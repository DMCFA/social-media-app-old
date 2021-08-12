import React, {useEffect} from 'react'
import postService from '../../services/posts'

const Posts = () => {

    const [posts, setPosts] = ([])

    useEffect(() => {
        postService
        .getAll().then(posts => setPosts(posts))
    }, [])

    return(
        <div>
            {posts.map(post => 
            <Post
                key={post.id}
                post={post}
            />)}
        </div>
    )
}

export default Posts