import React, { Component } from 'react'

export default class TableUnit_27 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : this.props.name,
         transaction : this.props.transaction,
         property : this.props.property,
         document : this.props.document,
         action : ''

      }
    }
    
  render() {
    return (
    <tr>
        <td className="">{this.state.name}</td>
        <td className="">{this.state.transaction}</td>
        <td className="">{this.state.property}</td>
        <td className="">{this.state.document}</td>
        <td className="">
          <ul className="list-inline m-0 text-center text-md-right">
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-pencil-alt"></i></a></li>
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-file"></i></a></li>
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-trash-alt"></i></a></li>
          </ul>
        </td>
    </tr>
    )
  }
}
