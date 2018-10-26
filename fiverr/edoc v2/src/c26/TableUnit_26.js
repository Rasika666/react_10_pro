import React, { Component } from 'react'


const dstyle = {
    width: '20px',
    height: '20px'

};

export default class TableUnit_26 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : this.props.name,
         version : this.props.version,
         last_download : this.props.last_download
      }
    }
    
  render() {
    return (
    <tr>
        <td className="">{this.state.name}</td>
        <td className="text-center">{this.state.version}</td>
        <td className="text-center">{this.state.last_download}</td>
        <td className=" text-center">
          <input type="checkbox" style={dstyle}  />
        </td>
    </tr>
    )
  }
}
