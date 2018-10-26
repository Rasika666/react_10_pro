import React, { Component } from 'react'
import $ from 'jquery';
import FormModel_11 from './c11-12/FormModel_11';
import './css/11.css'

export default class Eleven extends Component {
    componentWillMount =()=> {
        document.body.style.backgroundColor = "#F1F3F6";
    }

    componentWillUnmount = () => {
        document.body.style.backgroundColor = null;
    }

    componentDidMount = () => {
        $('.info1').hide('fast');
        $('.prt1 .txt').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('.info1').toggle('fast')
      });
    }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Launch demo modal
        </button>
        <FormModel_11/>
    
      </div>
    )
  }
}
