import React, { Component } from 'react'

export default class Menu_26 extends Component {
  render() {
    return (
    <div className="row bgbl">
        <div className="col-12  text-white py-4 m-0">
          <p className="lead mb-2">To Import your entire ZipForm Library, enter your ZipForm Credentials Below.</p>
          <form action="" className="form-group m-0">
            <div className="row px-2">
              <div className="col-sm-6 col-md-3 py-1 px-1">
                <input type="text" className="form-control font-italic" placeholder="Username"  />
              </div>
              <div className="col-sm-6 col-md-3 py-1 px-1">
                <input type="text" className="form-control font-italic" placeholder="Password"  />
              </div>
              <div className="col-sm-6 col-md-3 py-1 px-1">
                <button className="btn btn-outline-info bgelb px-4">Sync ZipForms</button>
              </div>
            </div>
          </form>
        </div>
    </div>
    )
  }
}
