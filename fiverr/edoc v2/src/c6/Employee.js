import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : this.props.name,
         company : this.props.company,
         role : this.props.role,
         img : this.props.img
      }
    }
    
  render() {
    return (
        <div className="prt brlb1 p-2 br0 bgelb mb-2 d-flex">
        <div className="img">
          <img src="img/pimg.png" className="img-fluid" alt="" />
        </div>
        <div className="d-inline-flex justify-content-between px-2 w-100">
          <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw6 fz16">{this.state.name}</p>
            <p className="small m-0"><span className="text-muted">Company:</span> {this.state.company}</p>
          </div>
          <div className="text-right">
            <p className="small m-0"><span className="text-muted">Role:</span> {this.state.role}</p>
          </div>
        </div>
      </div>
    )
  }
}
