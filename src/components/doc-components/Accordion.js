import React from 'react';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooberComponentCard from 'components/common/BooberComponentCard';

const basicExampleCode = `
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
`;

const fullyCollapsedStateCode = `
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
`;

const flushCode = `
<Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
`;

const customAccordionCode = `
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey)
  return (
    <Button
      variant='Boober-primary' 
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

function Example() {
  return (
    <Accordion defaultActiveKey="0">
      <Card className='mb-2'>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

render(<Example />)`;

const Accordion = () => {
  return (
    <>
      <PageHeader
        title="Accordion"
        description="Build vertically collapsing accordions in combination with the Collapse component."
        className="mb-3"
      >
        <Button
          href={`${reactBootstrapDocsUrl}/components/accordion`}
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Accordion on React-Bootstrap
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>

      <BooberComponentCard>
        <BooberComponentCard.Header title="Basic Example" />
        <BooberComponentCard.Body code={basicExampleCode} language="jsx" />
      </BooberComponentCard>

      <BooberComponentCard>
        <BooberComponentCard.Header title="Fully Collapsed State">
          <p className="mb-0">
            If you want your <code>Accordion</code> to start in a
            fully-collapsed state, then simply don't pass in a{' '}
            <code>defaultActiveKey</code> prop to <code>Accordion</code>.
          </p>
        </BooberComponentCard.Header>
        <BooberComponentCard.Body
          code={fullyCollapsedStateCode}
          language="jsx"
        />
      </BooberComponentCard>

      <BooberComponentCard>
        <BooberComponentCard.Header title="Flush">
          <p className="mb-0">
            Add <code>flush</code> to remove the default background-color, some
            borders, and some rounded corners to render accordions edge-to-edge
            with their parent container.
          </p>
        </BooberComponentCard.Header>
        <BooberComponentCard.Body code={flushCode} language="jsx" />
      </BooberComponentCard>

      <BooberComponentCard>
        <BooberComponentCard.Header title="Custom Accordions">
          <p className="mb-0">
            You can still create card-based accordions like those in Bootstrap
            4. You can hook into the Accordion toggle functionality via{' '}
            <code>useAccordionButton</code> to make custom toggle components.
          </p>
        </BooberComponentCard.Header>
        <BooberComponentCard.Body
          code={customAccordionCode}
          language="jsx"
          noInline
        />
      </BooberComponentCard>
    </>
  );
};

export default Accordion;
