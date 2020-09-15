import React,{Component,useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

//context inside class component
// class Navbar extends Component {
//     static contextType=ThemeContext;
//     // This technique can only be used with class component
//     render() {
//         // console.log(this.context);
//         const {isLightTheme,light,dark}=this.context; //this is destructuring
//         const theme=isLightTheme?light:dark;

//         return (
//             <nav style={{ background:theme.ui, color:theme.text}}> 
//                 <h2 className="text-center">Context App</h2>
//                 <ul className="row">
//                     <li className="col order-first">Home</li>
//                     <li className="col">About Us</li>
//                     <li className="col order-last">Contact Us</li>
//                 </ul>
//             </nav>
//         );
//     }
//}


//context inside functional componenet
const Navbar=()=>{
    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme=isLightTheme?light:dark;
            return (
            <nav style={{ background:theme.ui, color:theme.text}}> 
                <h2 className="text-center">Context App</h2>
                <ul className="row">
                    <li className="col order-first">Home</li>
                    <li className="col">About Us</li>
                    <li className="col order-last">Contact Us</li>
                </ul>
            </nav>
        );
}

export default Navbar;