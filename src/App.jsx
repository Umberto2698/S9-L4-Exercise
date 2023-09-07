// import logo from './logo.svg';
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
// import library from "./data/scifi.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Welcome></Welcome>
      {/* <SingleBook book={library[0]}></SingleBook> */}
      {/* <AllTheBooks></AllTheBooks> */}
      <BookList></BookList>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
