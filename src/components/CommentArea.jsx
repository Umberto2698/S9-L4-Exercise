import { Component } from "react";

import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    commetsList: [],
  };

  componentDidMount = async () => {
    try {
      const data = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTZlY2MwMzRmZjAwMTQwM2Y0ZTgiLCJpYXQiOjE2OTQwOTE4OTgsImV4cCI6MTY5NTMwMTQ5OH0.BGAZfBp-IPyouU0rxraaD0PcWzU7lubsISdRUrZtx_g",
        },
      });
      if (data.ok) {
        const comments = await data.json();
        this.setState({ commetsList: comments });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <CommentsList commentsList={this.state.commetsList}></CommentsList>
        <AddComment bookId={this.props.id}></AddComment>
      </div>
    );
  }
}

export default CommentArea;
