import React, { Component } from 'react'

export default class Form_23 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Documents_Name:'',
        Status:'',
        Upload_Your_File:''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            Documents_Name:event.target.value,
            Status:event.target.value,
            Upload_Your_File:event.target.value
        });
    }
    
  render() {
    return (
    <div className="row">
        <div className="col-md-6 ">
          <div className="d-flex flex-sm-row flex-column py-1">
            <label className="text-left text-sm-right fw7 w-75  pt-1 fz18 pr-2">Documents Name *</label>
            <input type="text" className="form-control " onChange={this.handleChange} value={this.state.Documents_Name}/>
          </div>
          <div className="d-flex flex-sm-row flex-column py-1">
            <label className="text-left text-sm-right fw7 w-75  pt-1 fz18 pr-2">Status *</label>
            <input type="text" className="form-control " onChange={this.handleChange} value={this.state.Status}/>
          </div>
          <div className="d-flex flex-sm-row flex-column py-1 ">
            <label className="text-left text-sm-right fw7 w-75  pt-1 fz18 pr-2 ">Upload Your File *</label>
            <input type="text" className="form-control py-5" onChange={this.handleChange} value={this.state.Upload_Your_File}/>
          </div>
        </div>
    </div>
    )
  }
}
