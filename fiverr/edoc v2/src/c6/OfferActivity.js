import React, { Component } from 'react'

export default class OfferActivity extends Component {
  render() {
    return (
        <div className="row bgw mb-4 m-0">
            <div className="col-12 py-2 pt-3 px-4 d-flex justify-content-between">
                <div className="">
                    <h4 className="text-uppercase fw7">Offers</h4>
                    <p className="text-muted">Today <a href="#"><span className="text-danger">/ Offers</span></a></p>
                </div>
                <div className="text-right pt-3">
                    <p><button className="btn-outline-primary btn px-3 fz18 ">Activity</button></p>
                </div>
            </div>
        </div>
    )
  }
}
