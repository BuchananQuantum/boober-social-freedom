import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooberComponentCard from 'components/common/BooberComponentCard';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import BooberEditor from 'components/common/BooberEditor';

registerLocale('es', es);

const timeCode = `function DatepickerExample() {
  const [date, setDate] = useState(null);
  
  return (
    <DatePicker
      selected={date}
      onChange={(date)=>setDate(date)}
      className='form-control'
      placeholderText="Select Time"
      timeIntervals={5}
      dateFormat="h:mm aa"
      showTimeSelect
      showTimeSelectOnly
    />
  );
}`;

const dateCode = `function DatePickerExample() {
  const [date, setDate] = useState(null);
  
  return (

    <DatePicker
      selected={date}
      onChange={(date)=>setDate(date)}
      formatWeekDay={day => day.slice(0, 3)}
      className='form-control'
      placeholderText="Select Date"
    />
  );
}`;

const dateTimeCode = `function DatePickerExample() {
  const [date, setDate] = useState(null);
  
  return (
    <DatePicker
    selected={date}
    onChange={(date)=>setDate(date)}
    formatWeekDay={day => day.slice(0, 3)}
    className='form-control'
    placeholderText="Select Date & Time"
    timeIntervals={5}
    dateFormat="MM/dd/yyyy h:mm aa"
    showTimeSelect
    fixedHeight
  />
  );
}`;

const formatCode = `function DatepickerExample() {
  const [date, setDate] = useState(null);
  
  return (
    <DatePicker
      selected={date}
      onChange={(date)=>setDate(date)}
      className='form-control'
      placeholderText="DD-MM-YYYY h:mm aa"
      timeIntervals={5}
      dateFormat="dd-MM-yyyy h:mm aa"
      showTimeSelect
      fixedHeight
    />
  );
}`;

const rangeCode = `function DatepickerExample() {
  const date = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(date.setDate(date.getDate() + 7));
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      formatWeekDay={day => day.slice(0, 3)}
      endDate={endDate}
      selectsRange
      dateFormat="MMM dd"
      className='form-control'
    />
  );
}`;

const customInputCode = `function DatepickerExample() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="position-relative">
      <Form.Control
        ref={ref}
        onClick={onClick}
        value={value}
        className="ps-4"
        onChange={()=>{}}
      />
      <FontAwesomeIcon
        icon="calendar-alt"
        className="text-primary position-absolute top-50 translate-middle-y ms-2"
      />
    </div>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
}`;

const localeDocCode = `import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

  <DatePicker
    locale="es"
  />
`;

const LocalizationCode = `function DatepickerExample() {
  const [date, setDate] = useState(null);
  
  return (
    <DatePicker
      selected={date}
      onChange={(date)=>setDate(date)}
      className='form-control'
      placeholderText="Select Date"
      dateFormat="dd-MM-yyyy"
      locale='es'
    />
  );
}`;

const DatePickerExample = () => (
  <>
    <PageHeader
      title="Date Picker"
      description="React-Boober uses <strong>React Datepicker</strong> as datepicker. <strong>React Datepicker</strong> is a simple and reusable Datepicker component for React."
      className="mb-3"
    >
      <Button
        href="https://github.com/Hacker0x01/react-datepicker"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React-Datepicker Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Date picker" />
          <BooberComponentCard.Body
            code={dateCode}
            scope={{ DatePicker }}
            language="jsx"
          />
        </BooberComponentCard>
      </Col>
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Time picker" />

          <BooberComponentCard.Body
            code={timeCode}
            scope={{ DatePicker }}
            language="jsx"
          />
        </BooberComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Date & Time picker" />
          <BooberComponentCard.Body
            code={dateTimeCode}
            scope={{ DatePicker }}
            language="jsx"
          />
        </BooberComponentCard>
      </Col>
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Date Format" />
          <BooberComponentCard.Body
            code={formatCode}
            scope={{ DatePicker }}
            language="jsx"
          />
        </BooberComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Date Range" />
          <BooberComponentCard.Body
            code={rangeCode}
            scope={{ DatePicker }}
            language="jsx"
          />
        </BooberComponentCard>
      </Col>
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Custom Input" />
          <BooberComponentCard.Body
            code={customInputCode}
            scope={{ DatePicker, FontAwesomeIcon }}
            language="jsx"
          />
        </BooberComponentCard>
      </Col>
    </Row>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Localization" noPreview />
      <BooberComponentCard.Body>
        <p className="mb-1">
          To localize <strong>React Datepicker</strong> display components
          import <code>registerLocale</code> from react-datepicker and{' '}
          <code>locale</code> object from date-fns.Then use{' '}
          <code>registerLocale</code> to loads the imported locale object from
          date-fns.For more details visit{' '}
          <a href="https://github.com/Hacker0x01/react-datepicker#localization">
            React Datepicker Localization Documentation.
          </a>
        </p>
        <BooberEditor code={localeDocCode} language="js" hidePreview />
      </BooberComponentCard.Body>
    </BooberComponentCard>

    <BooberComponentCard noGuttersBottom>
      <BooberComponentCard.Header title="Localization Example" />
      <BooberComponentCard.Body
        code={LocalizationCode}
        scope={{ DatePicker }}
      />
    </BooberComponentCard>
  </>
);

export default DatePickerExample;
