import React from "react";
import Header from "./Header";
import Garden from "./Garden";
import About from "./About";
import NewPlantControl from "./NewPlantControl";
import {Container, Row, Col} from "react-grid-system";

function App(){
  return (
    <div>
      <Container>
        <Row>
          <Header/>
          <Col md={3}>
            <About/>
          </Col>
          <Col md={9}>
            <Garden/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
