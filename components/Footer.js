import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div>
    <p>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
    <div className="fb-share-button" data-href="https://brandzooka.com/register" data-layout="button" data-size="large" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbrandzooka.com%2Fregister&amp;src=sdkpreparse">Share</a></div>
  </div>
)

export default Footer
