import { Col, Row } from "react-bootstrap";

function Separador() {
  return(
    <Row className="receso-text">
      <Col></Col>
      <Col>
        <h1
          className="text-white text-center m-0"
          style={{ backgroundColor: "#202023"}}
        >
          Receso
        </h1>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Separador;
