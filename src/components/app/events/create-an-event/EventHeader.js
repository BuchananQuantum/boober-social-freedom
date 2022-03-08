import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';

const EventHeader = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="flex-between-center">
          <Col md>
            <h5 className="mb-2 mb-md-0"> Create Event</h5>
          </Col>
          <Col xs="auto">
            <Button
              size="sm"
              variant="Boober-default"
              className="me-2"
              type="submit"
            >
              Save
            </Button>
            <Button size="sm" variant="Boober-primary">
              Make your event live (Stream)
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventHeader;
