import React, { Component } from 'react'

export default class EFormHeader_22 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         TransactionType :''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            TransactionType : this.target.value
        });
    }
    
  render() {
    return (
    <div className="row toprow">
        <div className="col-md-8 py-2">
          <ul className="list-inline">
            <li className="list-inline-item fz14">
              Transaction Type
            </li>
            <li className="list-inline-item">
              <select className="custom-select fz13" value={this.state.TransactionType} onChange={this.onChange}>
                <option selected>All Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </li>
            <li className="list-inline-item">
              <div className="posr">
                <input type="text" className="form-control pl-4" placeholder="Search" />
                <i className="fas fa-search posa"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-4 py-2 text-right">
          <div className="dropdown">
            <button className="btn btn-primary fz14 px-4 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Import Forms
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item fz13" href="#">From ZipForms</a>
              <a className="dropdown-item fz13" href="#">Upload a File</a>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
