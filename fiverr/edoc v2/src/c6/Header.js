import React, { Component } from 'react'
import $ from 'jquery';
import '../css/header1.css'

export default class Header extends Component {


  componentDidMount = () => {
    $('.mnu').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
      $('header .posa').toggle('fast');
    });
    $('header .lnk .bx').hide('fast');
    $('header .lnk a.btn-link').on('click', function(event) {
      event.preventDefault();
      $(this).children('.arr').toggleClass('fa-angle-down').toggleClass('fa-angle-left');
      $(this).siblings('ul').toggle('fast');
    });
  }
  render() {
    return (
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-dark  bgb">
          <a className="navbar-brand" href="#"><img src="img/logo.png" className="w-100 img-fluid" alt="" /></a>
          <ul className="navbar-nav mr-auto ml-4 ml-sm-3">
            <li className="nav-item mnu">
              <a className="nav-link" href="#"><i className="fas fa-bars"></i></a>
            </li>
          </ul>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ml-auto">
            <li className="nav-item px-2">
              <a className="nav-link px-3" href="#"><i className="mr-2 fas fa-address-card"></i>Hello Smart Agent</a>
            </li>
            <li className="d-lg-block d-none">
              <a href="#" className="nav-link">|</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link px-3" href="#"><i className="fas fa-user mr-2"></i>Logout</a>
            </li>
          </div>
        </div>
      </nav>
      <div className="posa col-9 col-sm-4 col-md-3 col-lg-2 px-0">
        <div className="row m-0">
          <div className=" bgb px-0 menu w-100">
            <ul className="bglb list-unstyled m-0 py-3 d-block  fz14">
              <li className="ml-4 py-1">
                <img src="img/logo.png" className="img-fluid" alt="" />
              </li>
              <li className="lnk m-0 ml-3 py-1 mt-2">
                <a href="#" className="btn-link d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Smartdocs
                  <i className="float-right mt-1 fas fa-angle-left ml-3 arr"></i>
                </a>
                <ul className="m-0 list-unstyled ml-4 bx py-2">
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Create Offer</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Send Documents</a></li>
                </ul>
              </li>
              <li className="lnk m-0 ml-3 py-1">
                <a href="#" className="btn-link d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-folder-open mr-2"></i>
                  Tarnsactions
                  <i className="float-right mt-1 fas fa-angle-left ml-3 arr"></i>
                </a>
                <ul className="m-0 list-unstyled ml-4 bx py-2">
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Create Offer</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Send Documents</a></li>
                </ul>
              </li>
              <li className="lnk m-0 ml-3 py-1">
                <a href="#" className="btn-link d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-bullhorn mr-2"></i>
                  Marketing
                  <i className="float-right mt-1 fas fa-angle-left ml-3 arr"></i>
                </a>
                <ul className="m-0 list-unstyled ml-4 bx py-2">
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Create Offer</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Send Documents</a></li>
                </ul>
              </li>
              <li className="lnk m-0 ml-3 py-1">
                <a href="#" className="btn-link d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-graduation-cap mr-2"></i>
                  Education
                  <i className="float-right mt-1 fas fa-angle-left ml-3 arr"></i>
                </a>
                <ul className="m-0 list-unstyled ml-4 bx py-2">
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Create Offer</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Send Documents</a></li>
                </ul>
              </li>
              <li className="lnk m-0 ml-3 py-1">
                <a href="#" className="btn-link d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-home mr-2"></i>
                  Office
                  <i className="float-right mt-1 fas fa-angle-left ml-3 arr"></i>
                </a>
                <ul className="m-0 list-unstyled ml-4 bx py-2">
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Create Offer</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-2 tdn">Send Documents</a></li>
                </ul>
              </li>
              <li className="lnk m-0 ml-3 py-1">
                <a href="#" className="d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  calendar
                </a>
              </li>
              <li className="lnk m-0 ml-3 py-1">
                <a href="#" className="d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-cloud-download-alt mr-2"></i>
                  downloads
                </a>
              </li>
              <li className="lnk m-0 ml-3 py-1">
                <a href="#" className="d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-question-circle mr-2"></i>
                  Faqs
                </a>
              </li>
              <li className="lnk m-0 ml-3 py-1">
                <a href="#" className="d-block text-uppercase text-white py-2 px-4 tdn">
                  <i className="fas fa-comments mr-2"></i>
                  contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    )
  }
}
