import { Card, Row, Col } from "react-bootstrap";
function TarjetaA(props) {
  const {
    ch,
    cht,
    chtp,
    fecha,
    numClase,
    uTematica,
    txtTeoria,
    txtPractica,
    txtTp,
    docente,
  } = props;
  return (
    <Col className="d-flex justify-content-center">
      <Card className="align-self-center card my-4 px-1 pb-0">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="m-0 px-0 text-little">Fecha</p>
          <p
            className="h5"
            id="idFecha"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            {fecha.toUpperCase()}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="m-0 text-little">Clase N°</p>
          <p
            className="numero mb-0 pb-0"
            id="idClase"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            {numClase}
          </p>
        </div>
      </Card>
    </Col>
  );
}
export default TarjetaA;
