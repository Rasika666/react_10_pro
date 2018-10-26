import React, { Component } from 'react'
import Employee from './Employee';

export default class AssignDoc_5 extends Component {
  render() {
    return (
      <div className="col-md-5 Fbox p-0">
        <div className="bgelb brlg1 p-2 px-3 brlb1">
          <p className=" fz14 fw6 m-0">Assigned Documents</p>
        </div>
        <hr className="border-danger m-0" />
        <div className="bgw p-3 brlb1 fw6">
        <Employee name = "Joe Bates" role= "Outside Agent" company="HomeSmart"/>
          <Employee name = "Joe Bates" role= "Outside Agent" company="HomeSmart"/>
          <Employee name = "Joe Bates" role= "Outside Agent" company="HomeSmart"/>
          <Employee name = "Joe Bates" role= "Outside Agent" company="HomeSmart"/>
        </div>
      </div>
    )
  }
}
