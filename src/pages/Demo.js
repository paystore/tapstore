import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';


const Demo = () => {
  
  return (
    <Row>
      <Col>
        <ComponentCard
          title="Aplicação Demo"          
        >
          
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <h5>                                             
                  Projeto Demo em Kotlin
                </h5>
                <Button
                  color="primary"
                  href="https://github.com/paystore/tapstore-demo-kotlin"
                  target="_blank"
                >
                  Ir para o Github
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <h5>                                             
                  Projeto Demo em Java
                </h5>
                <Button
                  color="primary"
                  href="https://github.com/paystore/tapstore-demo-java"
                  target="_blank"
                >
                  Ir para o Github
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>        
      </Col>
    </Row>
  );
};

export default Demo;
