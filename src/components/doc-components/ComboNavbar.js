import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from 'components/common/PageHeader';
import AppContext from 'context/Context';
import BooberEditor from 'components/common/BooberEditor';
import BooberComponentCard from 'components/common/BooberComponentCard';

const comboCode = `settings:{
  // ...rest
  navbarPosition:'combo'
}`;

const ComboNavbar = () => {
  const {
    config: { navbarPosition },
    setConfig
  } = useContext(AppContext);

  return (
    <>
      <PageHeader
        title="Combo Nav"
        description="Combo Nav is an additional layout system of Boober where you can place both Navbar Top and Navbar Vertical in a same page."
        className="mb-3"
      >
        <Button
          onClick={() =>
            setConfig(
              'navbarPosition',
              navbarPosition === 'vertical' ? 'combo' : 'vertical'
            )
          }
          variant="link"
          size="sm"
          className="ps-0"
        >
          Toggle Combo Nav
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>

      <BooberComponentCard>
        <BooberComponentCard.Header title="How to" noPreview />
        <BooberComponentCard.Body>
          <p>
            Combo layout uses Boober's{' '}
            <a href="/components/navs-and-tabs/vertical-navbar" target="_blank">
              Navbar vertical{' '}
            </a>
            and{' '}
            <a href="/components/navs-and-tabs/top-navbar" target="_blank">
              Navbar top
            </a>
            .
          </p>
          <p>
            To enable <strong> Combo Nav </strong>
            clear your browser's localstorage then from your project directory
            go to,
            <code>src/config.js</code> and set
            <code> navbarPosition:'combo' </code> of <code>settings</code>{' '}
            object.
          </p>
          <BooberEditor code={comboCode} language="js" hidePreview />
        </BooberComponentCard.Body>
      </BooberComponentCard>

      <BooberComponentCard>
        <BooberComponentCard.Header title="Behaviors" noPreview />
        <BooberComponentCard.Body>
          <p>
            For responsive collapsing pass{' '}
            <code>{`expand = {'sm | md | lg | xl'}`}</code> prop to
            React-Bootstrap's <code>Navbar</code> component.
          </p>
        </BooberComponentCard.Body>
      </BooberComponentCard>
    </>
  );
};

export default ComboNavbar;