import React from 'react';
import PropTypes from 'prop-types';

import BooberCardHeader from 'components/common/BooberCardHeader';
import { Card } from 'react-bootstrap';
import BooberCardFooterLink from 'components/common/BooberCardFooterLink';
import Event from 'components/app/events/event-list/Event';

const Events = ({ cardTitle, events, ...rest }) => {
  return (
    <Card {...rest}>
      <BooberCardHeader title={cardTitle} light />
      <Card.Body className="fs--1 border-bottom">
        {events.map((event, index) => (
          <Event
            key={event.id}
            details={event}
            isLast={index === events.length - 1}
          />
        ))}
      </Card.Body>
      <BooberCardFooterLink
        title="All Events"
        to="/events/event-list"
        size="sm"
      />
    </Card>
  );
};

Events.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape(Event.propTypes))
};

export default Events;
