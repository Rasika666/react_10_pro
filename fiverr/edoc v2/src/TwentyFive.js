import React, { Component } from 'react'
import './css/25.css'
import Header2 from './c25/Header2'
import Path from './c25/Path'
import CreateDocMenu from './c25/CreateDocMenu'
import Menu_25 from './c25/Menu_25';
import Form_25 from './c25/Form_25';
import FormName_25 from './c25/FormName_25';

export default class TwentyFive extends Component {

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
                  
                <CreateDocMenu cnameDetails="btn btn-outline-success px-5 fw7" cnameType="btn btn-outline-success px-5 fw7" cnameMapping="btn btn-success px-5 fw7"/>
                  <div className="CNT">
                    <Menu_25/>

                    <div className="row">
                      <Form_25/>
                      <FormName_25/>
                    </div>
                  </div>
                </div>
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
