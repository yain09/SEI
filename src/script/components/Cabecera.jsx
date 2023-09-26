import { Row, Navbar, Container, Col, Image, Button } from "react-bootstrap";
import { useState } from "react";
import logo from "../../img/largo.svg";
import logo2 from "../../img/corto.svg";
import logo3 from "../../img/logo.svg";
import se1 from "../../img/se1largo.svg";
import se2 from "../../img/se1corto.svg";
import { useMediaQuery } from "react-responsive";
import { BsCalendar3 } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

function Cabecera({ setCurrentState }) {
  const isLgScreen = useMediaQuery({ minWidth: 1200 });
  const isMdScreen = useMediaQuery({ maxWidth: 1200, minWidth: 768 });
  const isSmScreen = useMediaQuery({ maxWidth: 768 });
  const [X, setX] = useState(1);
  const handleButtonClick1 = () => {
    setCurrentState("cronograma");
    setX(1);
    console.log(X);
  };
  const handleButtonClick2 = () => {
    setCurrentState("docente");
    setX(2);
    console.log(X);
  };

  return (
    <Navbar className="bg-navbar">
      <Container className="fluid py-1">
        <Row className="w-100" style={{ alignItems: "center" }}>
          <Col className="d-flex justify-content-center">
            <Image
              src={isLgScreen ? logo : isMdScreen ? logo2 : logo3}
             
              height={"50px"}
              className=" align-center"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src={isSmScreen ? se2 : se1} height={"40px"} />
          </Col>
          <Col
            className="d-flex justify-content-center h4 m-0"
            style={{ color: "rgb(130,130,130)" }}
          >
            {X === 2 ? (
              { isMdScreen } ? (
                <BsCalendar3
                  onClick={handleButtonClick1}
                  color="white"
                  size="2.5rem"
                />
              ) : (
                <Button variant="outline-light" onClick={handleButtonClick1}>
                  "cronograma"
                </Button>
              )
            ) : { isMdScreen } ? (
              <FaUsers
                onClick={handleButtonClick2}
                color="white"
                size="2.5rem"
              />
            ) : (
              <Button variant="outline-light" onClick={handleButtonClick2}>
                docentes
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Cabecera;
