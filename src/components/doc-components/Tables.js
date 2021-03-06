import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooberComponentCard from 'components/common/BooberComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import ActionButton from 'components/common/ActionButton';
import SoftBadge from 'components/common/SoftBadge';
import team2 from 'assets/img/team/2.jpg';
import team3 from 'assets/img/team/3.jpg';
import team4 from 'assets/img/team/4.jpg';
import team13 from 'assets/img/team/13.jpg';
import Avatar from 'components/common/Avatar';
import CardDropdown from 'components/common/CardDropdown';

const basicTableCode = `
<Table responsive>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th className="text-end" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Emma Watson</td>
      <td>emma@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
  </tbody>
</Table>
`;
const stripedCode = `
<Table striped responsive>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th className="text-end" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
      <td className="text-end">
        <CardDropdown>
          <div className="py-2">
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
          </div>
        </CardDropdown>
      </td>
    </tr>
    <tr>
      <td>Emma Watson</td>
      <td>emma@example.com</td>
      <td className="text-end">
        <CardDropdown>
          <div className="py-2">
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
          </div>
        </CardDropdown>
      </td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
      <td className="text-end">
        <CardDropdown>
          <div className="py-2">
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
          </div>
        </CardDropdown>
      </td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
      <td className="text-end">
        <CardDropdown>
          <div className="py-2">
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
          </div>
        </CardDropdown>
      </td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
      <td className="text-end">
        <CardDropdown>
          <div className="py-2">
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
          </div>
        </CardDropdown>
      </td>
    </tr>
  </tbody>
</Table>
`;
const hoverableCode = `const Actions = () => (
  <div className="end-0 top-50 pe-3 translate-middle-y hover-actions">
    <Button variant="light" size="sm" className="border-300 me-1 text-600">
      <FontAwesomeIcon icon="edit" />
    </Button>
    <Button variant="light" size="sm" className="border-300 text-600">
      <FontAwesomeIcon icon="trash-alt" />
    </Button>
  </div>
);

const HoverableActionsExample = () => {
 
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover-actions-trigger">
          <td>Ricky Antony</td>
          <td>ricky@example.com</td>
          <td className="w-auto">
            <Actions />
          </td>
        </tr>
        <tr className="hover-actions-trigger">
          <td>Emma Watson</td>
          <td>emma@example.com</td>
          <td className="w-auto">
            <Actions />
          </td>
        </tr>
        <tr className="hover-actions-trigger">
          <td>Rowen Atkinson</td>
          <td>rown@example.com</td>
          <td className="w-auto">
            <Actions />
          </td>
        </tr>
        <tr className="hover-actions-trigger">
          <td>Antony Hopkins</td>
          <td>antony@example.com</td>
          <td className="w-auto">
            <Actions />
          </td>
        </tr>
        <tr className="hover-actions-trigger">
          <td>Jennifer Schramm</td>
          <td>jennifer@example.com</td>
          <td className="w-auto">
            <Actions />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

render(<HoverableActionsExample />)
`;

const borderedCode = `<Table bordered responsive>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
    </tr>
    <tr>
      <td>Emma Watson</td>
      <td>emma@example.com</td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
    </tr>
  </tbody>
</Table>`;

const borderlessCode = `
<Table borderless responsive>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
    </tr>
    <tr>
      <td>Emma Watson</td>
      <td>emma@example.com</td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
    </tr>
  </tbody>
</Table>
`;
const darkCode = `<Table variant="dark">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
    </tr>
    <tr>
      <td>Emma Watson</td>
      <td>emma@example.com</td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
    </tr>
  </tbody>
</Table>`;

const smallTableCode = `<Table size='sm'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
    </tr>
    <tr>
      <td>Emma Watson</td>
      <td>emma@example.com</td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
    </tr>
    <tr>
      <td>Mizan Rifat</td>
      <td>mizan@example.com</td>
    </tr>
    <tr>
      <td>Tony Robbins</td>
      <td>tony@example.com</td>
    </tr>
  </tbody>
</Table>`;

