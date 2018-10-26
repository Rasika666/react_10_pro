import React, { Component } from 'react'

export default class Bottom extends Component {
  render() {
    return (
    <div className="row bgw py-2 m-0 mt-5">
        <div className="col-12 pt-3 px-4 d-flex justify-content-center justify-content-lg-between flex-column-reverse flex-lg-row">
          <div className="mt-2 text-center text-lg-left py-2">
            <ul className="list-unstyled list-inline m-0">
              <li className="text-muted list-inline-item">Copyright &copy; 2018. VirtuSmart, All rights reserved.</li> |
              <li className="list-inline-item"><a href="#" className="text-muted">Privacy Policy</a></li>|
              <li className="list-inline-item"><a href="#" className="text-muted">Tersm & Conditions</a></li>
            </ul>
          </div>
          <div className="text-lg-right  text-center py-2">
            <ul className="list-unstyled list-inline m-0">
              <li className="pt-1 list-inline-item px-2"><button className="btn px-0 btn-outline-primary px-3 fz14 cb fw6 ">Close</button></li>
              <li className="pt-1 list-inline-item px-2"><button className="btn px-0 btn-outline-primary px-3 fz14 cb fw6 ">Previous</button></li>
              <li className="list-inline-item px-2"><a href="#" className="btn btn-primary px-4 fz14">Next</a></li>
            </ul>
          </div>
        </div>
    </div>
    )
  }
}
