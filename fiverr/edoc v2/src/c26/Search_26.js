import React, { Component } from 'react'

export default class Search_26 extends Component {
  render() {
    return (
    <div className="row toprow fz14 py-2">
      <div className="col-md-8 py-1">
        <ul className="list-inline m-0">
          <li className="list-inline-item">
            <div className="posr">
              <input type="text" className="form-control pl-4 fz14" placeholder="Search Documents"  />
              <i className="fas fa-search posa"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4 py-2 text-right">
        <ul className="list-inline m-0">
          <li className="list-inline-item">
            <a href="#" className="btn fz14 px-4 fw7"><i className="fas fa-angle-left mr-1"></i>Back to Eforms</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="btn btn-primary fz14 px-4 fw7">Download</a>
          </li>
        </ul>
      </div>
    </div>
    )
  }
}
