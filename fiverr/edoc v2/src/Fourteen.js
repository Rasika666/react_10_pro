import React, { Component } from 'react'
import './css/14.css'
import $ from 'jquery';
import AlertModel_14 from './c14/AlertModel_14';

export default class Fourteen extends Component {

    componentWillMount = () => {
        document.body.style.backgroundColor = "#F1F3F6";
    }

    componentWillUnmount = () =>{
        document.body.style.backgroundColor = null;
    }

    componentDidMount = () => {
        $('.RM').hide('fast');
        $('#rm').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        console.log('clicked');
        $(this).hide('fast');
        $('.RM').show('fast');
      });

    }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Launch demo modal
        </button>
        <AlertModel_14/>
      </div>
    )
  }
}
