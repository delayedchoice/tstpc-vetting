import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchEntries, entriesSelector } from '../slices/entries'

import { Entry } from '../components/Entry'

const Entries = () => {
  const dispatch = useDispatch()
  const { entries, loading, hasErrors } = useSelector(entriesSelector)

  useEffect(() => {
    dispatch(fetchEntries())
  }, [dispatch])

  const renderEntries = () => {
    if (loading) return <p>Loading entries...</p>
    if (hasErrors) return <p>Unable to display entries.</p>

    return entries.map(entry => <Entry key={entry.id} entry={entry} />)
  }

  return (
    <section>
      <h1>Entries</h1>
      {renderEntries()}
    </section>
  )
}

export default Entries
