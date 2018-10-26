import React, { Component } from 'react'
import Header from './c6/Header';
import Bottom from './c6/Bottom';
import OfferActivity from './c6/OfferActivity';
import Search from './c6/Search';
import AvailableDoc_5 from './c6/AvailableDoc_5';
import AssignDoc_5 from './c6/AssignDoc_5';
import ProgressBar from './c6/progressBar';
import Exchanger from './c6/Exchanger';
import './css/6.css'

export default class Six extends Component {
  render() {
    return (
      <div className="bgelb">
        <Header/>
    <div className="container-fluid px-0 ">
      <div className="row m-0">
        <div className="col-xl-2"></div>
        <div className="col-xl-10 px-0">
          <section className="content fz13">
            <div className="">
              <OfferActivity/>
              <div className="row px-4 m-0">
                <div className="col-12 p-2 fw7 brlg1 fz16">
                  <p className="text-uppercase m-0">Create an offer</p>
                  <p className="m-0">Provide the detailed information to create a new offer</p>
                </div>
                <div className="col-12 bgw  px-3 brlg1">
                  <ProgressBar img="img/5-step4.png"/>
                    <Search/>
                  <div className="row pb-3 px-3">
                    <AvailableDoc_5/>
                    <Exchanger/>
                    <AssignDoc_5/>
                  </div>

                </div>
              </div>
              <Bottom/>
            </div>
          </section>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
