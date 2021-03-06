import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
  <section>
    <h1>Dashboard</h1>
    <p>This is the dashboard.</p>
    <Link to="/entries" className="button">
      View Entries
    </Link>
  </section>
)

export default Dashboard
