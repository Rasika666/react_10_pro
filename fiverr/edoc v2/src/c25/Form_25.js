import React, { Component } from 'react'

export default class Form_25 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Name_the_Fiels:'',
        Specify_the_Order:'',
        duplicate:'',
        Question:'',
        Help_Text:'',
        Tool_tips:''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            Name_the_Fiels:event.target.value,
            Specify_the_Order:event.target.value,
            duplicate:event.target.value,
            Question:event.target.value,
            Help_Text:event.target.value,
            Tool_tips:event.target.value
        });
    }
    
  render() {
    return (
        <div className="col-md-3 col-sm-4 py-2">
        <form action="#" className="form-group m-0">
          <div className="py-3">
            <label for="#" className="fz13 ml-2 fw7 mb-1">Name the Fiels</label>
            <select className="custom-select fz13" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.Name_the_Fiels}>
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="py-3">
            <label for="#" className="fz13 ml-2 fw7 mb-1">Specify the Order</label>
            <select className="custom-select fz13" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.Name_the_Fiels}>
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="py-3">
            <label for="#" className="fz13 ml-2 fw7 mb-1">What field is this a duplicate of?</label>
            <select className="custom-select fz13" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.duplicate}>
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="py-4">
            <label for="#" className="fz13 ml-2 fw7 mb-1">Question</label>
            <textarea name="" id="" cols="30" rows="3" className="form-control fz13" onChange={this.handleChange} value={this.state.Question}></textarea>
          </div>
          <div className="py-4">
            <label for="#" className="fz13 ml-2 fw7 mb-1">Help Text</label>
            <input type="text" className="fz13 form-control" placeholder="John smith"  onChange={this.handleChange} value={this.state.Help_Text}/>
          </div>
          <div className="py-4">
            <label for="#" className="fz13 ml-2 fw7 mb-1">Tool tips</label>
            <input type="text" className="fz13 form-control"  onChange={this.handleChange} value={this.state.Tool_tips}/>
          </div>
          <div className="py-3">
            <p className="fw7 fz11 m-0">Field of Dependencies</p>
            <p className="m-0 fz11 fw7 mt-2 d-flex">
              <div className="dropdown caretdisable">
                <button className="btn btn-outline-secondary fz11 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Add <i className="fas fa-plus"></i>
                </button>
        
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <span className="fz11" style={{lineheight : '10px'}}>Autoname it<br />if Merge_1 = greater/less then required OR not required</span>
            </p>
          </div>
          <div className="py-3">
            <button className="btn btn-primary px-4 mx-auto w-100">Save</button>
            <ul className="list-inline text-center py-2 m-0">
              <li className="list-inline-item  px-3">
                <a href="#" className="cb fw7 tdu fz13">Back</a>
              </li>
              <li className="list-inline-item px-3">
                <a href="#" className="cb fw7 tdu fz13">Cancel</a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}
