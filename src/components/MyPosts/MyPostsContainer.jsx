import React from 'react'
import PostItem from '../UI/PostItem/PostItem'
import { useSelector, useDispatch } from 'react-redux'
import MyPosts from './MyPosts'

const MyPostsContainer = () => {
  const posts = useSelector((state) => state.profile.profilePage.posts)
  const dispatch = useDispatch()

  let postsList = posts.map(post => {
    return (
      <PostItem key={post.id} text={post.text} likes={post.likes} dislikes={post.dislikes} />
    )
  })

  return <MyPosts postsList={postsList} dispatch={dispatch} />
}

export default MyPostsContainer