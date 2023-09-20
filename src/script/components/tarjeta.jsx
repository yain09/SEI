import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Modal,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function Tarjeta(props) {
  const {
    cht,
    chp,
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
  const [tarjetaEstado, setTarjetaEstado] = useState(() => {
    if (txtTeoria !== "-") {
      return 1;
    } else if (txtPractica !== "-") {
      return 2;
    } else if (txtTp !== "-") {
      return 3;
    }
    // Si ninguno de los casos anteriores se cumple, puedes establecer un valor predeterminado aquí.
    return 1; // Por ejemplo, 1 como valor predeterminado.
  });

  const [selectedButton, setSelectedButton] = useState(1);

  const handleEstadoChange = (estado) => {
    setTarjetaEstado(estado);
  };

  const isXsScreen = useMediaQuery({ maxWidth: 767 });

  const handleOpenModal = () => {
    if (isXsScreen) {
      setTimeout(() => {
        setShowModal(true);
      }, 75);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const horas = (h) => {
    return h !== "0,00" ? <span className="text-little">{h} hs</span> : null;
  };

  const styleTeoria = txtTeoria.includes("EXAMEN")
    ? { cursor: "pointer", background: "rgba(247, 57, 101, 50%) " }
    : txtTeoria.includes("PARO") || txtTeoria.includes("FERIADO")
    ? { cursor: "pointer", opacity: 0.3 }
    : { cursor: "pointer" };

  const renderTarjetaContenido = () => {
    if (tarjetaEstado === 1) {
      return (
        <>
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
              Docente a cargo:
              <span style={{ color: "rgb(50,50,50)" }}> {docente}</span>{" "}
            </Col>{" "}
            <Col
              xs={2}
              className="text-end px-0 d-inline-block text-little"
              style={{ color: "rgb(150,150,150)" }}
            >
              <span style={{ color: "rgb(50,50,50)" }}>{cht} hs</span>
            </Col>
          </Row>
          <Row className="mt-2">
            {txtTeoria !== "-" ? <p>{txtTeoria}</p> : ""}
          </Row>
        </>
      );
    } else if (tarjetaEstado === 2) {
      return (
        <>
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
              <span style={{ color: "rgb(50,50,50)" }}>{chp} hs</span>
            </Col>
          </Row>
          <Row className="mt-2">
            {txtPractica !== "-" ? <p>{txtPractica}</p> : ""}
          </Row>
        </>
      );
    } else if (tarjetaEstado === 3) {
      return (
        <>
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
              <span style={{ color: "rgb(50,50,50)" }}>{chtp} hs</span>
            </Col>
          </Row>
          <Row className="mt-2">{txtTp !== "-" ? <p>{txtTp}</p> : ""}</Row>
        </>
      );
    }
  };

  return (
    <Col className="d-flex justify-content-center">
      <Card
        className="align-self-center card my-4 px-1 pb-0"
        onClick={handleOpenModal}
        style={styleTeoria}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            className="m-0 px-0 text-little"
            style={{ color: "rgb(130,130,130)" }}
          >
            Fecha
          </p>
          <p
            className="h5"
            id="idFecha"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            {fecha.toUpperCase()}
          </p>
          <p
            className="h5"
            id="idFecha"
            style={{ color: "rgb(255, 255, 255)" }}
          ></p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="m-0 text-little" style={{ color: "rgb(130,130,130)" }}>
            Clase N°
          </p>
          <p
            className="numero mb-0 pb-0"
            id="idClase"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            {numClase}
          </p>
        </div>
      </Card>
      <Modal
        {...props}
        show={showModal}
        onHide={handleCloseModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className=" text-center bg1 border">
          <Row className="w-100">
            <Col className="align-self-center">
              <p
                className="m-0 text-little"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                Fecha
              </p>
              <p className="h1" id="idFecha">
                {fecha.toUpperCase()}
              </p>
            </Col>
            <Col className="align-self-center">
              <p className="m-0 text-little">Clase N°</p>
              <p className="h1" id="idClase">
                {numClase}
              </p>
            </Col>
            <Col className="align-self-center">
              <p className="m-0 text-little">U. Temática</p>
              <p className="h1" id="idUnidad">
                {uTematica}
              </p>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body className="pt-1" style={{ minHeight: "450px" }}>
          {renderTarjetaContenido()}
        </Modal.Body>
        <Modal.Footer className="p-0">
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={selectedButton}
            className="w-100 m-0"
          >
            {txtTeoria !== "-" && (txtTp !== "-" || txtPractica !== "-") && (
              <ToggleButton
                id="tbg-radio-1"
                value={1}
                className="custom-button"
                onClick={() => handleEstadoChange(1) & setSelectedButton(1)}
              >
                <span>Teoría </span>
                {horas(cht)}
              </ToggleButton>
            )}
            {txtPractica !== "-" && (txtTeoria !== "-" || txtTp !== "-") && (
              <ToggleButton
                id="tbg-radio-2"
                value={2}
                className="custom-button"
                onClick={() => handleEstadoChange(2) & setSelectedButton(2)}
              >
                <span>Práctica </span>
                {horas(chp)}
              </ToggleButton>
            )}
            {txtTp !== "-" && (txtTeoria !== "-" || txtPractica !== "-") && (
              <ToggleButton
                id="tbg-radio-3"
                value={3}
                className="custom-button"
                onClick={() => handleEstadoChange(3) & setSelectedButton(3)}
              >
                <span>TP </span>
                {horas(chtp)}
              </ToggleButton>
            )}
          </ToggleButtonGroup>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}

export default Tarjeta;
