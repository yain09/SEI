import { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta"
import { Row } from "react-bootstrap";

function TablaCuatrimestre1() {
  const [tarjetasData, setTarjetasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const sheetId = "1jCpaUtRcak3yeYa8YvzyLNg36UCxYrq9lX8AsDFRnTs";
    const sheetTitle = "Crono1cuat";
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
    <>
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="mt-4 py-2">
          {tarjetasData.map((tarjetaProps, index) => (
            <Tarjeta key={index} {...tarjetaProps} />
          ))}
        </Row>
      )}
    </>
  );
}

export default TablaCuatrimestre1;
