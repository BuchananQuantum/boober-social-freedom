import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooberComponentCard from 'components/common/BooberComponentCard';
import TinymceEditor from 'components/common/TinymceEditor';
import BooberEditor from 'components/common/BooberEditor';

const exampleCode = `function SingleSelectExample() {
  const [value, setValue] = useState(null);
  return(
    <TinymceEditor
      value={value}
      handleChange={newValue => setFormData(newValue)}
    />
  )
}`;

const Editor = () => (
  <>
    <PageHeader
      title="Editor"
      description="React-Boober uses <strong>Tinymce React</strong> for rich text editor. TinyMCE React component integrates TinyMCE into React projects."
      className="mb-3"
    >
      <Button
        href="https://github.com/tinymce/tinymce-react"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Tinymce React Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Responsive behavior" noPreview>
        <p className="mt-2 mb-0">
          To use Tinymce editor at first you need to sign up in{' '}
          <a
            href="https://www.tiny.cloud/auth/signup/"
            target="_blank"
            rel="noreferrer"
          >
            Tiny Cloud
          </a>
          . And collect your api key and paste it in .env file variable
          <code> REACT_APP_TINYMCE_APIKEY</code>
        </p>
      </BooberComponentCard.Header>
      <BooberComponentCard.Body>
        <BooberEditor
          code={`REACT_APP_TINYMCE_APIKEY= your_api_key_here`}
          language="bash"
          hidePreview
        />
      </BooberComponentCard.Body>
    </BooberComponentCard>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Example">
        {/* <p className="mt-2">
          Boober React created <strong>TinymceEditor</strong> wrapper component
          for Tinymce Editor. You can use this component to integrate tinymce
          editor.
        </p> */}
      </BooberComponentCard.Header>
      <BooberComponentCard.Body
        code={exampleCode}
        scope={{ TinymceEditor }}
        language="jsx"
      />
    </BooberComponentCard>
  </>
);

export default Editor;
