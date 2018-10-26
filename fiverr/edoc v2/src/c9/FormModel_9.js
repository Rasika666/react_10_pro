import React, { Component } from 'react'

export default class FormModel_9 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      First_Name  :'',
      Last_Name : '',
      Mobile_Phone:'',
      Email_Address:'',
      Work_Phone:'',
      Fax:'',
      Home_Address:{
        Address_Line_1:'',
        Address_Line_2:'',
        City:'',
        State:'',
        Zip_Code:''
      },
      Work_Address:{
        Address_Line_1:'',
        Address_Line_2:'',
        City:'',
        State:'',
        Zip_Code:''
      },
      Search_Vendors:'',
      Name:'',
      EIN:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      First_Name  :event.target.value,
      Last_Name : event.target.value,
      Mobile_Phone:event.target.value,
      Email_Address:event.target.value,
      Work_Phone:event.target.value,
      Fax:event.target.value,
      Home_Address:{
        Address_Line_1:event.target.value,
        Address_Line_2:event.target.value,
        City:event.target.value,
        State:event.target.value,
        Zip_Code:event.target.value
      },
      Work_Address:{
        Address_Line_1:event.target.value,
        Address_Line_2:event.target.value,
        City:event.target.value,
        State:event.target.value,
        Zip_Code:event.target.value
      },
      Search_Vendors:event.target.value,
      Name:event.target.value,
      EIN:event.target.value
    });
  }
  
  render() {
    return (
    <div className="modal modal9 fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bgelb py-2">
              <h5 className="modal-title fz14 fw7 text-uppercase">Create A Vendor Contact</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body brlg1 py-2">
              <div className="box py-2 mb-1">
                <div className="bgelb brlg1 p-2 px-3 brlb1 ">
                  <p className="text-uppercase fz14 fw7 m-0 ">Vendor Contact Information</p>
                </div>
                <div className="inf">
                  <hr className="border-danger m-0" />
                  <div className="bgw p-3 brlb1">
                    <form action="#" className="form-group m-0">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">First Name *</label>
                          <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.First_Name}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Last Name *</label>
                          <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Last_Name}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Mobile Phone </label>
                          <input type="text" className="form-control fz13" placeholder="1231231" onChange={this.handleChange} value={this.state.Mobile_Phone}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Email Address *</label>
                          <input type="text" className="form-control fz13" placeholder="Joe@john.com" required="" onChange={this.handleChange} value={this.state.Email_Address}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Work Phone </label>
                          <input type="text" className="form-control fz13" placeholder="1231231" onChange={this.handleChange} value={this.state.Work_Phone}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Fax </label>
                          <input type="text" className="form-control fz13" placeholder="1231231" onChange={this.handleChange} value={this.state.Fax}/> 
                        </div>
                      </div>
                      <br />
                      <h5 className="fw7 mb-0">Home Address</h5>
                      <hr className="m-0" />
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Address Line 1</label>
                          <input type="text" className="form-control fz13" placeholder="Main Street" onChange={this.handleChange} value={this.state.Home_Address.Address_Line_1}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Address Line 2</label>
                          <input type="text" className="form-control fz13" placeholder="Main Street" onChange={this.handleChange} value={this.state.Home_Address.Address_Line_2}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">City </label>
                          <input type="text" className="form-control fz13" placeholder="ABC" onChange={this.handleChange} value={this.state.Home_Address.City}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">State </label>
                          <select className="custom-select fz13" onChange={this.handleChange} value={this.state.Home_Address.State}>
                            <option selected>Select..</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Zip Code </label>
                          <input type="text" className="form-control fz13" placeholder="1231231" onChange={this.handleChange} value={this.state.Home_Address.Zip_Code}/> 
                        </div>
                      </div>
                      <br />
                      <h5 className="fw7 mb-0">Work Address</h5>
                      <hr className="m-0" />
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Address Line 1</label>
                          <input type="text" className="form-control fz13" placeholder="Main Street" onChange={this.handleChange} value={this.state.Work_Address.Address_Line_1}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Address Line 2</label>
                          <input type="text" className="form-control fz13" placeholder="Main Street" onChange={this.handleChange} value={this.state.Work_Address.Address_Line_2}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">City </label>
                          <input type="text" className="form-control fz13" placeholder="ABC" onChange={this.handleChange} value={this.state.Work_Address.City}/> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">State </label>
                          <select className="custom-select fz13" onChange={this.handleChange} value={this.state.Work_Address.State}>
                            <option selected>Select..</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select> 
                        </div>
                        <div className="col-lg-3 col-sm-6 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Zip Code </label>
                          <input type="text" className="form-control fz13" placeholder="1231231" onChange={this.handleChange} value={this.state.Work_Address.Zip_Code}/> 
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="box py-2 mb-1">
                <div className="bgelb brlg1 p-2 px-3 brlb1 ">
                  <p className="text-uppercase fz14 fw7 m-0 ">Vendor Information</p>
                </div>
                <div className="inf">
                  <hr className="border-danger m-0" />
                  <div className="bgw p-3 brlb1">
                    <form action="#" className="form-group m-0">
                      <div className="row">
                        <div className="col-lg-6 col-sm-10 py-2 ">
                          <label for="" className="fz13 mb-1 fw6">Search Vendors</label>
                          <div className="input-group mb-3 d-flex flex-column flex-sm-row">
                            <input type="text" className="fz13 form-control CNB" placeholder="Type Name" onChange={this.handleChange} value={this.state.Search_Vendors}/>
                            <div className="input-group-append mx-auto">
                              <button className="btn btn-outline-primary fz13 px-3" type="button">Create a new Vendor</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="box py-2">
                      <div className="bgelb brlg1 p-2 px-3 brlb1 ">
                        <p className="text-uppercase fz14 fw7 m-0 ">Create a Vendor</p>
                      </div>
                      <div className="inf">
                        <hr className="border-danger m-0" />
                        <div className="bgw p-3 brlb1">
                          <form action="#" className="form-group m-0">
                            <div className="row">
                              <div className="col-lg-3 col-sm-6 py-2 ">
                                <label for="" className="fz13 mb-1 fw6">Vendor Type *</label>
                                <select className="custom-select fz13" onChange={this.handleChange} value={this.state.Vendor_Type}>
                                  <option selected>Select..</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select> 
                              </div>
                              <div className="col-lg-4 col-sm-6 py-2 ">
                                <label for="" className="fz13 mb-1 fw6">Name</label>
                                <input type="text" className="form-control fz13" placeholder="Joe" onChange={this.handleChange} value={this.state.Name}/> 
                              </div>
                              <div className="col-lg-3 col-sm-6 py-2 ">
                                <label for="" className="fz13 mb-1 fw6">EIN</label>
                                <input type="text" className="form-control fz13" placeholder="12312312" onChange={this.handleChange} value={this.state.EIN}/> 
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
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
    )
  }
}
