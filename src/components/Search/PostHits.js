import React from "react"
import PostItem from "../PostItem"

import { connectHits } from "react-instantsearch-dom"

const PostHits = connectHits(({ hits }) => {

  let postList = [];

  hits.map(hit => {
    postList.push({node: {
      frontmatter: hit,
      timeToRead: hit.timeToRead,
      fields: hit.fields,
    }});
  })

  return <PostItem postList={postList} />
})

export default PostHits
