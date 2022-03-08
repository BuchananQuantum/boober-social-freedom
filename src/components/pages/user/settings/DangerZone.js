import BooberCardHeader from 'components/common/BooberCardHeader';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DangerZone = () => {
  return (
    <Card>
      <BooberCardHeader title="Danger Zone" />
      <Card.Body className="bg-light">
        <h5 className="mb-0">Transfer Ownership</h5>
        <p className="fs--1">
          Transfer this account to another user or to an organization where you
          have the ability to create repositories.
        </p>
        <Button as={Link} to="#!" variant="Boober-warning" className="w-100">
          Transfer
        </Button>
        <div className="border-dashed-bottom my-4" />
        <h5 className="mb-0">Delete this account</h5>
        <p className="fs--1">
          Once you delete a account, there is no going back. Please be certain.
        </p>
        <Button as={Link} to="#!" variant="Boober-danger" className="w-100">
          Deactivate Account
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DangerZone;
