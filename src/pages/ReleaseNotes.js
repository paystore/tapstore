import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';
import Markdown from 'markdown-to-jsx';

const ReleaseNotes = () => {
  const file_name = 'RELEASENOTES.md';
  const [release, setRelease] = useState('');

  useEffect(() => {
    import(`../markdown/${file_name}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setRelease(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

  return (
    <Row>
      <Col>
        <ComponentCard
          title="Release Notes"          
        >
          <Markdown>
              {release}
          </Markdown>            
        </ComponentCard>        
      </Col>
    </Row>
  );
};

export default ReleaseNotes;
