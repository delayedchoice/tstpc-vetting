import React from 'react'
import { Link } from 'react-router-dom'

export const Entry = ({ entry }) => (
  <article className='post'>
     <h2>{entry.id}</h2>

      <Link to={`/entries/${entry.id}`} className="button">
        View Entry
      </Link>
  </article>
)
