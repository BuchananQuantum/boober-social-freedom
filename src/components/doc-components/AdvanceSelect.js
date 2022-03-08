import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooberComponentCard from 'components/common/BooberComponentCard';
import Select from 'react-select';

const singleSelectCode = `function SingleSelectExample() {
  const [value, setValue] = useState(null);
  const organizerOptions = [
    { value: '1', label: ' Massachusetts Institute of Technology' },
    { value: '2', label: 'University of Chicago' },
    { value: '3', label: 'GSAS Open Labs At Harvard' },
    { value: '4', label: 'California Institute of Technology' }
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      options={organizerOptions}
      placeholder='Select...'
      classNamePrefix="react-select"
      value={value}
      onChange={value => setValue(value)}
    />
  );
}`;

const multipleSelectCode = `function MultipleSelectExample() {
  const [value, setValue] = useState(null);
  const organizerOptions = [
    { value: '1', label: ' Massachusetts Institute of Technology' },
    { value: '2', label: 'University of Chicago' },
    { value: '3', label: 'GSAS Open Labs At Harvard' },
    { value: '4', label: 'California Institute of Technology' }
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      options={organizerOptions}
      placeholder='Select...'
      isMulti
      classNamePrefix="react-select"
      value={value}
      onChange={value => setValue(value)}
    />
  );
}`;

const Placeholder = () => (
  <>
    <PageHeader
      title="Advance Select"
      description="React-Boober uses <strong>React Select</strong> for advance select component. React Select is a flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support."
      className="mb-3"
    >
      <Button
        href="https://react-select.com/home"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React Select Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Multiple Select" />
      <BooberComponentCard.Body
        code={multipleSelectCode}
        scope={{ Select }}
        language="jsx"
      />
    </BooberComponentCard>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Single Select" />
      <BooberComponentCard.Body
        code={singleSelectCode}
        scope={{ Select }}
        language="jsx"
      />
    </BooberComponentCard>
  </>
);

export default Placeholder;
