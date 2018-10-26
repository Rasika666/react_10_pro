import React, { Component } from 'react'


const dStyle = {
    width: '15px',
    height: '15px'
};

export default class SelectContactUnit_11 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : this.props.name,
         contact : this.props.contact,
         
      }
      //this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    /*handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    }*/

  render() {
    return (
      <div>
        <div className="prt brlb1 p-2 br0 bgelb mb-1 d-flex">
            <div className="d-flex justify-content-center flex-column px-2">
                <input type="checkbox" style={dStyle} name="ischecked"/>
            </div>
            <div className="d-inline-flex justify-content-between px-2 w-100">
                <div className="d-flex flex-column justify-content-center">
                <p className="m-0 fw6 fz16">{this.state.name}</p>
                <p className="small m-0"><span className="text-muted" /><i>{this.state.contact}</i></p>
                </div>
                <div className="text-right">
                <div className="dropdown">
                    <a className="btn fz13 cb pt-2 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Can fill and Sign
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item fz13" href="#">Action</a>
                    <a className="dropdown-item fz13" href="#">Another action</a>
                    <a className="dropdown-item fz13" href="#">Something else here</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
