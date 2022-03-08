import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import logoInvoice from 'assets/hoes/sound-of-creation-buchanan-quantum-computing.png';
import IconButton from 'components/common/IconButton';
import SimpleBarReact from 'simplebar-react';

const Invoice = () => {
  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Row className="justify-content-between align-items-center">
            <Col md>
              <h5 className="mb-2 mb-md-0">Order #AD20294</h5>
            </Col>
            <Col xs="auto">
              <IconButton
                variant="Boober-default"
                size="sm"
                icon="arrow-down"
                className="me-1 mb-2 mb-sm-0"
                iconClassName="me-1"
              >
                Download (.pdf)
              </IconButton>
              <IconButton
                variant="Boober-default"
                size="sm"
                icon="print"
                iconClassName="me-1"
                className="me-1 mb-2 mb-sm-0"
              >
                Print
              </IconButton>
              <IconButton
                variant="Boober-success"
                size="sm"
                icon="dollar-sign"
                className="mb-2 mb-sm-0"
              >
                Receive Payment
              </IconButton>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Row className="align-items-center text-center mb-3">
            <Col sm={6} className="text-sm-start">
              <img src={logoInvoice} alt="invoice" width={350} />
            </Col>
            <Col className="text-sm-end mt-3 mt-sm-0">
              <h2 className="mb-3">Invoice</h2>
              <h5>Buchanan Quantum</h5>
              <p className="fs--1 mb-0">
                52 Foster Ave, Sharon Hill <br /> PA, 19079
              </p>
            </Col>
            <Col xs={12}>
              <hr />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <h6 className="text-500">Invoice to</h6>
              <h5>520 Diversified Capital</h5>
              <p className="fs--1">
                520 Roosevelt Blvd West
                <br />
                Philadelphia, PA 19101
                <br />
                Canada
              </p>
              <p className="fs--1">
                <a href="mailto:dh@igotyousogood.com">dh@igotyousogood.com</a>
                <br />
                <a href="tel:3024648832">+1(302) 464-8832</a>
              </p>
            </Col>
            <Col sm="auto" className="ms-auto">
              <div className="table-responsive">
                <Table borderless size="sm" className="fs--1">
                  <tbody>
                    <tr>
                      <th className="text-sm-end">Invoice No:</th>
                      <td>DH-0001</td>
                    </tr>
                    <tr>
                      <th className="text-sm-end">Order Number:</th>
                      <td>DH-0001</td>
                    </tr>
                    <tr>
                      <th className="text-sm-end">Invoice Date:</th>
                      <td>2022-03-07</td>
                    </tr>
                    <tr>
                      <th className="text-sm-end">Payment Due:</th>
                      <td>Upon receipt</td>
                    </tr>
                    <tr className="alert-success fw-bold">
                      <th className="text-sm-end">Amount Due:</th>
                      <td>$5,000,000.40</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>

          <div className="mt-4 fs--1">
            <SimpleBarReact>
              <Table striped className="border-bottom">
                <thead className="light">
                  <tr className="bg-primary text-white dark__bg-1000">
                    <th className="border-0">Products</th>
                    <th className="border-0 text-center">Quantity</th>
                    <th className="border-0 text-end">Rate</th>
                    <th className="border-0 text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">
                      <h6 className="mb-0 text-nowrap">
                        Platinum web development package (Off Contract)
                      </h6>
                      <p className="mb-0">Down Time, Off Contract Work</p>
                    </td>
                    <td className="align-middle text-center">2,350 HRS</td>
                    <td className="align-middle text-end">$250.00</td>
                    <td className="align-middle text-end">$587,500.00</td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <h6 className="mb-0 text-nowrap">
                        2 Complete Lawsuit Possibilities
                      </h6>
                      <p className="mb-0">
                        Includes basic theft, assault and criminal mischeif
                      </p>
                    </td>
                    <td className="align-middle text-center">2</td>
                    <td className="align-middle text-end">$2,100.00</td>
                    <td className="align-middle text-end">$4,200.00</td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <h6 className="mb-0 text-nowrap">
                        Mobile App Development
                      </h6>
                    </td>
                    <td className="align-middle text-center">8</td>
                    <td className="align-middle text-end">$750,000.00</td>
                    <td className="align-middle text-end">6,000,000.00</td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <h6 className="mb-0 text-nowrap">Web App Development</h6>
                      <p className="mb-0">Includes 39 burgee dr.</p>
                    </td>
                    <td className="align-middle text-center">1</td>
                    <td className="align-middle text-end">$1,100,000.00</td>
                    <td className="align-middle text-end">$1,100,000.00</td>
                  </tr>
                </tbody>
              </Table>
            </SimpleBarReact>
          </div>

          <Row className="justify-content-end">
            <Col xs="auto">
              <Table borderless size="sm" className="fs--1 text-end">
                <tbody>
                  <tr>
                    <th className="text-900">Subtotal:</th>
                    <td className="fw-semi-bold">$7,691,700.00</td>
                  </tr>
                  <tr>
                    <th className="text-900">Tax 8%:</th>
                    <td className="fw-semi-bold">$615,336.00</td>
                  </tr>
                  <tr className="border-top">
                    <th className="text-900">Total:</th>
                    <td className="fw-semi-bold">$8,307,036.00</td>
                  </tr>
                  <tr className="border-top border-top-2 fw-bolder text-900">
                    <th>Amount Due:</th>
                    <td>$8,307,036.00</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="bg-light">
          <p className="fs--1 mb-0">
            <strong>Notes: </strong> We really appreciate your business and if
            there’s anything else we can do, please let us know!
          </p>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Invoice;
