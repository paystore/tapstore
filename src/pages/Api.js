import React from "react";
import {
  Row,
  Col,
} from "reactstrap";
import ComponentCard from '../components/ComponentCard';

const Api = () => {

  return (
    <Row>
      <Col>
        <ComponentCard
          title="Listagem das apis disponiveis"          
        >
            <h4>
            payments-api-1.2.24.4.aar
            </h4>     
            <p>
            Versão Inicial
            </p>   
            <h4>
            payments-api-1.2.23.4.aar
            </h4>     
            <p>
            Correções do build
            </p>   
        </ComponentCard>        
      </Col>
    </Row>
  );
};

export default Api;
