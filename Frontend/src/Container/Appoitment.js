import { Component } from "react";
import axios from 'axios';

class Appoitment extends Component {
    state = {
        patientname: "",
        patient_contactno: "",
        patient_email: "",
        date: "",
        gender: "",
        sysptoms: "",
    }
    registerapp = (e) => {
        e.preventDefault();
        const data = {
            patientname: this.state.patientname,
            patient_contactno: this.patient_contactno,
            patient_email: this.state.patient_email,
            date: this.state.date,
            gender: this.state.gender,
            sysptoms: this.state.sysptoms
        }
        axios.post("http://localhost:90/patient/insert", data)
            .then((response)=>{
                    alert("Appoitment book successfully.")
                    // window.location.href='/home'
                }
            )
            .catch((err) => {
                console.log(err.response)
                alert("fill correctly")
            })
    }
    render() {
        return (
            <div class="container" className="registerpage">
                <br></br><br></br><br></br>
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        
                        <div class="card-header" style={{ backgroundColor: '#07416e', color:"white"}}>
                            
                            <h1>Appoitment Form</h1>
                            
                        </div>
                        <div class="card-body">

                            <form>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Patient name:</label></h3>
                                    <input class="form-control" placeholder="Enter patientname" type="text" name="patientname" value={this.state.patientname} onChange={(event) => { this.setState({ patientname: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Phone Number:</label></h3>
                                    <input class="form-control" placeholder="Enter contactno" type="text" name="patient_contactno" value={this.state.patient_contactno} onChange={(event) => { this.setState({ patient_contactno: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Email:</label></h3>
                                    <input class="form-control" placeholder="Enter email" type="email" name="patient_email" value={this.state.patient_email} onChange={(event) => { this.setState({ patient_email: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Date:</label></h3>
                                    <input class="form-control" placeholder="Enter date" type="text" name="date" value={this.state.date} onChange={(event) => { this.setState({ date: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Gender:</label></h3>
                                    <input class="form-control" placeholder="Enter gender" type="text" name="gender" value={this.state.gender} onChange={(event) => { this.setState({ gender: event.target.value }) }} />
                                </div>
                                <div class="form-group">
                                    <h3 class="float-left"><label>Symptoms:</label></h3>
                                    <input class="form-control" placeholder="Enter symptoms" type="text" name="sysptoms" value={this.state.sysptoms} onChange={(event) => { this.setState({ sysptoms: event.target.value }) }} />
                                </div>
                                
                                <div class="form-group">
                                    <button type="signup" class="btn btn-light float-right"style={{ backgroundColor: '#07416e', color:"white"}} onClick={(e) => this.registerapp(e)}>Book appoitment </button>
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

export default Appoitment;