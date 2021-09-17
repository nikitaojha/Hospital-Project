import { Component } from "react";
import axios from 'axios';



class Login extends Component {
    state = {
        user_email: "",
        user_password: "",
    }

    loginUser = (e) => {
        e.preventDefault()
        axios.post("http://localhost:90/user/login", this.state)
            .then((response) => {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('usertype', response.data.usertype)
                    localStorage.setItem('userid', response.data.userid)
                if (response.data.success==true){
                   window.location.href='/home'
                }
                else{
                    alert("Invalid credentials")
                }
            })
            .catch((err) => {
                console.log(err.response)
                
            })
    }
    render() {
        return (
            <div class="container" className="loginpage">
                <br></br><br></br><br></br>
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header" style={{ backgroundColor: '#07416e', color:"white"}}>
                            <h1>Login Form</h1>
                        </div>
                        <div class="card-body">
                            
                            <form>
                                <div class="form-group">
                                    <h3 class="float-left"><label for="exampleInputEmail1">Email address</label></h3>
                                    <input type="email" name="user_email" class="form-control" value={this.state.user_email} aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => { this.setState({ user_email: event.target.value }) }}></input>
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label for="exampleInputPassword1">Password</label></h3>
                                    <input type="password" name="user_password" class="form-control" placeholder="Enter Password" value={this.state.user_password} onChange={(event) => { this.setState({ user_password: event.target.value }) }}></input>
                                </div><br></br>
                                <div class="form-group">
                                <button type="submit" class="btn btn-light float-right" onClick={this.loginUser}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br>
            </div >
        )
    }
}

export default Login