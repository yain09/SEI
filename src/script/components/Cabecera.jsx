import {
  Row,
  Navbar,
  Container,
  Col,
  Image,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import logo from "../../img/largo.svg";
import logo2 from "../../img/corto.svg";
import logo3 from "../../img/logo.svg";
import se1 from "../../img/se1largo.svg";
import se2 from "../../img/se1corto.svg";
import { useMediaQuery } from "react-responsive";

function Cabecera({ setCurrentState }) {
  const isLgScreen = useMediaQuery({ minWidth: 1200 });
  const isMdScreen = useMediaQuery({ maxWidth: 1200, minWidth: 768 });
  const isSmScreen = useMediaQuery({ maxWidth: 768 });

  const handleButtonClick1 = () => {
    setCurrentState("cronograma");
  };
  const handleButtonClick2 = () => {
    setCurrentState("docente 1");
  };

  return (
    <Navbar className="bg-navbar">
      <Container className="fluid py-1">
        <Row className="w-100" style={{ alignItems: "center" }}>
          <Col className="d-flex justify-content-center">
            <Image
              src={isLgScreen ? logo : isMdScreen ? logo2 : logo3}
              alignItems="center"
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
            <p>{setCurrentState()}</p>
            <DropdownButton
              as={ButtonGroup}
              align={"end"}
              title=""
              id="bg-nested-dropdown"
              variant="outline-light"
            >
              <Dropdown.Item eventKey="1" onClick={handleButtonClick1}>
                Cronograma
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={handleButtonClick2}>
                Docentes
              </Dropdown.Item>
            </DropdownButton>
            {/* <Button variant="outline-light" onClick={handleButtonClick}>
              Cronograma
            </Button>
            <Button variant="outline-light" onClick={handleButtonClick}>
              Docentes
            </Button> */}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Cabecera;
