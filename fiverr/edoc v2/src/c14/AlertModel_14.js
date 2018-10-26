import React, { Component } from 'react'

export default class AlertModel_14 extends Component {
  render() {
    return (
        <div className="modal modal14 fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog text-left" role="document">
          <div className="modal-content br0">
            <div className="modal-body p-0">
              <div className="bgb py-4 px-4">
                <img src="img/logo.png" className="img-fluid" alt=""  />
              </div>
              <div className="bgw p-4 fz14">
                <div className="p-3">
                  <h5 className="fw7">Please Review and Act on these documents</h5>
                  <div className="p-3 d-flex justify-content-start">
                    <div className="img">
                      <img src="img/P.png" className="img-fluid pimg" alt=""  />
                    </div>
                    <div className="txt d-flex flex-column justify-content-center px-3">
                      <p className="fw7 m-0">Tim Schweitzer</p>
                      <p className="m-0">HomeSmart LLC</p>
                    </div>
                  </div>
                  <div className="row m-0">
                    <div className="col-md-7">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quis eos ea deleniti. Non commodi, animi modi illo molestias  distinctio, incidunt, accusantium earum. <a href="#" className="text-primary " id="rm">Read More</a> <span className="RM">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vero maiores mollitia exercitationem rem nam quo porro facere error, odit, ipsum incidunt reiciendis saepe sunt. Omnis sequi eos accusamus labore.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between flex-column flex-md-row  fz13">
              <div className=" py-2 px-md-4 mx-lg-3">
                <p className="m-0 d-block">Before you start Lorem ipsum dolor sit <a href="#" className="text-primary">ipsum dolor sit amet</a></p>
                <div className="d-flex align-top">
                  <input type="checkbox"  style={{width: '15px',height: '15px'}}  />
                  <span className="pl-2">I agree Lorem ipsum dolor sit amet,</span>
                </div>
              </div>
              <div className=" py-2">
                <button type="button" className="btn btn-primary disabled fz14 px-4">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
