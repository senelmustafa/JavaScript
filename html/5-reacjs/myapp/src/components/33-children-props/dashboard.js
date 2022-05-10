import React from 'react'
import { Link } from 'react-router-dom'
import Template from './template'

const Dashboard = () => {
  return (
      <Template> 
        <div>Dashboard</div>
        <Link to='/users'>users sayfasına git </Link>
      </Template>
  )
}

export default Dashboard