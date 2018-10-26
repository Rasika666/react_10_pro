import React, { Component } from 'react'
import SelectContactUnit_11 from './SelectContactUnit_11';
import DocSendUnit_11 from './DocSendUnit_11';


export default class Panel_11 extends Component {
  render() {
    return (
      <div>
        <div className="row  m-0 pb-3 px-3">
              <div className="col-md-6 Fbox ">
                <div className="bgelb brlg1 p-2 px-3 brlb1">
                  <p className=" fz14 fw6 m-0 text-uppercase">1. Select Contacts</p>
                </div>
                <hr className="border-danger m-0" />
                <div className="bgw p-3 brlb1 fw6 ">
                  
                  <SelectContactUnit_11 name="Joe Bates" contact="Buyer Contact"/>
                  <SelectContactUnit_11 name="Joe Bates" contact="Buyer Contact"/>
                  <SelectContactUnit_11 name="Joe Bates" contact="Buyer Contact"/>

                </div>
              </div>
              <div className="col-md-6 Fbox ">
                <div className="bgelb brlg1 p-2 px-3 brlb1">
                  <p className=" fz14 fw6 m-0 text-uppercase">1. Select Documents to send</p>
                </div>
                <hr className="border-danger m-0" />
                <DocSendUnit_11/>
                <p className="m-0 fz13 py-2 pl-1">Combine all documents into one PDF</p>
              </div>
            </div>
      </div>
    )
  }
}
