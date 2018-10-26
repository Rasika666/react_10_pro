import React, { Component } from 'react'
import FormModel_9 from './c9/FormModel_9';
import './css/9.css'

export default class Nine extends Component {
    componentWillMount() {
        document.body.style.backgroundColor = "#F1F3F6";
    }
    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Launch modal
        </button>
        <FormModel_9/>

      </div>
    )
  }
}
