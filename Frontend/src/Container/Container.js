import { Component } from 'react';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import {Redirect, Route} from 'react-router-dom';
import About from './About';
import Profile from './Profile';
import Document from './Appoitment';
import Contactus from './Contact Us';
import Doctor from './doctor';
import Appoitment from './Appoitment';
import Report from './Report';
import Viewreport from "./Viewreport"



class Container extends Component{
    render(){
        return(
            <div>
               <Route exact path="/">
               <Redirect from="/" to="/home"/>
               </Route>
                <Route path="/home" component={Home}/>   
                <Route path="/register" component={Register}/>   
                <Route path="/login" component={Login}/>
                <Route path="/about" component={About}/>
                <Route path="/profile/:id" component={Profile}/>
                <Route path="/app" component={Appoitment}/>
                <Route path="/contact" component={Contactus}/>
                <Route path="/doctor" component={Doctor}/>
                <Route path="/report" component={Report}/>
                <Route path="/vreport" component={Viewreport}/>
                

                
            </div>
        )
    }
}

export default Container;