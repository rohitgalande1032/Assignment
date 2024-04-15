import React from 'react';
import { Table, Button, Container, Col } from 'react-bootstrap';

const ProfileList = ({ profiles, loading, handleEdit, handleDelete, handleSelectProfile }) => {
  return (
    <Container >
      {loading ? (
        <p>Please wait, Profiles are loading...</p>
      ) : (
        <div className="profile-list">
          <Col xs={12}>
            <Table striped bordered hover variant="dark" responsive="md" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}>Name</th>
                  <th style={{ width: '15%' }}>Photo</th>
                  <th style={{ width: '25%' }}>Description</th>
                  <th style={{ width: '15%' }}>Address</th>
                  <th style={{ width: '40%' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map(profile => (
                  <tr key={profile.id}>
                    <td>{profile.name}</td>
                    <td><img src={profile.photo} alt={profile.name} style={{ maxWidth: '100px' }} /></td>
                    <td>{profile.description}</td>
                    <td>{profile.address}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleEdit(profile)}>Edit</Button>
                      <Button variant="danger" onClick={() => handleDelete(profile.id)}>Delete</Button>
                      <Button variant="info" onClick={() => handleSelectProfile(profile)}>Show Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </div>
      )}
    </Container>
  );
}

export default ProfileList;
