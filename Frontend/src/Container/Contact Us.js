import { Component } from "react";

class Contactus extends Component {
    render() {
        return (
            <div>    
               

                      
                        <div>
                            <div class="row" style={{marginInline:"75px"}}><br></br><br></br>
                                <div class="col-md ">
                                    <h2 class="float-left">Location:</h2><br></br><br></br><br></br>
                                    <div id="map-container-google-1" class="z-depth-1-half map-container float-left" style={{ height: "500px" }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14125.659000242593!2d85.34628683838409!3d27.735350766880476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1be1fd986bdd%3A0x6e79056c701bc57f!2sKapan%20Aakase%20Dhara!5e0!3m2!1sen!2snp!4v1617772989315!5m2!1sen!2snp" width="600" height="450" style={{border:"0" }}allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                </div>

                                <div>
                                    <div class="col-md">
                                        <h2 class="float-middle">Contact us:</h2><br></br><br></br><br></br>
                                        <p><h4 class="float-middle">Email: communityhospital@gmail.com</h4></p>
                                        <p><h4 class="float-right">Address: Kathmandu, Nepal</h4></p>
                                        <p><h4 class="float-right">Contact No:9861908460</h4></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br><br></br>
                        <hr />
                        </div>
                   


        )
    }
}

export default Contactus