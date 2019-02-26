import React from 'react';
import { graphql, Link } from 'gatsby';

const SingleTagTemplate = ({data, pageContext} ) => {
  const {posts, tagName} = pageContext
  return(
    <div style={{fontFamily:'Helvetica'}}>
      <div>
        Posts about {`${tagName}`}
      </div>
      <div>
        <ul>
          {
            posts.map((post, index) => {
              return(
                <li key={index} style={{marginTop:'1rem'}}>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default SingleTagTemplate;