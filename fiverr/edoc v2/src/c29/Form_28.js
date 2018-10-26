import React, { Component } from 'react'

export default class Form_28 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : '',
         transaction :'',
         property : ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            name : this.target.value,
            transaction :this.target.value,
            property : this.target.value
        })
    }
    
  render() {
    return (
    <form action="" className="form-group m-0">
        <div className="row">
          <div className="col-md-3 col-sm-6 py-2">
            <label for="" className="fw7 mb-1 fz13">Name *</label>
            <input type="text" className="form-control fz13" required="" placeholder="Enter Template Name"  value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className="col-md-3 col-sm-6 py-2">
            <label for="" className="fw7 mb-1 fz13">Transaction Type *</label>
            <select className="custom-select fz13" id="inputGroupSelect01" value={this.state.transaction} onChange={this.handleChange}>
              <option selected>Select...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-3 col-sm-6 py-2">
            <label for="" className="fw7 mb-1 fz13">Property Type *</label>
            <select className="custom-select fz13" id="inputGroupSelect01" value={this.state.property} onChange={this.handleChange}>
              <option selected>Select...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
    </form>
    )
  }
}
