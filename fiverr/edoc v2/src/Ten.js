import React, { Component } from 'react'
import Header from './c10/Header';
import OfferActivity from './c10/OfferActivity';
import SubHeader from './c10/SubHeader_10';
import DocPanel_10 from './c10/DocPanel_10';
import './css/10.css'


export default class Ten extends Component {

    componentWillMount =()=> {
        document.body.style.backgroundColor = "#F1F3F6";
    }
    componentWillUnmount = () => {
        document.body.style.backgroundColor = null;
    }


  render() {
    return (
      <div>
        
          <Header/>

    <div className="container-fluid px-0 ">
      <div className="row m-0">
        <div className="col-xl-2"></div>
        <div className="col-xl-10 px-0">
          <section className="content fz13">
            <div className="">
              <OfferActivity/>
              <SubHeader/>
              <DocPanel_10/>
            </div>
          </section>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