const highlightColumnCode = `<Table bordered responsive>
  <colgroup>
    <col className="bg-soft-primary" />
    <col />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th className="text-end" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Emma Watson</td>
      <td>emma@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
  </tbody>
</Table>`;

const activeTableCode = `<Table bordered responsive>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th className="text-end" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr className="table-active">
      <td>Emma Watson</td>
      <td>emma@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td className="table-active">antony@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
  </tbody>
</Table>`;

const variantCode = `<Table responsive>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-primary">
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
    </tr>
    <tr className="table-secondary">
      <td>Emma Watson</td>
      <td>emma@example.com</td>
    </tr>
    <tr className="table-success">
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
    </tr>
    <tr className="table-danger">
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
    </tr>
    <tr className="table-warning">
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
    </tr>
  </tbody>
</Table>`;

const responsiveTableCode = `const TableRow = ({ data }) => (
  <tr className="align-middle">
    <td className="text-nowrap">
      <div className="d-flex align-items-center">
        <Avatar src={data.avatar} size="l" name={data.name} />
        <div className="ms-2">{data.name}</div>
      </div>
    </td>
    <td className="text-nowrap">{data.email}</td>
    <td className="text-nowrap">{data.phone}</td>
    <td className="text-nowrap">{data.address}</td>
    <td>
      <SoftBadge pill bg={data.status.type}>
        {data.status.title}
        <FontAwesomeIcon icon={data.status.icon} className="ms-2" />
      </SoftBadge>
    </td>
    <td className="text-end">$199</td>
  </tr>
);

const ResponsiveTableExample = () => {
  const customers = [
    {
      name: 'Ricky Antony',
      avatar: team4,
      email: 'ricky@example.com',
      phone: '(201) 200-1851',
      address: '2392 Main Avenue, Penasauka',
      amount: '$99',
      status: { title: 'Completed', type: 'success', icon: 'check' }
    },
    {
      name: 'Emma Watson',
      avatar: team13,
      email: 'emma@example.com',
      phone: '(212) 228-8403',
      address: '2289 5th Avenue, New York',
      status: { title: 'Completed', type: 'success', icon: 'check' }
    },
    {
      name: 'Rowen Atkinson',
      avatar: null,
      email: 'rown@example.com',
      phone: '(201) 200-1851',
      address: '112 Bostwick Avenue, Jersey City',
      amount: '$755',
      status: { title: 'Processing', type: 'primary', icon: 'redo' }
    },
    {
      name: 'Antony Hopkins',
      avatar: team2,
      email: 'antony@example.com',
      phone: '(901) 324-3127',
      address: '3448 Ile De France St #242',
      amount: '$50',
      status: { title: 'On Hold', type: 'secondary', icon: 'ban' }
    },
    {
      name: 'Jennifer Schramm',
      avatar: team3,
      email: 'jennifer@example.com',
      phone: '(828) 382-9631',
      address: '659 Hannah Street, Charlotte',
      amount: '$150',
      status: { title: 'Pending', type: 'warning', icon: 'stream' }
    }
  ];

  return (
    <Table responsive striped hover>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col">Status</th>
          <th className="text-end" scope="col">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <TableRow data={customer} key={customer.email}/>
        ))}
      </tbody>
    </Table>
  );
};

render(<ResponsiveTableExample />)
`;

