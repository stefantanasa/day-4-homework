import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Form, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: {
      query: "",
      filteredList: this.props.bookList,
    },
  };
  filterBook = (query) => {
    let filteredList = this.props.bookList.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ search: { ...this.state.search, query, filteredList } });
  };

  handleChange = (e) => {
    this.filterBook(e.target.value);
    console.log(this.state.filteredList);
  };

  render() {
    return (
      <div>
        <Form className="mt-3" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search Book"
              value={this.state.query}
              onChange={(e) => this.handleChange(e)}
            />
          </Form.Group>
        </Form>
        <Container className="d-flex justify-content-center">
          <Row>
            {this.state.search.filteredList.map((book) => (
              // <ListGroup.Item key={book.asin}>{book.title}</ListGroup.Item>
              <SingleBook book={book} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
