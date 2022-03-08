import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from 'assets/img/icons/spot-illustrations/navbar-vertical.png';
import BooberCloseButton from 'components/common/BooberCloseButton';

const PurchaseCard = () => {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="settings my-3">
        <Card className="p-0 rounded-2 position-relative">
          <div
            className="position-absolute"
            style={{ right: '3px', top: '3px' }}
          >
            <BooberCloseButton
              size="sm"
              noOutline
              onClick={() => setShow(false)}
            />
          </div>
          <Card.Body className="text-center">
            <img src={image} alt="" width={80} />
            <p className="fs--2 mt-2">
              Loving what you see DH-0001?
              <br />
              Settle out of court &amp; <Link to="#!">Pay your Bills On Time!</Link>
            </p>
            <div className="d-grid gap-2">
              <Button
                as={'a'}
                href="https://www.paypal.com/invoice/s/pay/INV2-UE7M-VZBL-K7M2-QCW7"
                target="_blank"
                size="sm"
                className="btn-purchase"
              >
                Purchase
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default PurchaseCard;
