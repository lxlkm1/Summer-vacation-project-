import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserDetail, a React component of CS142 Project 5.
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(11111);
    this.state = {
      user: null,
      error: null,
    };
     
  }
  componentDidUpdate() {
      let selectedId = this.props.match.params.userId;
      fetchModel("http://localhost:3000/user/" + selectedId).then(
        useritems => {
          let userData = useritems.data;
          let user = Object.values(userData);
          user.shift();
          this.setState({ user: user });
        }).catch(
          error => {
            this.setState({ error: error });
          }
        );
    }
  



  render() {
      const { user, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!user) {
      return <div>Loading...</div>;
    }
   return (
  <div>
    <h2>name: &nbsp; {user[0] + user[1]}</h2>
    <h2>location:&nbsp;{user[2]}</h2>
    <h2>description:&nbsp;{user[3]}</h2>
    <h2>occupation:&nbsp;{user[4]}</h2>
    <Link to={`/photos/${this.props.match.params.userId}`}>
      <h1>His photos</h1>
    </Link>
  </div>
);

    
     
  }
}

export default UserDetail;
