import logo from "./img/largo.svg";
import "./App.css";
import { Navbar, Container, Row } from "react-bootstrap";
import Tarjeta from "./script/components/Tarjeta";
import { useState, useEffect } from "react";

function App() {
  const [tarjetasData, setTarjetasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tarjetaProps, setTarjetasProps] = useState({
    fecha: "-",
    numClase: "-",
    uTematica: "-",
    txtTeoria: "-",
    txtPractica: "-",
    txtTp: "-",
    docente: "-",
  });
  useEffect(() => {
    // Realiza la solicitud y procesa los datos una vez cuando se monta el componente
    const sheetId = "1jCpaUtRcak3yeYa8YvzyLNg36UCxYrq9lX8AsDFRnTs";
    const sheetTitle = "Cronograma";
    const fullUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${sheetTitle}`;

    fetch(fullUrl)
      .then((res) => res.text())
      .then((rep) => {
        const data = JSON.parse(rep.substr(47).slice(0, -2));
        const tabla = data.table.rows;

        const tarjetasDataArray = tabla.map((fila) => ({
          fecha: fila.c[0].f,
          numClase: fila.c[1].f,
          uTematica: fila.c[2].f,
          docente: fila.c[3].v,
          ch: fila.c[4].f,
          txtTeoria: fila.c[5].v,
          cht: fila.c[6].v,
          txtPractica: fila.c[7].v,
          chp: fila.c[8].f,
          txtTp: fila.c[9].v,
          chtp: fila.c[10].f,
        }));

        setTarjetasData(tarjetasDataArray);
        setIsLoading(false);
      });
  }, []); // El segundo argumento [] asegura que se ejecute solo una vez

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
        {isLoading ? ( // Muestra el indicador de carga si isLoading es verdadero
          <div className="loading-spinner"></div>
        ) : (
          <Row xs={1} md={2} xl={3} className="mt-4 py-2">
            {tarjetasData.map((tarjetaProps, index) => (
              <Tarjeta key={index} {...tarjetaProps}/>
            ))}
          </Row>
        )}
        {/* <Tarjeta {...tarjetaProps}/> */}
      </Container>
    </>
  );
}

export default App;
