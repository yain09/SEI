import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

async function fetchData() {
  try {
    const sheetId = "1jCpaUtRcak3yeYa8YvzyLNg36UCxYrq9lX8AsDFRnTs";
    const sheetTitle = "ListadoSIU";
    const fullUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${sheetTitle}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const rep = await response.text();
    const data = JSON.parse(rep.substr(47).slice(0, -2));
    const tabla = data.table.rows;

    const docentesDataMap = {};

    tabla.forEach((fila) => {
      const docente = fila.c[8].v;
      const grupo = fila.c[11].v;
      const alumno = fila.c[5].v;

      if (!docentesDataMap[docente]) {
        docentesDataMap[docente] = {};
      }

      if (!docentesDataMap[docente][grupo]) {
        docentesDataMap[docente][grupo] = [];
      }

      docentesDataMap[docente][grupo].push(alumno);
    });

    return docentesDataMap;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Puedes manejar el error o lanzarlo de nuevo para que se maneje en otro lugar
  }
}

function TablaGrupos() {
  const isMdScreen = useMediaQuery({ maxWidth: 1200, minWidth: 768 });
  const isXsScreen = useMediaQuery({ maxWidth: 576 });
  const cardStyle = isXsScreen
    ? { minWidth: "350px", maxHeight: "120px" }
    : isMdScreen
    ? { minWidth: "320px", maxHeight: "120px" }
    : { minWidth: "400px", maxHeight: "120px" };
  const [docentesData, setDocentesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setDocentesData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div>
          {Object.keys(docentesData).map((docente) => (
            <div
              key={docente}
              className="text-white"
              style={{ textAlign: "center" }}
            >
              <h2> {docente}</h2>
              <Row>
                {Object.keys(docentesData[docente]).map((grupo) => (
                  <Col
                    xs={12}
                    md={6}
                    style={{ display: "flex" }}
                    className="justify-content-center"
                  >
                    {" "}
                    <Card
                      style={cardStyle}
                      className="align-item-center card2 my-2 mx-0"
                      key={grupo}
                    >
                      <Row className="w-100 d-flex align-item-center justify-content-center">
                        <Col
                          xs={3}
                          style={{ alignItems: "center", fontSize: "3rem" }}
                          className="d-flex p-0 m-0 justify-content-center"
                        >
                          {grupo}
                        </Col>
                        <Col xs={9}>
                          {docentesData[docente][grupo].map((alumno) => (
                            <p
                              key={alumno}
                              className="m-0 p-0 text-capitalize align-text-left text-dark"
                            >
                              {alumno.toLowerCase()}
                            </p>
                          ))}
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TablaGrupos;
