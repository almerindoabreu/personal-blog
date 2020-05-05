import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => {
  const postList = [
    {
      node: {
        frontmatter: hit,
        timeToRead: hit.timeToRead,
        fields: hit.fields,
      },
    },
  ]
  return <PostItem postList={postList} />
}

export default Hit
