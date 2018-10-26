import React, { Component } from 'react'
import FormModel_8 from './c8/FormModel_8';
import './css/8.css'

export default class Eight extends Component {
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

      <FormModel_8/>
      </div>
    )
  }
}
