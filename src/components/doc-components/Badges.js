import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooberComponentCard from 'components/common/BooberComponentCard';
import SoftBadge from 'components/common/SoftBadge';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const softBadgesCode = `<div>
  <SoftBadge bg='primary' className='me-2'>Primary</SoftBadge> 
  <SoftBadge bg='secondary' className='me-2'>Secondary</SoftBadge> 
  <SoftBadge bg='success' className='me-2'>Success</SoftBadge> 
  <SoftBadge bg='info' className='me-2'>Info</SoftBadge> 
  <SoftBadge bg='warning' className='me-2'>Warning</SoftBadge> 
  <SoftBadge bg='danger' className='me-2'>Danger</SoftBadge> 
  <SoftBadge bg='light' className='me-2'>Light</SoftBadge> 
  <SoftBadge bg='dark' className='me-2'>Dark</SoftBadge> 
</div>`;

const softPillBadgesCode = `<div>
  <SoftBadge pill bg='primary' className='me-2'>Primary</SoftBadge> 
  <SoftBadge pill bg='secondary' className='me-2'>Secondary</SoftBadge> 
  <SoftBadge pill bg='success' className='me-2'>Success</SoftBadge> 
  <SoftBadge pill bg='info' className='me-2'>Info</SoftBadge> 
  <SoftBadge pill bg='warning' className='me-2'>Warning</SoftBadge> 
  <SoftBadge pill bg='danger' className='me-2'>Danger</SoftBadge> 
  <SoftBadge pill bg='light' className='me-2'>Light</SoftBadge> 
  <SoftBadge pill bg='dark' className='me-2'>Dark</SoftBadge> 
</div>`;

const solidPillBagesCode = `<div>
  <Badge pill bg="primary" className="me-2">
    Primary
  </Badge>
  <Badge pill bg="secondary" className="me-2">
    Secondary
  </Badge>
  <Badge pill bg="success" className="me-2">
    Success
  </Badge>
  <Badge pill bg="danger" className="me-2">
    Danger
  </Badge>
  <Badge pill bg="warning" text="dark" className="me-2">
    Warning
  </Badge>
  <Badge pill bg="info" className="me-2">
    Info
  </Badge>
  <Badge pill bg="light" text="dark">
    Light
  </Badge>
  <Badge pill bg="dark" className="me-2">
    Dark
  </Badge>
</div>`;

const solidBagesCode = `<div>
  <Badge bg="primary" className="me-2">Primary</Badge> 
  <Badge bg="secondary" className="me-2">Secondary</Badge>
  <Badge bg="success" className="me-2">Success</Badge> 
  <Badge bg="danger" className="me-2">Danger</Badge>
  <Badge bg="warning" text="dark" className="me-2">
    Warning
  </Badge>
  <Badge bg="info" className="me-2">Info</Badge>
  <Badge bg="light" text="dark" className="me-2">
    Light
  </Badge>
  <Badge bg="dark" className="me-2">Dark</Badge>
</div>`;

const Badges = () => (
  <>
    <PageHeader
      title="Badges"
      description="Documentation and examples for badges, our small count and labeling component."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/badge`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Badges on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Soft badges" light={false} />
      <BooberComponentCard.Body
        code={softBadgesCode}
        scope={{ SoftBadge }}
        language="jsx"
      />
    </BooberComponentCard>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Soft pill badges" light={false} />
      <BooberComponentCard.Body
        code={softPillBadgesCode}
        scope={{ SoftBadge }}
        language="jsx"
      />
    </BooberComponentCard>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Solid badges" light={false} />
      <BooberComponentCard.Body code={solidBagesCode} language="jsx" />
    </BooberComponentCard>
    <BooberComponentCard>
      <BooberComponentCard.Header title="Solid pill badges" light={false} />
      <BooberComponentCard.Body code={solidPillBagesCode} language="jsx" />
    </BooberComponentCard>
  </>
);

export default Badges;
