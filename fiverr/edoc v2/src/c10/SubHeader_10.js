import React, { Component } from 'react'

export default class SubHeader_10 extends Component {
  render() {
    return (
        <div className="row mb-4 m-0 head px-4">
                <div className="col-12 bgbl  py-3 px-4 d-md-flex justify-content-between">
                  <div className="text-center" >
                    <ul className="list-unstyled m-0">
                      <li className="mt-2 py-1"><a href="#" className="text-white"><i className="fas fa-angle-left mr-2"></i>BACK</a></li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="list-inline m-0 text-center">
                      <li className="list-inline-item d-block d-md-inline-block py-1">
                        <a href="#" className="btn btn-outline-white fz13">EDIT TRANSACTION DETAILS</a>
                      </li>
                      <li className="list-inline-item  d-block d-md-inline-block py-1">
                        <div className="dropdown">
                          <a className="btn btn-outline-white dropdown-toggle fz13" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Assign to Contact
                          </a>

                          <div className="dropdown-menu fz13" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </li>
                      <li className="list-inline-item d-block d-md-inline-block py-1">
                        <a href="#" className="text-white">Add a New Contact</a>
                      </li>
                      <li className="list-inline-item d-block d-md-inline-block py-1 align-middle">
                        <div className="d-flex ">
                          <input type="checkbox" style={{width: '20px',height: '20px'}} />
                          <span className="text-white ml-1">Required</span>
                        </div>
                      </li>
                      <li className="list-inline-item  d-block d-md-inline-block py-1">
                        <div className="dropdown">
                          <a className="btn text-white dropdown-toggle fz13" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add 
                            <span className="caret"></span>
                          </a>

                          <div className="dropdown-menu fz13" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </li>
                      <li className="list-inline-item d-block d-md-inline-block py-1">
                        <a href="#" className="text-white">Save</a>
                      </li>
                      <li className="list-inline-item d-block d-md-inline-block py-1">
                        <a href="#" className="text-white">Save &amp; Share</a>
                      </li>
                      <li className="list-inline-item  d-block d-md-inline-block py-1">
                        <div className="dropdown caretdisable">
                          <a className="btn text-white dropdown-toggle fz13" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v"></i>
                          </a>

                          <div className="dropdown-menu fz13" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
        </div>
    
    )
  }
}
