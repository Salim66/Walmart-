import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const PageLayout = () => {
  return (
      <>
          <Header />
          <Sidebar />

          <div class="main-wrapper">

              <div class="page-wrapper">

                  <div class="content container-fluid">

                      <Outlet />

                  </div>
              </div>

          </div>
      </>
  )
}

export default PageLayout