import React, { Component } from 'react'
import Search_29 from './Search_29';
import TableUnit_29 from './TableUnit_29';

export default class AvailableDoc_29 extends Component {
  render() {
    return (
    <div className="col-lg-6 py-3">
        <h6 className="fw7">Available Documents</h6>
        <hr className="mt-0 mb-1"  />
        <div className="row justify-content-end pb-2">

          <Search_29/>

        </div>
        <div className="table-responsive">
          <table className="table fz14 table-striped table-sm " >
            <thead className="bglgr text-uppercase fz12">
              <tr>
                <th scope="col">Document Name</th>
                <th scope="col">Page Count</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="mt-2 fz12">
              <TableUnit_29 docName="Affiliated Business Disclosure" pageCount="2"/>
              <TableUnit_29 docName="Affiliated Business Disclosure" pageCount="2"/>
              <TableUnit_29 docName="Affiliated Business Disclosure" pageCount="2"/>
              <TableUnit_29 docName="Affiliated Business Disclosure" pageCount="2"/>
              <TableUnit_29 docName="Affiliated Business Disclosure" pageCount="2"/>
              <TableUnit_29 docName="Affiliated Business Disclosure" pageCount="2"/>
              <TableUnit_29 docName="Affiliated Business Disclosure" pageCount="2"/>
              
            </tbody>
          </table>
        </div>
        <p className="fz10 ml-2">Showing 1 to 6 of 6 entries (filtered from 755 total entries)</p>
    </div>
    )
  }
}
