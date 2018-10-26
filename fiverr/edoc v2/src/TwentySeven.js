import React, { Component } from 'react'
import './css/27.css'
import Search_27 from './c27/Search_27';
import TableUnit_27 from './c27/TableUnit_27';
import EFormBottom from './c27/EFormBottom_22'

export default class TwentySeven extends Component {

    componentWillMount = () => {
        document.body.style.backgroundColor = "#F1F3F6";
    }

    componentWillUnmount = () =>{
        document.body.style.backgroundColor = null;
    }

  render() {
    return (
      <div>
        <div className="container">
      <div className="row">
        <div className="col-12 py-2 pt-4">
          <p className="fz13">Today / <a href="#" className="cb">Form Templates</a></p>
          <h4 className="fw7">Form Templates</h4>
          <div className="row mt-4">
            <div className="col-12">
              <div className="bgw pb-4 px-3">
                <Search_27/>

                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table fz14 table-striped" >
                        <thead className="bglgr text-uppercase">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Transaction</th>
                            <th scope="col">Property</th>
                            <th scope="col">Documents</th>
                            <th scope="col" className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="mt-2">
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          <TableUnit_27 name="Joe John Jane" transaction="Rental" property="HUD" document="2"/>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row fz14 pagination">
                  <EFormBottom/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
