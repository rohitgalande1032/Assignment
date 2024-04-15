import React from 'react';
import ProfileCard from './ProfileCard';
import profilesData from '../data/profileData';
import {Container,Row, Col} from 'react-bootstrap';

function ProfileList() {
  return (
    <Container>
    <Row >
      {profilesData.map((profile, index) => (
        <Col xs={6} md={4} propert>
          <ProfileCard key={index} profile={profile} />
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default ProfileList;

