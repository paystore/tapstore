import React from 'react';
import { Row, Col } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';


const ReleaseNotes = () => {
  
  return (
    <Row>
      <Col>
        <ComponentCard
          title="Release Notes"          
        >
            <h4>
            Versão:1.0.2
            </h4>     
            <p>
            Versão Inicial
            </p>   
            <h4>
            Versão:2.0.0
            </h4>     
            <p>
            Correções do build
            </p>   
        </ComponentCard>        
      </Col>
    </Row>
  );
};

export default ReleaseNotes;
