import { Component } from "react";
// import "../index.css"

class Footer extends Component{
    render(){
        return(
            <div className="main-footer">
                <div className="containers">
                    <div className="row">
                        <div className="col">
                            <h4>About Website</h4>
                            <ul className="list-unstyled">
                                <li>892374</li>
                                <li>Aakashedhara, Kapan</li>
                                <li>446 Nepal</li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4>This is another column</h4>
                            <ul className="list-unstyled">
                                <li>892374</li>
                                <li>hospital@gmail.com</li>
                                <li>446 Nepal</li>
                            </ul>
                        </div>
                        </div>
                        <hr />
                        <div className="footer-copyright text-center py-3">

                        &copy; {new Date().getFullYear()} <a> Digital Hospital | All right reserved | Terms of service | Privacy</a>

                    </div>
                    </div>
                </div>
            
           
        )
    }

} 

export default Footer;

