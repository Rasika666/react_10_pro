import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
    <div className="row d-flex justify-content-between pb-2">
        <div className="col-md-8">
          <label for="" className="fz13 mb-1 fw6 ml-2">Search for a Contact</label>
          <div className="row">
            <div className="col-md-6">
              <div className="row pl-md-2">
                <div className="col-sm-6 px-sm-2 py-2">
                  <select className="custom-select " >
                    <option selected>Select Party</option>
                    <optgroup label="Options 1">
                       <option>Option 1.1</option>
                       <option>Option 1.2</option>
                    </optgroup>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-sm-6 px-sm-2 py-2">
                  <select className="custom-select" >
                    <option selected>Select Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-2">
              <div className="input-group mb-3">
                <input type="text" className="fz13 form-control" placeholder="Type Contact's Name" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary fz13" type="button"><i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-right d-flex flex-column justify-content-center">
          <div className="dropdown">
            <a className="btn btn-outline-primary dropdown-toggle fz13" href="#" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Create a New Party
            </a>
            <div className="dropdown-menu" >
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
