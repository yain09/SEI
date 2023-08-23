import logo from "./img/largo.svg";
import "./App.css";
import { Navbar, Container } from "react-bootstrap";


function App() {
  return (
    <>
      <Navbar className="bg-black">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
