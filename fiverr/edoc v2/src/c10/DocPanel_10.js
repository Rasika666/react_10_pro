import React, { Component } from 'react'
import DocUnit_10 from './DocUnit_10';
import $ from 'jquery';

export default class DocPanel_10 extends Component {
 
  componentDidMount = () =>{
    $('.Ml').siblings('.bxx').hide('fast');
    $('.Ml').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log('clicked');
    $(this).siblings('.bxx').toggle('fast');
    });
  } 
  render() {
    return (
      <div>
        <div>
          <div className="row px-4 m-0 ">
                <div className="col-lg-2 col-md-4 bgsb py-4">
                  <h6 className="fw7 cbl">All Documents</h6>
                 
                  <DocUnit_10 name="Buyer Disclosure"/>
                  <DocUnit_10 name="Mold Disclosure"/>
                  <DocUnit_10 name="Buyer Disclosure"/>
                  <DocUnit_10 name="Buyer Disclosure"/>
                  
                </div>
                <div className="col-lg-10 col-md-8">
                  <h5>Content goes here</h5>
                </div>
              </div>
      </div>
      </div>
    )
  }
}