const Tables = () => (
  <>
    <PageHeader
      title="Tables"
      description="Documentation and examples for opt-in styling of tables with Boober."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/table`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Tables on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header
            title="Basic Table"
            className="border-bottom"
          >
            <p className="mt-2 mb-0">
              Use <code>Table</code> component for basic bootstrap table.
            </p>
          </BooberComponentCard.Header>
          <BooberComponentCard.Body
            code={basicTableCode}
            language="jsx"
            scope={{ ActionButton }}
            noLight
            className="p-0"
          />
        </BooberComponentCard>
      </Col>
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header
            title="Striped Table"
            className="border-bottom"
          >
            <p className="mt-2 mb-0">
              Use the <code>striped</code> props to customise the table.
            </p>
          </BooberComponentCard.Header>
          <BooberComponentCard.Body
            code={stripedCode}
            language="jsx"
            scope={{ ActionButton, CardDropdown }}
            noLight
            className="p-0"
          />
        </BooberComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Dark Table">
            <p className="mt-2 mb-0">
              Use <code>variant="dark"</code> to invert the colors of the table
              and get light text on a dark background.
            </p>
          </BooberComponentCard.Header>
          <BooberComponentCard.Body
            code={darkCode}
            language="jsx"
            scope={{ ActionButton }}
            noLight
            className="py-0"
          />
        </BooberComponentCard>
      </Col>
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header
            title="Hoverable Rows"
            className="border-bottom"
          >
            <p className="mt-2 mb-0">
              Use the <code>hover</code> props to customise the table.
            </p>
          </BooberComponentCard.Header>
          <BooberComponentCard.Body
            code={hoverableCode}
            language="jsx"
            scope={{ ActionButton, FontAwesomeIcon }}
            noLight
            className="p-0"
            noInline
          />
        </BooberComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Bordered Table">
            <p className="mt-2 mb-0">
              Use the <code>bordered</code> props to make a bordered table.
            </p>
          </BooberComponentCard.Header>
          <BooberComponentCard.Body
            code={borderedCode}
            language="jsx"
            scope={{ ActionButton }}
            noLight
            className="py-0"
          />
        </BooberComponentCard>
      </Col>
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Borderless Table">
            <p className="mt-2 mb-0">
              Use the <code>borderless</code> props to make a borderless table.
            </p>
          </BooberComponentCard.Header>
          <BooberComponentCard.Body
            code={borderlessCode}
            language="jsx"
            scope={{ ActionButton }}
            noLight
            className="py-0"
          />
        </BooberComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header
            title="Small Tables"
            className="border-bottom"
          >
            <p className="mt-2 mb-0">
              Use <code>size="sm"</code> to make tables compact by cutting cell
              padding in half.
            </p>
          </BooberComponentCard.Header>
          <BooberComponentCard.Body
            code={smallTableCode}
            language="jsx"
            scope={{ ActionButton }}
            noLight
            className="p-0"
          />
        </BooberComponentCard>
      </Col>
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Highlight Column" />
          <BooberComponentCard.Body
            code={highlightColumnCode}
            language="jsx"
            scope={{ ActionButton }}
            noLight
            className="py-0"
          />
        </BooberComponentCard>
      </Col>
    </Row>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header title="Active Table" />
          <BooberComponentCard.Body
            code={activeTableCode}
            language="jsx"
            scope={{ ActionButton }}
            noLight
            className="py-0"
          />
        </BooberComponentCard>
      </Col>
      <Col lg={6}>
        <BooberComponentCard noGuttersBottom>
          <BooberComponentCard.Header
            title="Variants"
            className="border-bottom"
          >
            <p className="mt-2 mb-0">
              Use contextual classes to color tables, table rows or individual
              cells.
            </p>
          </BooberComponentCard.Header>
          <BooberComponentCard.Body
            code={variantCode}
            language="jsx"
            scope={{ ActionButton }}
            noLight
            className="py-0"
          />
        </BooberComponentCard>
      </Col>
    </Row>

    <BooberComponentCard>
      <BooberComponentCard.Header
        title="Responsive Table"
        className="border-bottom"
      >
        <p className="mt-2 mb-0">
          Use <code>responsive="sm"</code>, <code>responsive="md"</code>,{' '}
          <code>responsive="lg"</code>, or <code>responsive="xl"</code> as
          needed to create responsive tables up to a particular breakpoint. From
          that breakpoint and up, the table will behave normally and not scroll
          horizontally.
        </p>
      </BooberComponentCard.Header>
      <BooberComponentCard.Body
        code={responsiveTableCode}
        language="jsx"
        scope={{
          team3,
          team4,
          team2,
          team13,
          Avatar,
          FontAwesomeIcon,
          SoftBadge
        }}
        noLight
        className="py-0"
        noInline
      />
    </BooberComponentCard>
  </>
);

export default Tables;
