import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menubar from './Menubar'

 class Header extends Component{
     render(){
         return(
           <div>
             <Menubar></Menubar>
             
           </div>
           
            
          
         )
     }

 }
 export default Header