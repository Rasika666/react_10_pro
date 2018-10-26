import React, { Component } from 'react'

export default class EFormBottom_22 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         show:''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            show:this.target.value
        });
    }
    
  render() {
    return (
    <div className="col-12">
        <ul className="list-inline text-center text-md-right m-0">
          <li className="list-inline-item px-2 py-1">
            <i>Showing 1-10 of 22 entries</i>
          </li>
          <li className="list-inline-item px-2 py-1">
            <div className="d-flex">
              <span className="mt-2 mr-1 ">Show</span>
              <select className="custom-select fz13" onChange={this.handleChange} value={this.state.show}>
                <option selected>10</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </li>
          <li className="list-inline-item px-2 py-1">
            <ul className="list-inline m-0">
              <li className="list-inline-item p-0 m-0"><a href="#" className="cb tdu">Previous</a></li>
              <li className="list-inline-item p-0 m-0"><a href="#" className="cb">1</a></li>
              <li className="list-inline-item p-0 m-0"><a href="#" className="cb">2</a></li>
              <li className="list-inline-item p-0 m-0"><a href="#" className="cb">3</a></li>
              <li className="list-inline-item p-0 m-0"><a href="#" className="cb tdu">Next</a></li>
            </ul>
          </li>
        </ul>
    </div>
    )
  }
}
