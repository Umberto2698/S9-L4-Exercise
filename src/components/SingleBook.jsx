import { Component } from "react";
import CommentArea from "./CommentArea";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  selectCard = (e) => {
    e.preventDefault();
    this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
  };

  render() {
    return (
      <div className="object-contain mx-auto">
        {this.state.selected ? (
          <Card className="border-success">
            <Card.Img onClick={this.selectCard} variant="top" src={this.props.book.img} style={{ height: "300px" }} />
            <Card.Body>
              <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
              <CommentArea id={this.props.book.asin}></CommentArea>
            </Card.Body>
          </Card>
        ) : (
          <Card>
            <Card.Img onClick={this.selectCard} variant="top" src={this.props.book.img} style={{ height: "300px" }} />
            <Card.Body>
              <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default SingleBook;
