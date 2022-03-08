import React from 'react';
import educationData from 'data/educations';
import BooberCardHeader from 'components/common/BooberCardHeader';
import { Card } from 'react-bootstrap';
import EducationItem from '../EducationItem';

const Education = () => {
  return (
    <Card className="mb-3">
      <BooberCardHeader title="Education" light />
      <Card.Body className="fs--1">
        {educationData.map((item, index) => (
          <EducationItem
            key={item.id}
            details={item}
            isLast={index === educationData.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Education;
