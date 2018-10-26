import React, { Component } from 'react'
import './css/28.css';
import Header2 from './c28/Header2'
import Form_28 from './c28/Form_28';

export default class TwentyEight extends Component {

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
                
                <ul className="list-inline m-0 text-right">
                  <li className="list-inline-item">
                    <a href="#" className="cb fw7 tdu fz14">Back</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="fw7 fz14 btn btn-primary px-4">Next</a>
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
