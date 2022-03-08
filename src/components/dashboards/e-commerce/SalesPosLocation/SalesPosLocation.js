import React from 'react';
import { Card } from 'react-bootstrap';
import BooberCardHeader from 'components/common/BooberCardHeader';
import BooberLink from 'components/common/BooberLink';
import SalesPosLocationTable from './SalesPosLocationTable';
import SalesPosLocationChart from './SalesPosLocationChart';

const SalesPosLocation = ({ ...rest }) => {
  return (
    <Card {...rest}>
      <BooberCardHeader
        title="Sales by POS location"
        titleTag="h6"
        className="py-2"
        light
        endEl={<BooberLink title="View details" className="px-0 " />}
      />
      <Card.Body className="px-0 pb-0">
        <SalesPosLocationTable />
        <SalesPosLocationChart />
      </Card.Body>
    </Card>
  );
};

export default SalesPosLocation;
