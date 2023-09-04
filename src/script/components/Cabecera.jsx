import { Row, Navbar, Container, Col, Image } from "react-bootstrap";
import logo from "../../img/largo.svg";
import logo2 from "../../img/corto.svg";
import logo3 from "../../img/logo.svg";
import se1 from "../../img/se1largo.svg";
import { useMediaQuery } from "react-responsive";

function Cabecera() {
  const isLgScreen = useMediaQuery({ minWidth: 1200 });
  const isMdScreen = useMediaQuery({ maxWidth: 1200, minWidth: 768 });
  const isSmScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <Navbar className="bg-navbar">
      <Container className="fluid py-1">
        <Row className="w-100" style={{ alignItems: "center" }}>
          <Col>
          <Image
              src={isLgScreen ? logo : isMdScreen ? logo2 : logo3}
              height={"50px"}
            />
          </Col>
          <Col>
            
            <Image src={se1} height={"40px"} />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Cabecera;
