import React, { Component } from 'react'
import './css/29.css'
import Header2 from './c29/Header2'
import Form_28 from './c29/Form_28';
import AvailableDoc_29 from './c29/AvailableDoc_29';
import AssignDoc_29 from './c29/AssignDoc_29';

export default class TwentyNine extends Component {

    componentWillMount = () => {
        document.body.style.backgroundColor = "#F1F3F6";
    }

    componentWillUnmount = () =>{
        document.body.style.backgroundColor = null;
    }

  render() {
    return (
      <div>
        <Header2/>
    <div className="container">
      <div className="row">
        <div className="col-12 py-2 pt-4">
          <p className="fz13">Today / <a href="#" className="cb">Form Templates</a> / <a href="#" className="cb">Edit</a></p>
          <h4 className="fw7">Edit Form Template</h4>
          <div className="row mt-4">
            <div className="col-12">
              <div className="bgw py-4 px-3">
              
                <Form_28/>

                <div className="row">

                  <AvailableDoc_29/>
                  <AssignDoc_29/>

                </div>
                <ul className="list-inline m-0 text-right">
                  <li className="list-inline-item">
                    <a href="#" className="cb fw7 tdu fz14">Back to list</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="fw7 fz14 btn btn-primary px-4">Save</a>
                  </li>
                </ul>
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
