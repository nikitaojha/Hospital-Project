import axios from "axios";
import { Component } from "react";

class Profile  extends Component{
    state = {
        id: localStorage.getItem('userid'),
        user_username: '',
        user_contactno: '',
        user_email: '',
        user_password:'',
        config: {
            headers: { 'authorization': `Bearer${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:90/user/singleshow/' + this.state.id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                this.setState({
                    user_username: response.data.user_username,
                    user_contactno: response.data.user_contactno,
                    user_email: response.data.user_email,
                    user_password: response.data.user_password,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    updateUser = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('user_username', this.state.user_username)
        data.append('user_contactno', this.state.user_contactno)
        data.append('user_email', this.state.user_email)
        axios.put('http://localhost:90/user/update/' + this.state.id, this.state, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                alert("Profile updated successfully.")
                window.location.reload()
            })
            .catch((err) => {
                alert("Please fill the form correctly!")
            })
    }
    render(){
        return(
            <div className="wrapper" style = {{margin:"55px"}} >
            <div className="form-wrapper">
                
                <h1>Profile</h1>
                <br></br>
                <form onSubmit={this.handleSubmit}noValidate>
                    <div className="Username">
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="user_username" class="form-control" value={this.state.user_username} onChange={this.changeHandler} />
                    </div> 
                    <br></br>
                    

                    <div className="Contact">
                        <label htmlFor="Contact">Contact No:</label>
                        <input type="number" name="user_contactno" class="form-control" value={this.state.user_contactno} onChange={this.changeHandler} />
                    </div> 
                    <br></br>
                    <div className="Email">
                        <label htmlFor="Email">Email:</label>
                        <input type="text" name="user_email" class="form-control" value={this.state.user_email} onChange={this.changeHandler} />
                        </div>
                        <br></br>
                        <br></br>
                    <button class="btn btn-dark" type="submit" onClick={this.updateUser}>Update</button> 
                </form>
            </div>
        </div>
        )
    }


}

export default Profile;