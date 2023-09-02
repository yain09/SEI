import React from "react";
import { Accordion, Card, Row, Col } from "react-bootstrap";

export function Tarjeta(props) {
  const { ch, cht, chtp, fecha, numClase, uTematica, txtTeoria, txtPractica, txtTp, docente } =
    props;
  return (
    <Col className="mb-4">
      <Card className="card h-100 shadow-sm">
        <Card.Header className="card-header text-center bg1 border">
          <Row>
            <Col className="col align-self-center">
              <p className="m-0">Fecha</p>
              <p className="h5" id="idFecha">
                {fecha}
              </p>
            </Col>
            <Col className="col col align-self-center">
              <p className="m-0">Clase N°</p>
              <p className="h5" id="idClase">
                {numClase}
              </p>
            </Col>
            <Col className="col col align-self-center">
              <p className="m-0">U. Temática</p>
              <p className="h5" id="idUnidad">
                {uTematica}
              </p>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
        {txtTeoria !== "-" ? (
            <Accordion flush className="m-0 p-0">
              <Accordion.Header className="px-0">
                <p className="px-0 fs-3 d-inline-block align-center">
                  Teoría
                </p>
              </Accordion.Header>
              <Accordion.Body className="mb-3 text-right">
                {txtTeoria}
              </Accordion.Body>
            </Accordion>
          ) : (
            <Accordion.Header className="px-0">
              <p className="px-0 fs-3 d-inline-block align-center">
                <span className="text-muted">Teoría</span>
              </p>
            </Accordion.Header>
          )}
          {txtPractica !== "-" ? (
            <Accordion flush className="m-0 p-0">
              <Accordion.Header className="px-0">
                <p className="px-0 fs-3 d-inline-block align-center">
                  Práctica
                </p>
              </Accordion.Header>
              <Accordion.Body className="mb-3 text-right">
                {txtPractica}
              </Accordion.Body>
            </Accordion>
          ) : (
            <Accordion.Header className="px-0">
              <p className="px-0 fs-3 d-inline-block align-center">
                <span className="text-muted">Práctica</span>
              </p>
            </Accordion.Header>
          )}
          {txtTp !== "-" ? (
            <Accordion flush className="m-0 p-0">
              <Accordion.Header className="px-0">
                <p className="px-0 fs-3 d-inline-block align-center">Tp</p>
              </Accordion.Header>
              <Accordion.Body className="mb-3 text-right">
                {txtTp}
              </Accordion.Body>
            </Accordion>
          ) : (
            <Accordion.Header className="px-0">
              <p className="px-0 fs-3 d-inline-block align-center">
                <span className="text-muted">Tp</span>
              </p>
            </Accordion.Header>
          )}
        </Card.Body>
        <div className="card-footer">
          <p className="text-black-50" id="idDocente">
            {docente}
          </p>
        </div>
      </Card>
    </Col>
  );
}

export default Tarjeta;
