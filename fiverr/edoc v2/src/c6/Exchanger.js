import React, { Component } from 'react'

export default class Exchanger extends Component {
  render() {
    return (
        <div className="col-md-2 d-flex flex-column justify-content-center">
        <ul className="list-unstyled m-0 py-3 text-center">
          <li className="my-2">
            <a href="#" className="btn btn-danger br0 px-4 fz13 w-75 mx-auto d-block">Add <i className=" ml-1 fas fa-angle-right"></i></a>
          </li>
          <li className="my-2">
            <a href="#" className="btn btn-danger br0 px-4 fz13 w-75 mx-auto d-block"><i className="mr-1 fas fa-angle-left"></i> Remove</a>
          </li>

        </ul>
      </div>
    )
  }
}
