import React, { Component } from 'react'
import './css/23.css'
import Header2 from './c23/Header2';
import Path from './c23/Path';
import Form_23 from './c23/Form_23'
import Table_23 from './c23/Table_23'
import CreateDocMenu from './c23/CreateDocMenu';


export default class TwentyThree extends Component {

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
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <Path/>
            <div className="row">
              <div className="col-12 px-4">
                <h4>Create Document</h4>


                <div className="bgw p-3">
                <CreateDocMenu cnameDetails="btn btn-success px-5 fw7" cnameType="btn btn-outline-success px-5 fw7" cnameMapping="btn btn-outline-success px-5 fw7"/>
              <div className="CNT">
                  <Form_23/>
                  <Table_23/>
              </div>
              </div>
                
                <ul className="list-inline text-right mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="fw7 px-2 cb tdu">Cancel</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="fw7 px-2 cb tdu">Back</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="fw7 px-4 btn  btn-primary"><span className="px-3">Next</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}
