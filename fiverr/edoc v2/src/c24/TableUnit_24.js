import React, { Component } from 'react'

const dstyle = {
    width: '20px',
    height: '20px'
};

export default class TableUnit_24 extends Component {
  render() {
    return (
    <tr>
        <td className=" py-1">Page 1</td>
        <td className=" py-1">
          <input type="checkbox" style={dstyle}  />
        </td>
        <td className=" py-1">
          <input type="checkbox" style={dstyle} />
        </td>
    </tr>
    )
  }
}
