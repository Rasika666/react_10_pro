import React, { Component } from 'react'
import '../css/header2.css'

export default class Header2 extends Component {
  render() {
    return (
        <header>
        <nav className="navbar navbar-expand-xl navbar-dark bgb">
          <a className="navbar-brand" href="#"><img src="img/logo.png" className="img-fluid" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-home mr-1"></i>Today</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-share-alt mr-1"></i>Contacts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-dollar-sign mr-1"></i>Transactions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-users mr-1"></i>Agents</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-graduation-cap mr-1"></i>Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-list mr-1"></i>Content</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-cogs mr-1"></i>Reports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-cogs mr-1"></i>Company Setup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-sliders-h mr-1"></i>Office Managment</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link fz18 px-xl-3"><i className="fas fa-comments"></i><span className="d-inline-block d-xl-none ml-1">Notifications</span></a>
              </li>
              <li className="nav-item pt-1">
                <a href="#" className="nav-link fz14"><i className="fas mr-1 fa-id-card"></i>Hello Preeti Menon</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
