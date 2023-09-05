import { useState, useEffect } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Tarjeta from "./script/components/Tarjeta";
import TarjetaA from "./script/components/tarjetaA";
import TarjetaB from "./script/components/tarjetaB";
import Cabecera from "./script/components/Cabecera";


function App() {
  const [tarjetasData, setTarjetasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
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
  }, []);

  return (
    < >
      <Cabecera/>
      <Container className="">
        {isLoading ? (
          <div className="loading-spinner"></div>
        ) : (
          <Row xs={2} sm={3} md={4} lg={5} xl={6} className="mt-4 py-2">
            {tarjetasData.map((tarjetaProps, index) => (
              <TarjetaB key={index} {...tarjetaProps}/>
            ))}
          </Row>
        )}
        
      </Container>
    </>
  );
}

export default App;
