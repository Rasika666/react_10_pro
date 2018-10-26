import React, { Component } from 'react'

export default class CreateDocMenu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cnameDetails : this.props.cnameDetails,
       cnameType : this.props.cnameType,
       cnameMapping : this.props.cnameMapping
    }
  }
  
  render() {
    return (
      <ul className="list-inline text-center">
          <li className="list-inline-item py-2">
            <a href="#" className={this.state.cnameDetails}><span className="px-5">Details</span></a>
          </li>
          <li className="list-inline-item py-2">
            <a href="#" className={this.state.cnameType}><span className="px-5">Type</span></a>
          </li>
          <li className="list-inline-item py-2">
            <a href="#" className={this.state.cnameMapping}><span className="px-5">Mapping</span></a>
          </li>
      </ul>
    )
  }
}
