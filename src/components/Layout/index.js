import React from 'react'
import { Outlet } from 'react-router-dom'
import Slidebar from '../Slidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="app">
      <Slidebar />
      <div className="page">
        <span className="tags top-tags-html">&lt;body&gt;</span>
        <span className="tags top-tags">&lt;abdalrahman&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/abdalrahman&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
