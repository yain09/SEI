import { Col, Row } from "react-bootstrap";

function Separador() {
  return(
    <Row className="receso-text">
      <Col></Col>
      <Col>
        <h1
          className="text-center m-0"
          style={{ color: "#202023"}}
        >
          RECESO INVERNAL
        </h1>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Separador;
