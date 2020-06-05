import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchEntry, entrySelector } from '../slices/entry'

const Detail = ({ match }) => {
  const dispatch = useDispatch()
  const { entry, loading, hasErrors } = useSelector(entrySelector)

  useEffect(() => {
    const { id } = match.params

    dispatch(fetchEntry(id))
  }, [dispatch, match])

  const renderDetail = () => {
    if (loading) return <p>Loading entry...</p>
    if (hasErrors) return <p>Unable to display entry.</p>

    return  <article className={'post'}>
              <h2>{entry.id}</h2>
              <p>{entry.magBin}</p>
              <p>{entry.sector}</p>
              <p>{entry.tic}</p>
              <p>{entry.isReal}</p>
              <p>{entry.comments}</p>
              <p>{entry.rp}</p>
              <p>{entry.tc}</p>
              <p>{entry.depth}</p>
              <p>{entry.duration}</p>
              <p>{entry.tau}</p>
              <p>{entry.rad}</p>
              <p>{entry.mass}</p>
              <p>{entry.teff}</p>
              <p>{entry.ra}</p>
              <p>{entry.dec}</p>
              <p>{entry.tmag}</p>
              <p>{entry.vmag}</p>
              <p>{entry.jmag}</p>
            </article>
  }

  return (
    <section>
      {renderDetail()}
    </section>
  )
}

export default Detail
