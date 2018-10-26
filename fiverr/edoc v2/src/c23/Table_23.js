import React, { Component } from 'react'
import TableUnit_23 from './TableUnit_23';

export default class Table_23 extends Component {
  render() {
    return (
        <div className="row pt-4">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table fz14 table-striped" >
              <thead className="bglgr text-uppercase">
                <tr>
                  <th scope="col">Page Name</th>
                  <th scope="col">Action</th> 
                </tr>
              </thead>
              <tbody className="mt-2">
                <TableUnit_23 pageNo="Page 1"/>
                <TableUnit_23 pageNo="Page 1"/>
                <TableUnit_23 pageNo="Page 1"/>
                <TableUnit_23 pageNo="Page 1"/>
                <TableUnit_23 pageNo="Page 1"/>
                <TableUnit_23 pageNo="Page 1"/>
                <TableUnit_23 pageNo="Page 1"/>
                <TableUnit_23 pageNo="Page 1"/>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
