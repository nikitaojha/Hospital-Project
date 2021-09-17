import axios from "axios";
import { Component } from "react";

class AddDoctor extends Component{
    state = {
        doctorname : '',
        department : '',
        desc: '',
        Education: '',
        doctor_image: '',
        config: {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
            
        }
    }
    inputHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    fileHandler = (e)=>{
        this.setState({
            doctor_image : e.target.files[0]
        })
    }
    addpro = (e)=>{
        e.preventDefault();
        const data = new FormData() // new line

        data.append('doctor_image', this.state.doctor_image)
        data.append('doctorname', this.state.doctorname)
        data.append('department', this.state.department)
        data.append('desc', this.state.desc)
        data.append('Education', this.state.Education)
        axios.post('http://localhost:90/insert',data)
        .then((response)=>{
            console.log(response)
            alert("doctor added succesfully")
            window.location.href='/doctor'
            
        })
        .catch((err)=>{
            console.log(err.response)
            alert("please fill the form correctly")
            
        })

    }
    render(){
        return(

            
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Add doctor</h1>
                    <br></br>
                    <form onSubmit={this.handleSubmit}noValidate>

                    <p>
                    <label>Product Image:</label>
                    <input type="file" name="pimage" onChange={this.fileHandler}   
                      />
                    </p>


                    <div className="pname">
                        <label>Product Name:</label>
                        <input type="text"
                        value={this.state.pname}name="pname"onChange={this.inputHandler}/>
                        </div> 
                        <br></br>

                        <div className="pdesc">
                        <label>Product Desc:</label>
                        <input type="text"
                        value={this.state.pdesc}name="pdesc"onChange={this.inputHandler}/>
                        </div> 
                        <br></br>

                        <div className="pprice">
                        <label>Product Price:</label>
                        <input type="text"
                        value={this.state.pprice}name="pprice"onChange={this.inputHandler}/>
                        </div> 
                        <br></br>

                        <p>
                         <button onClick={this. addpro}>Add Product</button>
                     </p>  
                    </form>
                </div>
            </div>

        )
    }
}

export default AddDoctor;