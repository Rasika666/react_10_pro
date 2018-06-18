import React, { Component } from 'react';
//import './App.css';
import propTypes from 'prop-types';
import $ from 'jquery';
import Profile from './components/github/Profile'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username : 'rasika',
       userData : [],
       userRepos : [],
       perPage : 5
    }
   // this.updateState = this.updateState.bind(this);
  }

  //get user data from github using ajax
  //we cannot update all json data to state
  getUserData = () =>{
    $.ajax({
      url : 'http://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType : 'json',
      cache :false,
      success : function(data) {
        this.setState({
          userData : data.name
        });
        console.log(data);
      }.bind(this),
      error : function(xhr, status, err) {
        this.setState({
          userData : null
        });
        alert(err);
      }.bind(this)
    });
  }

  componentDidMount = ()=> {
    //get user data from github using axios
   //update all json
    axios.get('http://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret)
    .then(res => {
      console.log(res);
      this.setState({userData : res.data});
    });
  }
  
  render() {
    return (
      <div className="App">
        <Profile userData={this.state.userData}/>
      </div>
    );
  }
}

//properties that is not change
//This is actually property(props) not state
App.propTypes = {
  clientId : propTypes.string,
  clientSecret : propTypes.string
}

App.defaultProps = {
  clientId : '6d00afb532191d77af1b',
  clientSecret : '7be9fd0e95c5d98d8b0e31c3bee2cfeac2f0d30e'
}

export default App;
