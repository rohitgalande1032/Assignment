import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProfileDetails({ profile }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" src={profile.photo} alt={profile.name} style={{ maxWidth: '100px'}}/>
      <Card.Body>
        <Card.Title>Name: {profile.name}</Card.Title>
        <Card.Text>
          Description: 
          {profile.description}
        </Card.Text>
        <Card.Text>
            Address :
          {profile.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProfileDetails;
