import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MDBCard } from "mdb-react-ui-kit";
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
      const docente = fila.c[9].v;
      const grupo = fila.c[12].v;
      const alumno = fila.c[6].v;

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
  const coloresDocentes = {
    // Color para Docente
    "ARMELINI, Griselda": "rgb(144, 238, 144)", //Docente 1
    "COZZI, Gabriela": "rgb(35, 206, 250)", // Docente 2
    "GODOY, Yaín": "rgb(196, 174, 51)", //  Docente 3
    "HERRERO, Valeria": "rgb(105, 105, 105)", // Docente 4
    "ORSI, Rocío": "rgb(244, 164, 96)",
    "PUIG, Sebastián": "rgb(220, 20, 60)",
  };
  const isMdScreen = useMediaQuery({ maxWidth: 1200, minWidth: 768 });
  const isXsScreen = useMediaQuery({ maxWidth: 576 });
  const cardStyle = isXsScreen
    ? { minWidth: "350px", maxHeight: "150px" }
    : isMdScreen
    ? { minWidth: "320px", maxHeight: "150px" }
    : { minWidth: "400px", maxHeight: "150px" };
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
          {Object.keys(docentesData)
            .filter((docente) => docente !== "Sin Agrupamiento")
            .map((docente) => (
              <div
                key={docente}
                className="text-white pt-4"
                style={{ textAlign: "center" }}
              >
                <span className="text-little">docente</span>
                <span className="h2"> {docente}</span>
                <Row>
                  {Object.keys(docentesData[docente]).map((grupo) => {
                    const isSinAgrupamiento = docente === "Sin Agrupamiento";
                    const grupoStyle = isSinAgrupamiento
                      ? { display: "none" }
                      : { display: "flex" };

                    return (
                      <Col
                        xs={12}
                        md={6}
                        style={{ display: "flex" }}
                        className="justify-content-center"
                        key={grupo}
                      >
                        <MDBCard
                          style={{
                            ...cardStyle,
                            backgroundColor: "transparent",
                            borderWidth: "2px",
                            borderColor: coloresDocentes[docente], // Establecer el color de borde
                          }}
                          className="align-item-center my-2 mx-0"
                        >
                          <Row
                            className="w-100 d-flex align-item-center justify-content-center"
                            style={grupoStyle}
                          >
                            <Col
                              xs={3}
                              style={{ alignItems: "center" }}
                              className="flex-column p-0 m-0 justify-content-center"
                            >
                              <p
                                style={{ color: "rgb(130,130,130)" }}
                                className="text-little mb-0 pt-1"
                              >
                                Grupo
                              </p>
                              <p
                                className="mb-0 pb-1"
                                style={{
                                  alignItems: "center",
                                  fontSize: "3rem",
                                  color: coloresDocentes[docente],
                                }}
                              >
                                {grupo}
                              </p>
                            </Col>
                            <Col xs={8} className="p-0">
                              {docentesData[docente][grupo].map((alumno) => (
                                <p
                                  key={alumno}
                                  className="m-0 p-0 text-capitalize align-text-left text-light"
                                  style={
                                    isSinAgrupamiento ? { display: "none" } : {}
                                  }
                                >
                                  {alumno}
                                </p>
                              ))}
                            </Col>
                          </Row>
                        </MDBCard>
                      </Col>
                    );
                  })}
                </Row>
                <hr
                  style={{
                    border: `2px solid ${coloresDocentes[docente]}`,
                    width: "100%",
                    margin: "0 auto",
                  }}
                  className="mt-4"
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default TablaGrupos;
