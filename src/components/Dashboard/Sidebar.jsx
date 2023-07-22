import React from 'react'

const Sidebar = () => {
  return (
      <>
          <div className="sidebar" id="sidebar">
              <div className="sidebar-inner slimscroll">
                  <div id="sidebar-menu" className="sidebar-menu">
                      <ul>
                          <li className="menu-title">
                              <span>Main</span>
                          </li>
                          <li className="active">
                              <a href="index.html"><i className="fe fe-home"></i> <span>Dashboard</span></a>
                          </li>
                          <li>
                              <a href="appointment-list.html"><i className="fe fe-layout"></i> <span>Appointments</span></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Sidebar