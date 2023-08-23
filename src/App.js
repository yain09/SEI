import logo from "./img/largo.svg";
import "./App.css";
import { Navbar, Container, Row } from "react-bootstrap";
import Tarjeta from "./script/components/Tarjeta.jsx";

function App() {
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light">
            <img
              alt=""
              src={logo}
              height="50"
              className="d-inline-block align-center"
            />
            <p className="pl-2 d-inline-block align-center"></p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row xs={1} md={2} xl={3} className="mt-4">
        <Tarjeta />
        </Row>
      </Container>
    </>
  );
}

export default App;
