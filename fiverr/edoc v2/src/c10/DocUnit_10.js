import React, { Component } from 'react'


export default class DocUnit_10 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         unitName : this.props.name
      }
    }

    
  render() {
    return (
      
     <div className="box bgw fz12 mb-2">
        <ul className="list-unstyled m-0 pb-2">
            <li className="d-flex justify-content-between Ml">
            <a href="#" className="pl-2 cbl py-2 d-block">{this.state.unitName}</a>
            <a href="#" className="pr-2 cbl py-2"><i className="fas fa-plus-square"></i></a>
            </li>
            <hr className="m-0" />
            <div className="bxx">
            <li><a href="#" className="fz11 cbl py-1 d-block px-2">Page 1 <i className="fas fa-angle-right"></i></a></li>
            <li><a href="#" className="fz11 cbl py-1 d-block px-2">Page 1 <i className="fas fa-angle-right"></i></a></li>
            <li><a href="#" className="fz11 cbl py-1 d-block px-2">Page 1 <i className="fas fa-angle-right"></i></a></li>
            <li><a href="#" className="fz11 cbl py-1 d-block px-2">Page 1 <i className="fas fa-angle-right"></i></a></li>
            <li><a href="#" className="fz11 cbl py-1 d-block px-2">Page 1 <i className="fas fa-angle-right"></i></a></li>
            <li><a href="#" className="fz11 cbl py-1 d-block px-2">Page 1 <i className="fas fa-angle-right"></i></a></li>
            </div>
        </ul>
    </div>
      
    )
  }
}
