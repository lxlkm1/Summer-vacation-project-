import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import Header from "./components/Mark";
import Example from "./components/Example";
import States from "./components/States";
import "./styles/p5.css"








ReactDOM.render((
    
   <> <Header></Header>
        <HashRouter>
            
    <div id="top">
    <div className="block"><Link className ="lk" to="/example">Switch to Example</Link></div>  
    <div className="block"><Link className ="lk" to="/states">Switch to states</Link></div>
   </div>
    <Route  path="/example" component = {Example}/>
    <Route path="/states" component={States} />
    <Route component = {Example}></Route>
    


</HashRouter></>)
, document.getElementById("reactapp"));


    
    
    
    
    
    
    
    
    
    
    
