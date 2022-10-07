import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';


const Demo = () => {
  
  return (
    <Row>
      <Col>
        <ComponentCard
          title="Aplicação Demo"
          subtitle={
            <p>
              Aplicação demo
            </p>
          }
        >
          
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
                  target="_blank"
                >
                  Baixar
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
