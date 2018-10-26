import React, { Component } from 'react'

export default class FormModel_8 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      First_Name :'',
      Last_Name :'',
      Email:'',
      Mobile_Number:'',
      Gender :'',
      Date_of_Birth:'',
      Street_Address_1:'',
      City_1:'',
      State_1:'',
      Zip_Code_1:'',
      Street_Address_2:'',
      City_2:'',
      State_2:'',
      Zip_Code_2:'',
      Company_URL:''

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      First_Name :event.target.value,
      Last_Name :event.target.value,
      Email:event.target.value,
      Mobile_Number:event.target.value,
      Gender :event.target.value,
      Date_of_Birth:event.target.value,
      Street_Address_1:event.target.value,
      City_1:event.target.value,
      State_1:event.target.value,
      Zip_Code_1:event.target.value,
      Street_Address_2:event.target.value,
      City_2:event.target.value,
      State_2:event.target.value,
      Zip_Code_2:event.target.value,
      Company_URL:event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <div className="modal modal8 fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bgelb py-2">
            <h5 className="modal-title fz14 fw7 text-uppercase">Create New Client</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body brlg1 py-2">
            <div className="box py-2 mb-1">
              <div className="bgelb brlg1 p-2 px-3 brlb1 ">
                <p className="text-uppercase fz13 fw7 m-0 ">Personal Contact Information</p>
              </div>
              <div className="inf">
                <hr className="border-danger m-0" />
                <div className="bgw p-3 brlb1">
                  <form action="#" className="form-group m-0">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">First Name *</label>
                        <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.First_Name}/> 
                      </div>
                      <div className="col-lg-4 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Last Name *</label>
                        <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Last_Name}/> 
                      </div>
                      <div className="col-lg-4 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Email *</label>
                        <input type="text" className="form-control fz13" placeholder="Joe@john.com" required="" onChange={this.handleChange} value={this.state.Email}/> 
                      </div>
                      <div className="col-lg-4 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Mobile Number</label>
                        <input type="text" className="form-control fz13" placeholder="123123" onChange={this.handleChange} value={this.state.Mobile_Number}/> 
                      </div>
                      <div className="col-lg-4 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Gender </label>
                        <select className="custom-select fz13" onChange={this.handleChange} value={this.state.Gender}>
                          <option selected>Undisclosed</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select> 
                      </div>
                      <div className="col-lg-4 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Date of Birth </label>
                        <input type="text" className="form-control fz13" placeholder="2/2/22" onChange={this.handleChange} value={this.state.Date_of_Birth}/> 
                      </div>
                      <div className="col-lg-4 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Street Address </label>
                        <input type="text" className="form-control fz13" placeholder="Joe@john.com" onChange={this.handleChange} value={this.state.Street_Address_1}/> 
                      </div>
                      <div className="col-lg-3 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">City</label>
                        <input type="text" className="form-control fz13" placeholder="Scout" onChange={this.handleChange} value={this.state.City_1}/> 
                      </div>
                      <div className="col-lg-3 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">State</label>
                        <select className="custom-select fz13"onChange={this.handleChange} value={this.state.State_1}>
                          <option selected>Select</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select> 
                      </div>
                      <div className="col-lg-2 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Zip Code</label>
                        <input type="text" className="form-control fz13" placeholder="123" required="" onChange={this.handleChange} value={this.state.Zip_Code_1}/> 
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="box py-2 mb-1">
              <div className="bgelb brlg1 p-2 px-3 brlb1 ">
                <p className="text-uppercase fz13 fw7 m-0 ">Business Contact Information</p>
              </div>
              <div className="inf">
                <hr className="border-danger m-0" />
                <div className="bgw p-3 brlb1">
                  <form action="#" className="form-group m-0">
                    <div className="row">                      
                      <div className="col-lg-4 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Street Address </label>
                        <input type="text" className="form-control fz13" placeholder="Joe@john.com" onChange={this.handleChange} value={this.state.Street_Address_2}/> 
                      </div>
                      <div className="col-lg-3 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">City</label>
                        <input type="text" className="form-control fz13" placeholder="Scout" onChange={this.handleChange} value={this.state.City_2}/> 
                      </div>
                      <div className="col-lg-3 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">State</label>
                        <select className="custom-select fz13" onChange={this.handleChange} value={this.state.State_2}>
                          <option selected>Select</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select> 
                      </div>
                      <div className="col-lg-2 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Zip Code</label>
                        <input type="text" className="form-control fz13" placeholder="123" required="" onChange={this.handleChange} value={this.state.Zip_Code_2}/> 
                      </div>
                      <div className="col-lg-6 col-sm-8 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Company URL </label>
                        <input type="text" className="form-control fz13" placeholder="www.Joejohn.com" onChange={this.handleChange} value={this.state.Last_Name}/> 
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer bgelb py-2">
            <button className="btn bgtr tdu cb px-3 fz14 " data-dismiss="modal">Cancel</button>
            <button type="button" className=" fz14 btn btn-outline-primary px-4">Save</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
