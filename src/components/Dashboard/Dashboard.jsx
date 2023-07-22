import React from 'react'
import Avatar from '../Profile/Avatar'
import Topbar from './TopBar'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
      <>
          <Topbar />
          <Sidebar />
          <div class="main-wrapper">

              <div class="page-wrapper">

                  <div class="content container-fluid">

                      <div class="page-header">
                          <div class="row">
                              <div class="col-sm-12">
                                  <h3 class="page-title">Welcome Admin!</h3>
                                  <ul class="breadcrumb">
                                      <li class="breadcrumb-item active">Dashboard</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-xl-3 col-sm-6 col-12">
                              <div class="card">
                                  <div class="card-body">
                                      <div class="dash-widget-header">
                                          <span class="dash-widget-icon text-primary border-primary">
                                              <i class="fe fe-users"></i>
                                          </span>
                                          <div class="dash-count">
                                              <h3>168</h3>
                                          </div>
                                      </div>
                                      <div class="dash-widget-info">
                                          <h6 class="text-muted">Doctors</h6>
                                          <div class="progress progress-sm">
                                              <div class="progress-bar bg-primary w-50"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-xl-3 col-sm-6 col-12">
                              <div class="card">
                                  <div class="card-body">
                                      <div class="dash-widget-header">
                                          <span class="dash-widget-icon text-success">
                                              <i class="fe fe-credit-card"></i>
                                          </span>
                                          <div class="dash-count">
                                              <h3>487</h3>
                                          </div>
                                      </div>
                                      <div class="dash-widget-info">

                                          <h6 class="text-muted">Patients</h6>
                                          <div class="progress progress-sm">
                                              <div class="progress-bar bg-success w-50"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-xl-3 col-sm-6 col-12">
                              <div class="card">
                                  <div class="card-body">
                                      <div class="dash-widget-header">
                                          <span class="dash-widget-icon text-danger border-danger">
                                              <i class="fe fe-money"></i>
                                          </span>
                                          <div class="dash-count">
                                              <h3>485</h3>
                                          </div>
                                      </div>
                                      <div class="dash-widget-info">

                                          <h6 class="text-muted">Appointment</h6>
                                          <div class="progress progress-sm">
                                              <div class="progress-bar bg-danger w-50"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-xl-3 col-sm-6 col-12">
                              <div class="card">
                                  <div class="card-body">
                                      <div class="dash-widget-header">
                                          <span class="dash-widget-icon text-warning border-warning">
                                              <i class="fe fe-folder"></i>
                                          </span>
                                          <div class="dash-count">
                                              <h3>$62523</h3>
                                          </div>
                                      </div>
                                      <div class="dash-widget-info">

                                          <h6 class="text-muted">Revenue</h6>
                                          <div class="progress progress-sm">
                                              <div class="progress-bar bg-warning w-50"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-md-12">

                              <div class="card card-table">
                                  <div class="card-header">
                                      <h4 class="card-title">Appointment List</h4>
                                  </div>
                                  <div class="card-body">
                                      <div class="table-responsive">
                                          <table class="table table-hover table-center mb-0">
                                              <thead>
                                                  <tr>
                                                      <th>Doctor Name</th>
                                                      <th>Speciality</th>
                                                      <th>Patient Name</th>
                                                      <th>Apointment Time</th>
                                                      <th>Status</th>
                                                      <th class="text-right">Amount</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>
                                                          <h2 class="table-avatar">
                                                              <a href="profile.html" class="avatar avatar-sm mr-2">
                                                                  <Avatar classData="avatar-img rounded-circle" altData="User Image" />
                                                              </a>
                                                              <a href="profile.html">Dr. Ruby Perrin</a>
                                                          </h2>
                                                      </td>
                                                      <td>Dental</td>
                                                      <td>
                                                          <h2 class="table-avatar">
                                                              <a href="profile.html" class="avatar avatar-sm mr-2">
                                                                  <Avatar classData="avatar-img rounded-circle" altData="User Image" />
                                                              </a>
                                                              <a href="profile.html">Charlene Reed </a>
                                                          </h2>
                                                      </td>
                                                      <td>9 Nov 2019 <span class="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                                                      <td>
                                                          <div class="status-toggle">
                                                              <input type="checkbox" id="status_1" class="check" checked />
                                                                  <label for="status_1" class="checktoggle">checkbox</label>
                                                          </div>
                                                      </td>
                                                      <td class="text-right">
                                                          $200.00
                                                      </td>
                                                  </tr>
                                                  
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>

          </div>
      </>
  )
}

export default Dashboard