import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav>
    <section>
      <Link to="/">Dashboard</Link>
      <Link to="/entries">Entries</Link>
    </section>
  </nav>
)
