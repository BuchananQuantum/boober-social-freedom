import React from 'react';
import { Card } from 'react-bootstrap';
import experiences from 'data/experiences';
import BooberCardHeader from 'components/common/BooberCardHeader';
import Experience from '../Experience';

const Experiences = () => {
  return (
    <Card className="mb-3">
      <BooberCardHeader title="Experience" light />
      <Card.Body className="fs--1">
        {experiences.map((experience, index) => (
          <Experience
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Experiences;
