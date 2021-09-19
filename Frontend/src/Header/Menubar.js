
// import React, { Component } from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';
// import { Navbar, Nav, Button, Form, Collapse, ButtonGroup } from 'bootstrap-4-react';

import {Component} from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form, Collapse, ButtonGroup } from 'bootstrap-4-react';
class Header extends Component{
  
  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('usertype')
    window.location.href = '/home'
  }
    render(){
      if(localStorage.getItem('token') && localStorage.getItem('usertype')==='Admin'){
        var menu = 
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/home">Our Hospital</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link" href="/doctor">Doctors<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <Link to='/logout' class="nav-link" onClick={this.logout}>LogOut</Link>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
      }
      else if(localStorage.getItem('token') && localStorage.getItem('usertype')==='User')
      {
        var menu = 
        <Navbar expand="lg" light style={{ backgroundColor: '#07416e' }} mb="3" >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/home">Our Hospital</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">AboutUs <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/doctor">Doctors<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/app">Appoitment<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/report">Report<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">ContactUs<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/profile/:id">My Profile<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <Link to='/logout' class="nav-link" onClick={this.logout}>LogOut<span class="sr-only">(current)</span></Link>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
              
            </nav>
            </Navbar>
      }
      else 
      {
        var menu = 
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
              <a class="navbar-brand" href="/home">Our Hospital</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">AboutUs <span class="sr-only">(current)</span></a>
                  </li>
                  

                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                  <li class="nav-item">
                    <a class="btn btn-outline-success my-2 my-sm-0" href="/register">Register <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="btn btn-outline-success my-2 my-sm-0" href="/login">Login <span class="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
            </nav>
      }
        return(
          <>{menu}</>
          
        )
    }
}

export default Header
// import Home from '../Container/Home';




// class Menubar extends Component {
//   logout = () => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('role')
//     window.location.href = '/home'

//   }
  

//   render() {
//     if(localStorage.getItem('token') && localStorage.getItem('usertype')==='Admin'){
//         var menu = 
        
//         <Navbar>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//               <a class="navbar-brand" href="/home"></a>
//               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav mr-auto">
//                 <li class="nav-item ">
//                     <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
//                   </li>
                 
//                   <li class="nav-item">
//                     <a class="nav-link" href="/product">Products<span class="sr-only">(current)</span></a>
//                   </li>
    
//                   <li class="nav-item">
//                     <Link to='/logout' class="nav-link" onClick={this.logout}>LogOut</Link>
//                   </li>
//                 </ul>
//                 <form class="form-inline my-2 my-lg-0">
//                   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//                   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//               </div>
//             </nav>
//             </Navbar>
            
//       }
//       else if(localStorage.getItem('token') && localStorage.getItem('usertype')==='User')
//       {
//         var menu = 
//         <Navbar>
        
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//               {/* <a class="navbar-brand" href="/home">Community hospital</a> */}
//               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav mr-auto">
//                 <li class="nav-item">
//                     <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="/about">AboutUs <span class="sr-only">(current)</span></a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="/doctor">Our doctors <span class="sr-only">(current)</span></a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="/app">Appoitments <span class="sr-only">(current)</span></a>
//                   </li>
//                   <li class="nav-item">
//                   <li class="nav-item">
//                     <a class="nav-link" href="/report">Report <span class="sr-only">(current)</span></a>
//                   </li>
                   
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="/contact">ContactUs <span class="sr-only">(current)</span></a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="/profile/:id">My Profile<span class="sr-only">(current)</span></a>
//                   </li>
//                   <li class="nav-item">
//                     <Link to='/logout' class="nav-link" onClick={this.logout}>LogOut<span class="sr-only">(current)</span></Link>
//                   </li>
//                 </ul>
//                 <form class="form-inline my-2 my-lg-0">
//                   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//                   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//               </div>
             
//             </nav>
//             </Navbar>
            
           
//       }
      
//       else 
//       {
//         var menu = 
//         <Navbar>
        
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//               <a class="navbar-brand" href="/home">Community hospital</a>
//               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav mr-auto">
//                   <li class="nav-item">
//                     <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="/aboutus">AboutUs <span class="sr-only">(current)</span></a>
//                   </li>
//                   </ul>
//                   <ul class="nav navbar-nav navbar-right">
//                   <li class="nav-item">
//                     <a class="btn btn-outline-success my-2 my-sm-0" href="/register">Register <span class="sr-only">(current)</span></a>
//                   </li>
//                   <br>
//                   </br> <br>
//                   </br>
//                   <li class="nav-item">
//                     <a class="btn btn-outline-success my-2 my-sm-0" href="/login">Login <span class="sr-only">(current)</span></a>
//                   </li>
                
//                 </ul>
                
//               </div>
//             </nav>
//             </Navbar>
            
//       }
       
//         return(
//           <>{menu}</>
//     )
//   }
// }


// export default Menubar;
