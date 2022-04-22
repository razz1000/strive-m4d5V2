import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook";
import { Row } from "react-bootstrap";
import BookList from "./Components/BookList";
import FilterBookList from "./Components/FilterBookList";
import fanatasyBooksArray from "./Data/fantasy.json";
import CommentArea from "./Components/CommentArea";

function App() {
  return (
    <div>
      <div className="App">
        <Row>
          <CommentArea></CommentArea>
          <FilterBookList />
        </Row>
        <WarningSign dangerText="This is a  asdjælskjdfælkjasdf warning from Leon and Rasmus ! " />
      </div>

      <MyBadge color="primary" string="Hi there" />
      <Row>
        <BookList books={fanatasyBooksArray} />
      </Row>
    </div>
  );
}

export default App;
