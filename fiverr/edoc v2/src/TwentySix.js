import React, { Component } from 'react'
import './css/26.css'
import Menu_26 from './c26/Menu_26';
import Search_26 from './c26/Search_26';
import TableUnit_26 from './c26/TableUnit_26';
import EFormBottom_22 from './c26/EFormBottom_22';


const dstyle = {
    width: '20px',
    height: '20px'

};
export default class TwentySix extends Component {

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
          <p className="fz13">Today / <a href="#" className="cb">ZipForms</a></p>
          <h4 className="fw7">ZipForms Sync</h4>
          <div className="row mt-4">
            <div className="col-12">
              <div className="bgw pb-4 px-3">

                <Menu_26/>

                <Search_26/>

                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table fz14 table-striped" >
                        <thead className="bglgr text-uppercase">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col" className="text-center">Version</th>
                            <th scope="col" className="text-center">Last Donwload</th>
                            <th scope="col" className="text-center py-1">
                              <a href="#" className="btn fw7 cb btn-outline-primary px-3 fz13">Select All</a>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="mt-2">
                          <TableUnit_26 name="Joe John Jane" version="-" last_download="Not Downloaded Yet"/>
                          <TableUnit_26 name="Joe John Jane" version="2/2/22" last_download="2/5/444"/>
                          <TableUnit_26 name="Joe John Jane" version="2/2/22" last_download="2/5/444"/>
                          <TableUnit_26 name="Joe John Jane" version="-" last_download="Not Downloaded Yet"/>
                          <TableUnit_26 name="Joe John Jane" version="2/2/22" last_download="2/5/444"/>
                          <TableUnit_26 name="Joe John Jane" version="2/2/22" last_download="2/5/444"/>
                          <TableUnit_26 name="Joe John Jane" version="-" last_download="Not Downloaded Yet"/>
                          <TableUnit_26 name="Joe John Jane" version="2/2/22" last_download="2/5/444"/>
                          <TableUnit_26 name="Joe John Jane" version="2/2/22" last_download="2/5/444"/>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row fz14 pagination">

                  <EFormBottom_22/>
                  
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
