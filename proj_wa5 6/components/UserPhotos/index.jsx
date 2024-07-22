import React from "react";

import "./styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserPhotos, a React component of CS142 Project 5.
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIdPhotoes: null,
      error: null,
    };
  }


  componentDidMount() {
    fetchModel("http://localhost:3000/photosOfUser/" + this.props.match.params.userId).then(
      selectedIdPhotoes => {
        this.setState({ selectedIdPhotoes: selectedIdPhotoes });
      }
    ).catch(error => {
      this.setState({ error: error });
    });
  }




  render() {
    if (!this.state.selectedIdPhotoes) {
      return (<div>loading404</div>);
      
    }
    if (this.state.error) {
      return (<div>We meet some mistakes</div>);
    }
    
    
    //获取评论
    let selectedIdPhotoes = this.state.selectedIdPhotoes.data;
    let displayPhotoes = selectedIdPhotoes.map(
      (photo) => {
        let comments;
       
        if (photo.comments !== undefined) {
           comments = photo.comments.map(
            comment => {
              return (
                <div key=
                  {comment._id}>
                  <h2>{"Date_time: " + comment.date_time}</h2>
                  <h2>{"Comment: " + comment.comment}</h2>
                  <h2><Link to={"/users/" + comment.user._id}>{"User: " + comment.user.first_name + comment.user.last_name}</Link></h2>
                </div>
              );
            });
        }
        else {
          comments = [];
        }
        return (
          <div key={"photo" + photo._id}>
            <img src={'./images/' + photo.file_name} width="150px" height="150px" />
            <h2>{"photo_time: " + photo.date_time}</h2>
            {comments}
          </div>
        );
      }
      
    );
            
    return (displayPhotoes);
  }
}

export default UserPhotos;
