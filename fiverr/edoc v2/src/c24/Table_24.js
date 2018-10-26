import React, { Component } from 'react'
import TableUnit_24 from './TableUnit_24';


const dstyle = {
    width: '20px',
    height: '20px'
};

export default class Table_24 extends Component {
  render() {
    return (
        <div className="CNT">

        <div className="row">
          <div className="col-12 pt-4">
            <h5 className="fw7 pb-3">What Type of document is this?</h5>
            <ul className="nav nav-tabs fw6" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link px-4 active" id="home-tab" data-toggle="tab" href="#lising" role="tab" aria-controls="home" aria-selected="true">Listing <i className="fas fa-caret-down"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4 cb" id="profile-tab" data-toggle="tab" href="#sale" role="tab" aria-controls="profile" aria-selected="false">Sale <i className="fas fa-caret-down"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4 cb" id="contact-tab" data-toggle="tab" href="#rental" role="tab" aria-controls="contact" aria-selected="false">Rental <i className="fas fa-caret-down"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4 cb" id="contact-tab" data-toggle="tab" href="#referral" role="tab" aria-controls="contact" aria-selected="false">Referral <i className="fas fa-caret-down"></i></a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active bgelb py-3" id="lising" role="tabpanel">
                <div className="table-responsive">
                  <table className="table fz14 table-striped" >
                    <thead className="bglgr text-uppercase">
                      <tr>
                        <th scope="col">Page Name</th>
                        <th scope="col">Is required</th> 
                        <th scope="col">needs Review</th> 
                      </tr>
                    </thead>
                    <tbody className="mt-2">
                      <TableUnit_24/>
                      <TableUnit_24/>
                      <TableUnit_24/>
                      <TableUnit_24/>
                      <TableUnit_24/>
                      <TableUnit_24/>
                      <TableUnit_24/>
                      
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="sale" role="tabpanel" >...</div>
              <div className="tab-pane fade" id="rental" role="tabpanel" >...</div>
              <div className="tab-pane fade" id="referral" role="tabpanel" >...</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
