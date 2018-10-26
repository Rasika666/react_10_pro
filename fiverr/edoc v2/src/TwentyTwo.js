import React, { Component } from 'react'
import './css/22.css'
import EFormHeader_22 from './c22/EFormHeader_22';
import EFormBody_22 from './c22/EFormBody_22';
import EFormBottom_22 from './c22/EFormBottom_22';

export default class TwentyTwo extends Component {
    componentWillMount = () =>{
        document.body.style.backgroundColor = "#D8D8D8";
    }
    
    componentWillUnmount = () => {
        document.body.style.backgroundColor = null;
    }
  render() {
    return (
      <div>
    <div className="container">
      <div className="row">
        <div className="col-12 py-2">
          <p className="fz13">Today / <a href="#" className="cb">E-forms</a></p>
          <h5 className="fw7">E-Forms</h5>
          <div className="row ">
            <div className="col-12">
              <div className="bgw py-4 px-3">
                <EFormHeader_22/>

                <div className="row">
                  <div className="col-12">
                    <EFormBody_22/>
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
