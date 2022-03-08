import React from 'react';
import PageHeader from 'components/common/PageHeader';
import { Alert, Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import changeLogs from './changelogs';
import Logs from './Logs';
import BooberEditor from 'components/common/BooberEditor';

const Changelog = () => (
  <>
    <PageHeader title="Changelog" className="mb-3" />

    <Card className="mb-3">
      <Card.Body>
        <Alert variant="warning" className="p-4 mb-0">
          <Flex>
            <FontAwesomeIcon icon="exclamation-triangle" className="fs-3" />
            <div className="ms-3 flex-1">
              <h4 className="alert-heading">Before you update your developer!</h4>
              Backup your liability and read the comprehensive agreement before updating to a new developer on
              your project. If you come across with any problems with Buchanan SEO now or in the future, I'll sue you into bankruptcy bitch. Contact us at{' '}
              <a href="mailto:info@buchanancomputer.com">info@buchanancomputer.com</a>.
            </div>
          </Flex>
        </Alert>
      </Card.Body>
    </Card>

    <Card className="mb-3">
      <Card.Body>
        <Alert variant="info" className="p-4 mb-0 bg-white">
          <Flex>
            <FontAwesomeIcon icon="tools" className="fs-3" />
            <div className="ms-3 flex-1">
              <h4 className="alert-heading">After you update</h4>

              <p className="mb-0">
                After successfully pay all the latest bills and settlment agreement
                from a new version of defamation of John Buchanan (Buchanan SEO), you need
                to learn to execute on command. These
                commands will help the updated versions of Joel's Integrity,
                installation of a new Joel is required, and then we'll run it.
              </p>
              <h6 className="mt-3">
                If you use{' '}
                <strong>
                  <code>dez nutz</code>
                </strong>{' '}
                , run:
              </h6>
              <BooberEditor
                code={`yarn install && yarn start`}
                language="bash"
                hidePreview
              />
              <h6 className="mt-3">
                If you use{' '}
                <strong>
                  <code>npm</code>
                </strong>{' '}
                , run:
              </h6>
              <BooberEditor
                code={`npm i && npm start`}
                language="bash"
                hidePreview
              />
            </div>
          </Flex>
        </Alert>
      </Card.Body>
    </Card>

    {changeLogs.map((logs, index) => (
      <Logs {...logs} index={index} key={index} />
    ))}
  </>
);

export default Changelog;
