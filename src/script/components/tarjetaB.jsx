import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Modal,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

function TarjetaB(props) {
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

  const [showModal, setShowModal] = useState(false);
  const [tarjetaEstado, setTarjetaEstado] = useState(1); // Estado inicial

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEstadoChange = (estado) => {
    setTarjetaEstado(estado);
  };

  const renderTarjetaContenido = () => {
    // Cambia el contenido de la tarjeta según el estado
    if (tarjetaEstado === 1) {
      return (
        <>
          <Modal.Header className=" text-center bg1 border">
            <Row className="w-100">
              <Col className="align-self-center">
                <p className="m-0 text-little">Fecha</p>
                <p className="h5" id="idFecha">
                  {fecha}
                </p>
              </Col>
              <Col className="align-self-center">
                <p className="m-0 text-little">Clase N°</p>
                <p className="h5" id="idClase">
                  {numClase}
                </p>
              </Col>
              <Col className="align-self-center">
                <p className="m-0 text-little">U. Temática</p>
                <p className="h5" id="idUnidad">
                  {uTematica}
                </p>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body className="pt-1 ">
            <Row className="m-0 mt-2 w-100">
              <Col
                className="px-0 text-start d-inline-block text-little"
                style={{ color: "rgb(150,150,150)" }}
              >
                Teoría
              </Col>
              <Col
                xs={8}
                className="text-end px-0 d-inline-block text-little"
                style={{ color: "rgb(150,150,150)" }}
              >
                Docente acargo:
                <span style={{ color: "rgb(50,50,50)" }}> {docente}</span>{" "}
              </Col>{" "}
              <Col
                xs={2}
                className="text-end px-0 d-inline-block text-little"
                style={{ color: "rgb(150,150,150)" }}
              >
                <span style={{ color: "rgb(50,50,50)" }}>{cht}</span> hs
              </Col>
            </Row>
            <Row className="mt-2">
              {txtTeoria !== "-" ? <p>{txtTeoria}</p> : ""}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton
                id="tbg-radio-1"
                value={1}
                onClick={() => handleEstadoChange(1)}
              >
                Teoría
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-2"
                value={2}
                onClick={() => handleEstadoChange(2)}
              >
                Práctica
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-3"
                value={3}
                onClick={() => handleEstadoChange(3)}
              >
                TP
              </ToggleButton>
            </ToggleButtonGroup>

            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </>
      );
    } else if (tarjetaEstado === 2) {
      return (
        <>
          <Modal.Header className=" text-center bg1 border">
            <Row className="w-100">
              <Col className="align-self-center">
                <p className="m-0 text-little">Fecha</p>
                <p className="h5" id="idFecha">
                  {fecha}
                </p>
              </Col>
              <Col className="align-self-center">
                <p className="m-0 text-little">Clase N°</p>
                <p className="h5" id="idClase">
                  {numClase}
                </p>
              </Col>
              <Col className="align-self-center">
                <p className="m-0 text-little">U. Temática</p>
                <p className="h5" id="idUnidad">
                  {uTematica}
                </p>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body className="pt-1 ">
            <Row className="m-0 mt-2 w-100">
              <Col
                className="px-0 text-start d-inline-block text-little"
                style={{ color: "rgb(150,150,150)" }}
              >
                Práctica
              </Col>
              <Col
                xs={1}
                className="text-end px-0 d-inline-block text-little"
                style={{ color: "rgb(150,150,150)" }}
              >
                <span style={{ color: "rgb(50,50,50)" }}>{cht}</span> hs
              </Col>
            </Row>
            <Row className="mt-2">
              {txtPractica !== "-" ? <p>{txtPractica}</p> : ""}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton
                id="tbg-radio-1"
                value={1}
                onClick={() => handleEstadoChange(1)}
              >
                Teoría
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-2"
                value={2}
                onClick={() => handleEstadoChange(2)}
              >
                Práctica
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-3"
                value={3}
                onClick={() => handleEstadoChange(3)}
              >
                TP
              </ToggleButton>
            </ToggleButtonGroup>

            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </>
      );
    } else if (tarjetaEstado === 3) {
      return (
        <>
          <Modal.Header className=" text-center bg1 border">
            <Row className="w-100">
              <Col className="align-self-center">
                <p className="m-0 text-little">Fecha</p>
                <p className="h5" id="idFecha">
                  {fecha}
                </p>
              </Col>
              <Col className="align-self-center">
                <p className="m-0 text-little">Clase N°</p>
                <p className="h5" id="idClase">
                  {numClase}
                </p>
              </Col>
              <Col className="align-self-center">
                <p className="m-0 text-little">U. Temática</p>
                <p className="h5" id="idUnidad">
                  {uTematica}
                </p>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body className="pt-1 ">
            <Row className="m-0 mt-2 w-100">
              <Col
                className="px-0 text-start d-inline-block text-little"
                style={{ color: "rgb(150,150,150)" }}
              >
                Trabajo Práctico
              </Col>
              
              <Col
                xs={1}
                className="text-end px-0 d-inline-block text-little"
                style={{ color: "rgb(150,150,150)" }}
              >
                <span style={{ color: "rgb(50,50,50)" }}>{cht}</span> hs
              </Col>
            </Row>
            <Row className="mt-2">
              {txtTp !== "-" ? <p>{txtTp}</p> : ""}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton
                id="tbg-radio-1"
                value={1}
                onClick={() => handleEstadoChange(1)}
              >
                Teoría
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-2"
                value={2}
                onClick={() => handleEstadoChange(2)}
              >
                Práctica
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-3"
                value={3}
                onClick={() => handleEstadoChange(3)}
              >
                TP
              </ToggleButton>
            </ToggleButtonGroup>

            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </>
      );
    }
  };

  return (
    <Col className="d-flex justify-content-center">
      <Card
        className="align-self-center card my-4 px-1 pb-0"
        onClick={handleOpenModal}
        style={{ cursor: "pointer" }}
      >
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

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="custom-modal"
        centered
      >
        {renderTarjetaContenido()}
      </Modal>
    </Col>
  );
}

export default TarjetaB;
