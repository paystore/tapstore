import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button
} from "reactstrap";
import ComponentCard from '../components/ComponentCard';
import axios from "axios";



const Api = () => {
  const [aars, setAars] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.github.com/repos/paystore/tapstore/git/trees/b8d346f466b69625d3e6293b5c170c0d700184f2`).then(res => {
      const photos = res.data.tree;
      setAars(photos);
    });
  }, []);

  return (
    <Row>
      <Col>
        <ComponentCard
          title="Listagem das apis disponiveis"          
        >
           {aars.map(aar => (
            <div>
              <Row key={aar.path}>
                <h4>                                             
                  {aar.path}
                  <a href={'https://github.com/paystore/tapstore/raw/main/aar/'+aar.path} rel="noreferrer">
                    <Button 
                      style={{marginLeft: 20}} color='primary'>Download
                    </Button>
                  </a>
                </h4>
               
              </Row>
              <p>
              Versão Inicial
              </p> 
            </div>  
            ))}
        </ComponentCard>        
      </Col>
    </Row>
  );
};

export default Api;
