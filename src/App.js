import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import TablaCuatrimestre1 from "./script/components/TablaCuatrimestre1";
import TablaCuatrimestre2 from "./script/components/TablaCuatrimestre2";
import Cabecera from "./script/components/Cabecera";
import TablaGrupos from "./script/components/TablaGrupos";
import Separador from "./script/components/Separador";

function App() {
  const [currentState, setCurrentState] = useState("cronograma");
  function RenderContent() {
    switch (currentState) {
      case "cronograma": {
        return (
          <>
            <TablaCuatrimestre1 />
            <Separador />
            <TablaCuatrimestre2 />
          </>
        );
      }
      case "docente": {
        return (
          <>
            <TablaGrupos />
          </>
        );
      }
      default: {
        setCurrentState("cronograma");
      }
    }
  }
  return (
    <>
      <Cabecera setCurrentState={setCurrentState} className="mb-3" />
      <Container className="" id="Body">
        {RenderContent()}
      </Container>
    </>
  );
}

export default App;
