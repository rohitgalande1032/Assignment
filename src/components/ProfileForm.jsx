import React from 'react';
import { Form, Button, Alert, Col } from 'react-bootstrap';

const ProfileForm = ({ error, formData, handleChange, handleSubmit }) => {
  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <h2 style={{ marginTop: '20px', marginBottom: '20px'}} >Add new User</h2>
      <Form onSubmit={handleSubmit} >
      <Col xs={12} md={8} lg={6} xl={4} className="mx-auto">
      <div className="d-flex flex-column"> 
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter photo URL" value={formData.photo} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" placeholder="Enter description" value={formData.description} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" placeholder="Enter address" value={formData.address} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ marginTop: '20px', marginBottom: '20px' }}>
          Save
        </Button>
        </div>
        </Col>
      </Form>
    </>
  );
}

export default ProfileForm;
