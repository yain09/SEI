import "./App.css";
import { Col, Container,Row} from "react-bootstrap";
import TablaCuatrimestre1 from "./script/components/TablaCuatrimestre1";
import TablaCuatrimestre2 from "./script/components/TablaCuatrimestre2";
import Cabecera from "./script/components/Cabecera";

function App() {
  return (
    <>
      <Cabecera className="mb-3"/>
      <Container className="">
        <TablaCuatrimestre1 />
        <Row className="p-2 receso-text">
        
          <Col></Col>
          <Col><h1 className="text-white text-center m-0" style={{backgroundColor:"#202023", borderRadius:"2rem"}}>Receso</h1></Col>
          <Col></Col>
        
        </Row>
        <TablaCuatrimestre2 />
      </Container>
    </>
  );
}

export default App;
