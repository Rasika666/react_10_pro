import React, { Component } from 'react'

export default class TableUnit_23 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         pageNo : this.props.pageNo
      }
    }
    
  render() {
    return (
    <tr>
        <td className="">{this.state.pageNo}</td>
        <td className="">
          <ul className="list-inline m-0 text-center text-md-left">
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-pencil-alt"></i></a></li>
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-trash-alt  "></i></a></li>
          </ul>
        </td>
    </tr>
    )
  }
}
