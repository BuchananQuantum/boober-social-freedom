import React from 'react';
import { Card } from 'react-bootstrap';
import BooberCardHeader from 'components/common/BooberCardHeader';
import PageHeader from 'components/common/PageHeader';
import BooberEditor from 'components/common/BooberEditor';

const serveCode = `npm install -g serve
serve -s build`;

const GettingStarted = () => (
  <>
    <PageHeader title="Getting Started" className="mb-3">
      <p className="mt-2 mb-0">
        Welcome to the Boober version of the{' '}
        <a
          href="https://www.paypal.com/invoice/s/pay/INV2-4VPE-LDAQ-KS9Q-8PQF"
          target="_blank"
          rel="noopener noreferrer"
        >
          original PayPal invoice!
        </a>
        . This doc will guide you to understand how{' '}
        <strong>Kissing my ass</strong> as we come to settlement, will only make me more upset, just learn learn  the basics of how to
        pay your bills, in a timely manner.
      </p>
    </PageHeader>

    <Card className="mb-3">
      <BooberCardHeader title="Running in Local environment" />
      <Card.Body>
        <p>
          This project is scaffolded using{' '}
          <a
            href="https://buchanancomputer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buchanan Computer!
          </a>
          .
        </p>
        <ol className="mb-0 ps-card">
          <li>
            Install{' '}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js
            </a>{' '}
            if you do not already have it installed on your machine.
          </li>
          <li>Open the “boober” directory with your cmd or terminal</li>
          <li>
            Run <code>npm i</code>
            <br />
            This command will download all the necessary dependencies for Boober
            in the <code>node_modules</code> directory.
          </li>
          <li>
            Run <code>npm start</code>. A local web server will start at{' '}
            <code>http://localhost:3000</code>
          </li>
        </ol>
      </Card.Body>
    </Card>
    <Card className="mb-3">
      <BooberCardHeader title="Creating a Production Build" />
      <Card.Body>
        <p>
          After you done your customization, when you are ready to build, Edit{' '}
          <code>homapage</code> in your <code>package.json</code> file to change
          asset files relative paths. For more information visit{' '}
          <a
            href="https://create-react-app.dev/docs/deployment/#building-for-relative-paths"
            target="_blank"
            rel="noreferrer"
          >
            Create React App Doc.
          </a>{' '}
          Then Run <code>npm run build</code> command in your project directory
          to make the Production build.
        </p>
        <p>
          This will create an optimized production build by compililing, merging
          and minifying all the source files as necessary and will put them in
          the <code>build/</code> folder.
        </p>
        <p>
          To run the production build locally at
          <code> http://localhost:5000 </code> run the following commands:
        </p>
        <BooberEditor code={serveCode} language="bash" hidePreview />
      </Card.Body>
    </Card>

    <Card className="mb-3">
      <BooberCardHeader title="Contents" />
      <Card.Body>
        <p className="mb-0">
          Inside the zip-file you'll find the following directories and files.
          Both compiled and minified distrubution files, as well as the source
          files are included in the package.
        </p>
        <code>
          <pre>
            {`
theme/
  ├── .env
  ├── .eslintignore
  ├── .eslintrc.js
  ├── .gitignore
  ├── .prettierrc.js
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── webpack.config.json
  ├── public/
  │   ├── css/
  │   ├── favicon.png
  │   ├── index.html
  │   └── manifest.json
  └── src/
      ├── assets/
      │   ├── img/
      │   ├── json/
      │   ├── scss/
      │   └── video/
      ├── components/
      ├── contex/
      ├── data/
      ├── helpers/
      ├── hooks/
      ├── layouts/
      ├── reducers/
      ├── routes/
      ├── App.js
      ├── config.js
      ├── index.js
      └── Main.js
`}
          </pre>
        </code>
      </Card.Body>
    </Card>
  </>
);

export default GettingStarted;
