import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: true,
    style: { width: "10rem", margin: "10px" },
  };

  handleSelected = () => {
    console.log("Handle Selected:", this.state.selected);

    if (this.state.selected === true) {
      this.setState({
        ...this.state,
        selected: !this.state.selected,
        style: { width: "12rem", margin: "10px" },
      });
    } else {
      this.setState({
        ...this.state,
        selected: !this.state.selected,
        style: { width: "10rem", margin: "10px" },
      });
    }
  };

  // style = this.state.selected ? "20rem" : "18rem";

  render() {
    return (
      <Card
        style={this.state.style}
        onClick={() => this.handleSelected(this.props.book.asin)}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          style={{ objectFit: "cover", height: "15rem" }}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
