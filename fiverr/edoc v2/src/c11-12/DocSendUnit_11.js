import React, { Component } from 'react'

const dStyle = {
    width: '15px',
    height: '15px'
};

export default class DocSendUnit_11 extends Component {
  render() {
    return (
      <div>
        <div className="bgw p-3 brlb1 fw6 ">
            <div className="prt prt1 p-2 br0 mb-1 d-flex">
            <div className="d-flex justify-content-center flex-column px-2">
                <input type="checkbox" style={dStyle} />
            </div>
            <div className="txt d-inline-flex justify-content-between px-2 w-100">
                <div className="d-flex flex-column justify-content-center ">
                <p className="m-0 fw6 fz14">Select all Doucments <span className=" ml-2 mt-1 fas fa-caret-right" ></span></p>
                </div>
                <div className="text-right">
                <p className="text-muted m-0 fz13"><i>3 files</i></p>
                </div>
            </div>
            </div>
            <div className="info1 pl-4 text-muted">
            <div className="prt p-2 br0 mb-1 d-flex">
                <div className="d-flex justify-content-center flex-column px-2">
                <input type="checkbox" style={dStyle} />
                </div>
                <div className="d-inline-flex justify-content-between px-2 w-100">
                <div className="d-flex flex-column justify-content-center ">
                    <p className="m-0 fw4 fz14">Certificate of Completeion</p>
                </div>
                <div className="text-right">
                    <p className="text-muted m-0 fz13"><i>pdf</i></p>
                </div>
                </div>
            </div>
            <div className="prt p-2 br0 mb-1 d-flex">
                <div className="d-flex justify-content-center flex-column px-2">
                <input type="checkbox" style={dStyle} />
                </div>
                <div className="d-inline-flex justify-content-between px-2 w-100">
                <div className="d-flex flex-column justify-content-center ">
                    <p className="m-0 fw4 fz14">Agreement</p>
                </div>
                <div className="text-right">
                    <p className="text-muted m-0 fz13"><i>pdf</i></p>
                </div>
                </div>
            </div>
            <div className="prt p-2 br0 mb-1 d-flex">
                <div className="d-flex justify-content-center flex-column px-2">
                <input type="checkbox" style={dStyle}/>
                </div>
                <div className="d-inline-flex justify-content-between px-2 w-100">
                <div className="d-flex flex-column justify-content-center ">
                    <p className="m-0 fw4 fz14">Certificate of Completeion</p>
                </div>
                <div className="text-right">
                    <p className="text-muted m-0 fz13"><i>pdf</i></p>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
