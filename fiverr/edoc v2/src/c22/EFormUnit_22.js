import React, { Component } from 'react'

export default class EFormUnit_22 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name :this.props.name,
        cName : this.props.cName,
        setup : this.props.setup,
        source : this.props.source
      }
    }
    
  render() {
    return (
    <tr>
        <td className="">Joe John Jane</td>
        <td className="">HomeSmart Master</td>
        <td className="">
        <ul className="list-inline m-0 text-center text-md-left">
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-pencil-alt"></i></a></li>
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-file-alt"></i></a></li>
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-copy"></i></a></li>
            <li className="list-inline-item px-1"><a href="#" className="cb"><i className="fas fa-save"></i></a></li>
        </ul>
        </td>
        <td className="py-1 text-right">
        <a href="#" className={this.state.cName}>{this.state.setup}</a>
        </td>
    </tr>
      
    )
  }
}
