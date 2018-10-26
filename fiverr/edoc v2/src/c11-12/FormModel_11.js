import React, { Component } from 'react'
import Panel_11 from './Panel_11';


export default class FormModel_11 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       Subject:'',
       Message:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      Subject:event.target.value,
      Message:event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="modal fade modal11" id="myModal" tabindex="-1" role="dialog" >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title fw7">Share your offer</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <hr className="border-danger m-0" />
          <div className="modal-body pt-5">
            <h3 className="text-center fw7 mb-0">Congrats, your offer is created!</h3>
            <h3 className="text-center fw7 mt-0">Let's select and send it off to all other parties</h3>
            <br/>
            
            <Panel_11/>

            <div className="row m-0 ">
              <div className="col-12 px-4">
                <div className="dropdown">
                  <a className="btn text-primary fz13 tdn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Add a Personal Message
                  </a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0 px-3">
              <div className="col-md-8 ">
                <form action="" className="form-group">
                  <label for="" className="fw7 mb-1 ml-2">Subject</label>
                  <input type="text" className="form-control" placeholder="Enter Subject Line..." value={this.state.Subject} onChange={this.handleChange}/>
                  <label for="" className="fw7 mb-1 ml-2 mt-3">Message</label >
                  <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Enter Message" value={this.state.Message} onChange={this.handleChange}>
                  </textarea>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary fz13">Send Documents</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
