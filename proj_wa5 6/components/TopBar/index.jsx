import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

/**
 * Define TopBar, a React component of CS142 Project 5.
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      user: null,
    };
    
  }





  componentDidUpdate() {
    if (this.props.match.params !== undefined) {
      fetchModel("http://localhost:3000/user/" + this.props.match.params.id).then(
        user => {
          this.setState({ user: user });
        }).catch(
          error => {
            this.setState({ error: error });
          }
        );
    }
  }

  render() {
    let show;
    if (!this.state.user) {
      return <div>loading!!!</div>;
    }
    if (this.state.error) {
      return <div>We meet some mistakes</div>;
    }
    if(this.props.match.params !== undefined){
      let { kind, } = this.props.match.params;
      let user = this.state.user.data;
      if (kind === "users") {
        //获取用户名字
         show = user.first_name + user.last_name;
      }
      if (kind === "photos") {
         show = "Photos of " + user.first_name + user.last_name;
      }
      if (kind === "") {
        show = "";
        // console.log(show);
      }

    }
  
    return (
      
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            <div id="left"> Xiao long</div>
            <div id="right">
              {show}
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
