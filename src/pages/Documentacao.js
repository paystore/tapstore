import React from "react";
import Iframe from 'react-iframe'

const Documentacao = () => {
  // For Dismiss Button with Alert
  
  return (
    <>
      <Iframe url="https://phoebus.gitlab.io/tapstore-api/docs/"            
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "700px"}}/>
      
    </>
  );
};

export default Documentacao;
