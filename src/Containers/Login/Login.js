import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../App.css'
import './Login.css'

class Login extends Component {
   
    state = {
        usernameRequired: false,
        pwdRequired: false
    }
        
    // changeHandler = (event) => {
    //     const { name, value } = event.target;
    //     this.setState({ [name] : value });
    //     if(this.state.emailId !== "" && this.state.password !== ""){
    //        this.setState({usernameRequired: false, pwdRequired:false})
    //     } else if(this.state.emailId === ""){
    //         this.setState({usernameRequired:true})
    //     } else if(this.state.password === ""){
    //         this.setState({pwdRequired:true})
    //     }
    // }
    submitPage = (event) => {
        event.preventDefault();
        if(this.props.emailId === "" && this.props.password === ""){
           this.setState({usernameRequired: true, pwdRequired:true})
           return false;
        }
        else if(this.props.emailId === ""){
            this.setState({usernameRequired: true})
            return false;
        } 
        else if(this.props.password === ""){
            this.setState({pwdRequired: true})
            return false;
        } else {
            this.props.history.push(
            {pathname:'/dashboard', 
            values:  {
                       comments: this.state.comments
                    }
                })
        }
        
    } 
    clearForm = () => {
        document.getElementById("loginForm").reset();
    }
  
    componentDidMount() {
        console.log("Did Mount")
        axios.get("../../data.json").then(response => {
            console.log("data--->",response.data)
            this.setState({
                comments : response.data
            })
        },error => {
            console.log("Error",Error)
        })
    }
    render() {
       
        
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                            <div className="headr-text">
                            Login Page
                            </div>
                    </div>
                </nav>
            
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card card-signin my-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Sign In</h5>
                                        <form id="loginForm" className="form-signin">
                                            
                                            <div className="form-group required">
                                                <label className="control-label font-we">Email address</label>
                                                <input type="text" 
                                                className="form-control" 
                                                name = "emailId"
                                                placeholder="User Name" 
                                                value = {this.props.emailId}
                                               
                                                onChange = {(event) => this.props.changeHandler(event)}
                                                />
                                            </div>
                                            {
                                                this.state.usernameRequired &&
                                                <div className="appl-color">
                                                    Username is required
                                                </div>
                                            }
                                            <div className="form-group required">
                                                <label className="control-label font-we">Password</label>
                                                <input type="password" 
                                                id="inputPassword" 
                                                className="form-control" 
                                                name= "password"
                                                placeholder="Password" 
                                                value={this.props.password}
                                                
                                                onChange = {(event) => this.props.changeHandler(event)}/>
                                            </div>
                                            {   
                                                this.state.pwdRequired &&
                                                <div className="appl-color">
                                                    Password is required
                                                </div>
                                            }
                                            <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.submitPage} > Sign in </button>
                                            
                                            <button onClick={this.clearForm} className="btn btn-lg btn-primary btn-block text-uppercase"> Clear </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}
const mapStoretoProps = (state) => {
    return {
        emailId : state.emailId,
        password : state.password,
        comments: state.comments
    }
};
const dispatchToProps = (dispatch) => {
    return {
        changeHandler : (event) => dispatch({type:'CHANGEHANDLER', name:event.target.name, value: event.target.value})
    }
}


export default connect(mapStoretoProps,dispatchToProps) (Login);