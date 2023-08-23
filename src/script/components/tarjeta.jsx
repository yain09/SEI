import React from "react";
import { Accordion, Card, Row, Col } from "react-bootstrap";

export function Tarjeta() {
  return (
    <article className="col">
      <Card className="card h-100 shadow-sm">
        <Card.Header className="card-header text-center bg1 border">
          <Row>
            <Col className="col align-self-center">
              <p className="m-0">Fecha</p>
              <p className="h5" id="idFecha">
                12 ABR
              </p>
            </Col>
            <Col className="col col align-self-center">
              <p className="m-0">Clase N°</p>
              <p className="h5" id="idClase">
                01
              </p>
            </Col>
            <Col className="col col align-self-center">
              <p className="m-0">U. Temática</p>
              <p className="h5" id="idUnidad">
                1
              </p>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Accordion flush className="m-0 p-0">
            <Accordion.Item>
              <Accordion.Header className="px-0">
                <p className="px-0 fs-5 d-inline-block align-center text-uppercase">Teoría </p>
              </Accordion.Header>
              <Accordion.Body>
                Presentación y condiciones generales del curso Introducción: El
                problema estructural en arquitectura Estructuras resistentes
                arquitectónicas. Definición. Finalidad de la estructura.
                Exigencias estructurales específicas: la estabilidad, el
                equilibrio, la resistencia y la rigidez. Sistemas Estructurales
                Arquitectónicos. Proyecto estructural. Formas de los sistemas
                estructurales Estructuras de acero. Estructuras de madera.
                Estructuras de hormigón armado. Generación geométrica de formas
                estructurales. Generalidades. Tipologías. Forma y proporciones
                de los componentes estructurales. Medios de unión.
              </Accordion.Body>
            </Accordion.Item>
            <Card.Title className="card-title mt-2">Práctica</Card.Title>
            <div className="card-text" id="idPractica">
              -
            </div>
            <h5 className="card-title mt-2">TP</h5>
            <div className="card-text" id="idTp">
              -
            </div>
          </Accordion>
        </Card.Body>
        <div className="card-footer">
          <p className="text-black-50" id="idDocente">
            Cesar Bruschini
          </p>
        </div>
      </Card>
    </article>
  );
}

export default Tarjeta;
