import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-header">
              <h3 className="card-title">{this.props.userData.name}</h3>
          </div>
          <div className="card-body">
            <div className = "row">
              <div className="col-md-4">
                <img src={this.props.userData.avatar_url} className="thumbnail" alt="github profile" style={{width:"100%"}}/>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                    <span className="badge badge-danger">{this.props.userData.public_repos} Repos</span>
                    <span className="badge badge-primary">{this.props.userData.public_gists} Gists</span>
                    <span className="badge badge-success">{this.props.userData.followers} Followers</span>
                    <span className="badge badge-info">{this.props.userData.following} Following</span>
                  </div>
                </div>

                <hr/>

                <div className = "row">
                  <div className="col-md-12">
                  <ul className="list-group">
                      <li className="list-group-item list-group-item-success"><b>User Name : </b>{this.props.userData.login}</li>
                      <li className="list-group-item list-group-item-info"><b>Location : </b>{this.props.userData.location}</li>
                      <li className="list-group-item list-group-item-warning"><b>Email Address : </b>{this.props.userData.email}</li>
                      <li className="list-group-item list-group-item-danger"><b>company : </b>{this.props.userData.company}</li>
                  </ul>
                  </div>
                </div>
                <br/>
                <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit me</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
