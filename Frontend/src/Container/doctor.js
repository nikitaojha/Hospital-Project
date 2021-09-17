import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Doctor extends Component {
    state = {
        doctor: []
    }
    componentDidMount() {
        axios.get('http://localhost:90/doctor/show')
            .then((response) => {
                this.setState({
                    doctor: response.data.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }



    render() {
        return (
            <div class="container-fluid" className="homepage">
               
                
                <div>
                    <section className="row productgrid">
                        <h3 className="title">Qualified Doctors</h3>

                        <div className="row productitems">
                            <div col-md-4 col-sm-8>
                                <img src="/d1.png" alt="" />
                                <h4>Dr. abc</h4>
                                <p>Qualified Doctors</p>
                                <form action="/app">
                      <input type="submit" value="Book Appoitnemt" class="btn btn-dark" />
                  </form>
                            </div>

                            <div  col-md-4 col-sm-8>
                                <img src="/d2.png" alt="" />
                                <br></br>
                                <br></br>
                               
                                <h4>Dr. bcd</h4>
                                <p>Qualified Doctors </p>
                                <form action="/app">
                      <input type="submit" value="Book Appoitnemt" class="btn btn-dark" />
                      </form>
                            </div>


                            <div  col-md-4 col-sm-8>
                                <img src="/dr 3.png" alt="" />
                                <h4>Dr. cde</h4>
                                <p>Qualified Doctors</p>
                                <form action="/app">
                      <input type="submit" value="Book Appoitnemt" class="btn btn-dark" />
                      </form>
                            </div>

                            <div  col-md-4 col-sm-8>
                                <img src="/d4.png" alt="" />
                                <h4>Dr. efg</h4>
                                <p>Qualified Doctors</p>
                                <form action="/app">
                      <input type="submit" value="Book Appoitnemt" class="btn btn-dark" />
                      </form>
                            </div>

                            <div  col-md-4 col-sm-8>
                                <img src="/d1.png" alt="" />
                                <h4>Dr. ghi</h4>
                                <p>Qualified Doctors</p>
                                <form action="/app">
                      <input type="submit" value="Book Appoitnemt" class="btn btn-dark" />
                      </form>
                            </div>
                            <div  col-md-4 col-sm-8>
                                <img src="/d2.png" alt="" />
                                <br></br>
                                <br></br>
                                <h4>Dr. jkl</h4>
                                <p>Qualified Doctors</p>
                                <form action="/app">
                      <input type="submit" value="Book Appoitnemt" class="btn btn-dark" />
                      </form>
                            </div>




                        </div>
                    </section>


                </div>
                



            </div>

        )
    }
}


export default Doctor
