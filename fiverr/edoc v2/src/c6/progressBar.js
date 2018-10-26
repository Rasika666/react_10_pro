import React, { Component } from 'react'

export default class ProgressBar extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         img : this.props.img
      }
    }
    //"img/3-step2.png"
    
  render() {
    return (
        <div className="py-2 pl-md-4  ">
            <img src={this.state.img} className="img-fluid simg" alt="" />
      </div>
    )
  }
}
