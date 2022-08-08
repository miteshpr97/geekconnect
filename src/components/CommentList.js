import React from 'react'
import Comment from './Comment'

const CommentList = ({ CommentList }) => {
  return (
    <>
      {CommentList?.map((singleComment, index) => {
        return (
          <Comment singleComment={singleComment} key={index} />
          
        )
      })
      }

    </>
  )
}

export default CommentList