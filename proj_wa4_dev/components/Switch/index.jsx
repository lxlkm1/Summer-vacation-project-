import React from "react";
import "./style.css";
import Example from "../Example";




class ChangeBoard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            allDisplay: ["./getting-started.html", "./p2.html"],
            nowDisplay: 0,
            butTips:["Switch to Example", "Switch to States"],
        }
        this.changSelf = this.changSelf.bind(this);

    }
    render() {
        return (<><div id="swiBoard">
            <button id="swiBut" onClick={this.changSelf} >{this.state.butTips}</button>
            <iframe src={this.state.allDisplay[this.state.nowDisplay]} width="1920"height="1080"></iframe>
        </div> </>);
    }
    changSelf() {
        if (this.state.nowDisplay === 0) {
            this.setState({ nowDisplay: 1 });
        }
        else {
             this.setState({ nowDisplay: 0 });
        }
    }
}

export default ChangeBoard;