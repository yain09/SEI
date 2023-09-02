import logo from "./img/largo.svg";
import "./App.css";
import { Navbar, Container, Row } from "react-bootstrap";
import Tarjeta from "./script/components/Tarjeta";
import { useState } from "react";

function App() {
  const [tarjetasProps, setTarjetasProps] = useState({
    fecha: "",
    numClase: "",
    uTematica: "",
    txtTeoria: "",
    txtPractica: "",
    txtTp: "",
    docente: "",
  });

const card = load()
function load() {
    let sheetId = "/1jCpaUtRcak3yeYa8YvzyLNg36UCxYrq9lX8AsDFRnTs";
    let sheetTitle = "Cronograma";
    let fullUrl =
      "https://docs.google.com/spreadsheets/d" +
      sheetId +
      "/gviz/tq?sheet=" +
      sheetTitle;
    

    fetch(fullUrl)
      .then((res) => res.text())
      .then((rep) => {
        var data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;
        let tabla = data.table.rows;
        
        for (let i = 0; i < length; i++) {
          let fila = tabla[i].c;
          setTarjetasProps({
            fecha: fila[0].f,
            numClase: fila[1].f,
            uTematica: fila[2].f,
            docente: fila[3].v,
            ch: fila[4].f,
            txtTeoria:  fila[5].v,
            cht: fila[6].v,
            txtPractica: fila[7].v,
            chp: fila[8].f,
            txtTp: fila[9].v,
            chtp: fila[10].f
          });
          <Tarjeta {...tarjetasProps} />
          }
      });
  }
  ;

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
        {load()}
        </Row>
      </Container>
    </>
  );
}

export default App;
