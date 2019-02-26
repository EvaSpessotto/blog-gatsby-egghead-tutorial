import React from 'react';
import { graphql, Link } from 'gatsby';

const AllTagsTemplate = ({data, pageContext}) => {
  const {tags} = pageContext
  return(
    <div style={{fontFamily:'Helvetica'}}>
      <div>
        <ul>
          {
            tags.map((tagName, index) => {
              return(
                <li key={index} style={{marginTop:'1rem'}}>
                  <Link to={`/tags/${tagName}`}>
                    {tagName}
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

export default AllTagsTemplate;