import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import books from "./data/romance.json";

function App() {
  return (
    <div className="App">
      <Container>
        <WarningSign alertText="Warning Alert text" />
        <MyBadge textBadge="Badge" color="danger" />

        <BookList bookList={books} />
      </Container>
    </div>
  );
}

export default App;
