import { Component } from "react";
import axios from 'axios';

class Register extends Component {
    state = {
        user_username: "",
        user_email: "",
        user_contactno: "",
        user_password: "",
        user_role: "",
    }
    registerUser = (e) => {
        e.preventDefault();
        const data = {
            user_username: this.state.user_username,
            user_email: this.state.user_email,
            user_contactno: this.state.user_contactno,
            user_password: this.state.user_password,
            user_role: this.state.user_role
        }
        axios.post("http://localhost:90/user/insert", data)
            .then((response)=>{
                    alert("User registered successfully.")
                    window.location.href='/home'
                }
            )
            .catch((err) => {
                console.log(err.response)
                alert("Please fill the form correctly!")
            })
    }
    render() {
        return (
            <div class="container" className="registerpage">
                <br></br><br></br><br></br>
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header" style={{ backgroundColor: '#07416e', color:"white"}}>
                            <h1>Register Form</h1>
                        </div>
                        <div class="card-body">

                            <form>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Username:</label></h3>
                                    <input class="form-control" placeholder="Enter Username" type="text" name="user_username" value={this.state.user_username} onChange={(event) => { this.setState({ user_username: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Email address:</label></h3>
                                    <input class="form-control" placeholder="Enter Email" type="email" name="user_email" value={this.state.user_email} onChange={(event) => { this.setState({ user_email: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Contact no:</label></h3>
                                    <input class="form-control" placeholder="Enter Contact no" type="text" name="user_contactno" value={this.state.user_contactno} onChange={(event) => { this.setState({ user_contactno: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Password:</label></h3>
                                    <input class="form-control" placeholder="Enter Password" type="password" name="user_password" value={this.state.user_password} onChange={(event) => { this.setState({ user_password: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Confirm password:</label></h3>
                                    <input class="form-control" placeholder="Confirm password" type="password" name="confirmpassword" />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Role:</label></h3>
                                    <input class="form-control" placeholder="Enter your Role (Enter User if youre a customer)" type="text" name="user_role" value={this.state.user_role} onChange={(event) => { this.setState({ user_role: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <button type="signup" class="btn btn-light float-right" onClick={(e) => this.registerUser(e)}>Register</button>
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

export default Register