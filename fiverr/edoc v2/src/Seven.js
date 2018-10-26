import React, { Component } from 'react'
import FormModel_7 from './c7/FormModel_7';
import './css/7.css'


export default class Seven extends Component {
    componentWillMount() {
        document.body.style.backgroundColor = "#F1F3F6";
    }
    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }
  render() {
    return (
      <div className>
    
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Launch modal
        </button>
    

        <FormModel_7/>
    
      </div>
    )
  }
}
