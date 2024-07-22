import "./styles.css";
import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div id="Body">
            <img id="pic1" src="/components/Mark/test.jpg" />
            <h2 id="HeaderAli">Created by lxl</h2>
            </div>
        );
    }
}



export default Header;