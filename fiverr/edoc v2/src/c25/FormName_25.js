import React, { Component } from 'react'

export default class FormName_25 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Category:'',
        Subcategory:'',
        Merge_Field:'',
        Field_Type:'',
        Field_Length:''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            Category:event.target.value,
            Subcategory:event.target.value,
            Merge_Field:event.target.value,
            Field_Type:event.target.value,
            Field_Length:event.target.value
        });
    }
    
  render() {
    return (
    <div className="col-md-9 col-sm-8 py-4 d-flex flex-column">
        <h5 className="cb fw7 mb-1">Form Name</h5>
        <div className="bglgr p-3 d-flex h-100">
          <div className="dropdown">
            <button className="btn fz13 btn-outline-secondary dropdown-toggle px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Merge Field
            </button>
            <div className="dropdown-menu form-menu px-3">
              <form action="" className="form-group m-0">
                <div className="py-2">
                  <label for="#" className="fz13 ml-2 fw7 mb-1">Category</label>
                  <select className="custom-select fz13" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.Category}>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="py-2">
                  <label for="#" className="fz13 ml-2 fw7 mb-1">Subcategory</label>
                  <select className="custom-select fz13" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.Subcategory}>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="py-2">
                  <label for="#" className="fz13 ml-2 fw7 mb-1">Merge Field</label>
                  <select className="custom-select fz13" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.Merge_Field}>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="py-2">
                  <label for="#" className="fz13 ml-2 fw7 mb-1">Field Type</label>
                  <select className="custom-select fz13" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.Field_Type}>
                    <option selected>Date/Time/Text</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="py-2">
                  <label for="#" className="fz13 ml-2 fw7 mb-1">Field Length</label>
                  <select className="custom-select fz13" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.Fiel_Length}>
                    <option selected># of Characters</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="py-2 d-flex">
                  <input type="checkbox" className="form-control" style={{width: '20px',height: '20px'}}  />
                  <span className="ml-2  fz14">Required</span>
                </div>
                <div className="py-2 d-flex">
                  <input type="checkbox" className="form-control" style={{width: '20px',height: '20px'}}  />
                  <span className="ml-2  fz14">Need Review</span>
                </div>
              </form>
            </div>
          </div>
        </div>
 </div>
    )
  }
}
