import React from "react";
import {
  Divider,
  List,
  ListItemText,
  ListItemButton,
  
} from "@mui/material";
import "./styles.css";
import { Link } from 'react-router-dom';
import fetchModel from "../../lib/fetchModelData";


/**
 * Define UserList, a React component of CS142 Project 5.
 */

//help


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      list: null,


    };
   
  }
   componentDidMount() {
     fetchModel("http://localhost:3000/user/list").then(
       list => {
         this.setState({ list: list });
       }).catch(
        
         error => {
           this.setState({ error: error });
         }
          
        
       );
  }
  
  render() {
    if (this.state.error) {
      return (<div>We meet some mistakes</div>);
    }
    if (!this.state.list) {
      return (<div>loading!!!</div>);
    }
    let users = this.state.list.data;
    let nameList = users.map(user => {
      return (
        <div key={user._id}>
          <ListItemButton >
            <Link to={'/users/' + user._id} >
              <ListItemText primary={user.first_name + ' ' + user.last_name} />
            </Link>
          </ListItemButton>
          <Divider />
        </div>
      );
      
    });
    return (
      <div>
        {
        <List component="nav">
            {nameList}
        </List>
        }
      </div>
    );
  }
}

export default UserList;
