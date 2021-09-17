import axios from "axios";
import React, { Component } from "react";

class Report extends Component {
    state = {
        patient_name: '',
        patient_address: '',
        age: '',
     
        config: {
            headers: { 'authorization': `Bearer${localStorage.getItem('token')}` }
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileHandler = (e) => {
        this.setState({
            // product_img: e.target.files[0]
        })
    }

    add = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('patient_name', this.state.patient_name)
        data.append('patient_address', this.state.patient_address)
        data.append('age', this.state.age)
      
        axios.post('http://localhost:90/patient/insert', data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                alert("")
               
            })
            .catch((err) => {
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
                        
                        <h1>View Report</h1>
                        
                    </div>
                <form>
                    <div class="form-group">
                        <h3><label>Patient Name:</label></h3>
                        <input type="text" name="patient_name" placeholder="Enter patient  name"class="form-control"value={this.state.patient_name} onChange={this.changeHandler} />
                    </div>
                    <div class="form-group">
                        <h3><label>Address:</label></h3>
                        <input type="text" name="patient_adress" placeholder="Enter address"class="form-control"value={this.state.patient_address} onChange={this.changeHandler} />
                    </div>
                    <div class="form-group">
                        <h3><label>Age</label></h3>
                        <input type="text" name="age"placeholder="Enter patient age" class="form-control"value={this.state.age} onChange={this.changeHandler} />
                    </div>
                   
                    <form action="/vreport">
                      <input type="submit" value="View Report" class="btn btn-dark" />
                  </form>
                </form>
                <br></br><br></br>
            </div>
        </div>
        </div>
        )
    }
}

export default Report