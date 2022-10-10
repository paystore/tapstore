import React from "react";
import Iframe from 'react-iframe'

const Documentacao = () => {
  // For Dismiss Button with Alert
  
  return (
    <>
      <Iframe url="https://paystore.github.io/tapstore/docs/"            
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "700px"}}/>
      
    </>
  );
};

export default Documentacao;
