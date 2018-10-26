import React, { Component } from 'react'

export default class Menu_25 extends Component {
  render() {
    return (
    <div className="row toprow">
        <div className="col-12 bgbl fz14 py-3 px-3 d-flex justify-content-between flex-column flex-sm-row ">
          <ul className="list-inline m-0">
            <li className="list-inline-item py-">
              <a href="#" className="text-white"><i className="fas fa-angle-left mr-1"></i>Back</a>
            </li>
            <li className="list-inline-item px-2">
              <div className="dropdown">
                <a className="btn btn-outline-info text-white fz13 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Page 2
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item fz13" href="#">Merge Field</a>
                  <a className="dropdown-item fz13" href="#">Signature</a>
                  <a className="dropdown-item fz13" href="#">Initials</a>
                  <a className="dropdown-item fz13" href="#">Text</a>
                  <a className="dropdown-item fz13" href="#">Today's Date</a>
                  <a className="dropdown-item fz13" href="#">Name</a>
                  <a className="dropdown-item fz13" href="#">CheckBox</a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="list-inline text-right m-0 py-1">
            <li className="list-inline-item">
              <div className="dropdown">
                <a className="btn text-white fz13 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Add
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item fz13" href="#">Merge Field</a>
                  <a className="dropdown-item fz13" href="#">Signature</a>
                  <a className="dropdown-item fz13" href="#">Initials</a>
                  <a className="dropdown-item fz13" href="#">Text</a>
                  <a className="dropdown-item fz13" href="#">Today's Date</a>
                  <a className="dropdown-item fz13" href="#">Name</a>
                  <a className="dropdown-item fz13" href="#">CheckBox</a>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-white">Save</a>
            </li>
            <li className="list-inline-item">
              <div className="dropdown caretdisable">
                <a className="btn text-white fz13 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-ellipsis-v"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item fz13" href="#">Action</a>
                  <a className="dropdown-item fz13" href="#">Another action</a>
                  <a className="dropdown-item fz13" href="#">Something else here</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
