import React, { Component } from 'react'
import './css/24.css'
import Header2 from './c24/Header2';
import Path from './c24/Path';
import CreateDocMenu from './c24/CreateDocMenu'
import Table_24 from './c24/Table_24';


export default class TwentyFour extends Component {

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

                    <CreateDocMenu cnameDetails="btn btn-outline-success px-5 fw7" cnameType="btn btn-success px-5 fw7" cnameMapping="btn btn-outline-success px-5 fw7"/>
                    <Table_24/>
                  
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
