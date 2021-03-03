import "./App.css";
import Card from "./Components/Card/Card";
import User from "./Components/User/User";
import Nav from "./Components/Nav/Nav";
import Jumbotron from "./Components/Jumbotron/Jumbotron";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      {/* <Card /> */}
      <User />
    </div>
  );
}

export default App;
