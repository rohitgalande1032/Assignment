import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Map from './Map';

function ProfileCard({ profile }) {
  const { name, photo, description, address,location} = profile;
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
  <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={photo} alt={name} style={{ maxWidth: '100px'}}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {location}
        </Card.Text>
        <Button variant="primary" style={{ marginBottom: '10px' }} onClick={toggleMap}>View Location in Map</Button>
        {showMap && <Map addresses={[address]} />}
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
