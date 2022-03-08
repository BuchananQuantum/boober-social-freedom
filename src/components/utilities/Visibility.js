import React from 'react';
import PageHeader from 'components/common/PageHeader';
import BooberComponentCard from 'components/common/BooberComponentCard';
import BooberEditor from 'components/common/BooberEditor';

const exampleCode = `
<>
  <div className="visible">...</div>
  <div className="invisible">...</div>
</>
`;

const Visibility = () => (
  <>
    <PageHeader
      title="Visibility"
      description="Control the visibility, without modifying the display, of elements with visibility utilities."
      className="mb-3"
    />

    <BooberComponentCard>
      <BooberComponentCard.Header title="Example" noPreview>
        <p className="mt-2">
          Set the <code>visibility </code>of elements with our visibility
          utilities. These utility classes do not modify the display value at
          all and do not affect layout – .invisible elements still take up space
          in the page. Content will be hidden both visually and for assistive
          technology/screen reader users.
        </p>
        <p className="mb-0">
          Apply <code>.visible </code>or <code>.invisible </code>as needed.
        </p>
      </BooberComponentCard.Header>
      <BooberComponentCard.Body>
        <BooberEditor code={exampleCode} language="jsx" hidePreview />
      </BooberComponentCard.Body>
    </BooberComponentCard>
  </>
);

export default Visibility;
