import React, { Component } from 'react'

export default class TableUnit_29 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         docName : this.props.docName,
         pageCount : this.props.pageCount,
         action :''
      }
    }
    
  render() {
    return (
    <tr>
        <td className="">{this.state.docName}</td>
        <td className="">{this.state.pageCount}</td>
        <td className="">
          <a href="#" className="text-danger" data-placement="right" data-toggle="tooltip" title="Assign this document to the current form"><i className="fas fa-plus mr-2"></i>Assign</a>
        </td>
    </tr>
    )
  }
}
