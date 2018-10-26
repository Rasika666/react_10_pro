import React, { Component } from 'react'

export default class FormModel_7 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      First_Name : '',
      Last_Name : '',
      Mobile_Phone : '',
      Email_Address_1 : '',
      Search_Brokerages :'',
      Name :'',
      EIN :'',
      Email_Address_2:'',
      Work_Phone :'',
      Fax : '',
      Address_Line_1 :'',
      Address_Line_2 :'',
      City :'',
      State : '',
      Zip_Code: ''

    }
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event){
    this.setState({
      First_Name : event.target.value,
      Last_Name : event.target.value,
      Mobile_Phone : event.target.value,
      Email_Address_1 : event.target.value,
      Search_Brokerages :event.target.value,
      Name :event.target.value,
      EIN :event.target.value,
      Email_Address_2:event.target.value,
      Work_Phone :event.target.value,
      Fax : event.target.value,
      Address_Line_1 :event.target.value,
      Address_Line_2 :event.target.value,
      City :event.target.value,
      State : event.target.value,
      Zip_Code: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <div className="modal modal7 fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bgelb py-2">
            <h5 className="modal-title fz14 fw7 text-uppercase">Create An Outside Agent</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body brlg1 py-2">
            <div className="box py-2 mb-1">
              <div className="bgelb brlg1 p-2 px-3 brlb1 ">
                <p className="text-uppercase fz14 fw7 m-0 ">Agent Information</p>
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
                        <label for="" className="fz13 mb-1 fw6">Mobile Phone *</label>
                        <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Mobile_Phone}/> 
                      </div>
                      <div className="col-lg-3 col-sm-6 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Email Address *</label>
                        <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Email_Address_1}/> 
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="box py-2 mb-1">
              <div className="bgelb brlg1 p-2 px-3 brlb1 ">
                <p className="text-uppercase fz14 fw7 m-0 ">Brokerage Information</p>
              </div>
              <div className="inf">
                <hr className="border-danger m-0" />
                <div className="bgw p-3 brlb1">
                  <form action="#" className="form-group m-0">
                    <div className="row">
                      <div className="col-lg-6 col-sm-10 py-2 ">
                        <label for="" className="fz13 mb-1 fw6">Search Brokerages *</label>
                        <div className="input-group mb-3 d-flex flex-column flex-sm-row">
                          <input type="text" className="fz13 form-control CNB" placeholder="Type Contact's Name" onChange={this.handleChange} value={this.state.Search_Brokerages}/>
                          <div className="input-group-append mx-auto">
                            <button className="btn btn-outline-primary fz13 px-3" type="button">Create a new Brokerage</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="box py-2">
                    <div className="bgelb brlg1 p-2 px-3 brlb1 ">
                      <p className="text-uppercase fz14 fw7 m-0 ">Create a Brokerage</p>
                    </div>
                    <div className="inf">
                      <hr className="border-danger m-0" />
                      <div className="bgw p-3 brlb1">
                        <form action="#" className="form-group m-0">
                          <div className="row">
                            <div className="col-lg-3 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">Name *</label>
                              <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Name}/> 
                            </div>
                            <div className="col-lg-2 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">EIN</label>
                              <input type="text" className="form-control fz13" placeholder="Joe" onChange={this.handleChange} value={this.state.EIN}/> 
                            </div>
                            <div className="col-lg-2 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">Email Address</label>
                              <input type="text" className="form-control fz13" placeholder="Joe@john.com" onChange={this.handleChange} value={this.state.Email_Address_2}/> 
                            </div>
                            <div className="col-lg-2 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">Work Phone *</label>
                              <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Work_Phone}/> 
                            </div>
                            <div className="col-lg-2 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">Fax *</label>
                              <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Fax}/> 
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">Address Line 1 *</label>
                              <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Address_Line_1}/> 
                            </div>
                            <div className="col-lg-2 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">Address Line 2 *</label>
                              <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Address_Line_2}/> 
                            </div>
                            <div className="col-lg-2 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">City *</label>
                              <input type="text" className="form-control fz13" placeholder="Joe@john.com" required="" onChange={this.handleChange} value={this.state.City}/> 
                            </div>
                            <div className="col-lg-2 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">State *</label>
                              <select className="custom-select fz13">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="col-lg-2 col-sm-6 py-2 ">
                              <label for="" className="fz13 mb-1 fw6">Zip Code *</label>
                              <input type="text" className="form-control fz13" placeholder="Joe" required="" onChange={this.handleChange} value={this.state.Zip_Code}/> 
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
      </div>
    )
  }
}
