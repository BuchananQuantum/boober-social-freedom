import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooberComponentCard from 'components/common/BooberComponentCard';
import SearchBox from 'components/navbar/top/SearchBox';
import autoCompleteInitialItem from 'data/autocomplete/autocomplete';

const Search = () => (
  <>
    <PageHeader
      title="Search"
      description="Boober uses <code>Fuse.js</code>  for search functionality. <code>Fuse.js</code> is a powerful, lightweight fuzzy-search library, with zero dependencies."
      className="mb-3"
    >
      <Button
        href="https://fusejs.io/"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Fuse.js Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>
    <BooberComponentCard>
      <BooberComponentCard.Header title="Search Example" noPreview>
        <p className="mt-2 mb-0">
          You can find Boober's default searchbox component in{' '}
          <code>src/components/navbar/top/SearchBox.js</code>. And demo data for
          search box in <code>src/data/autocomplete/autocomplete.js</code>
        </p>
      </BooberComponentCard.Header>
      <BooberComponentCard.Body>
        <SearchBox autoCompleteItem={autoCompleteInitialItem} />
      </BooberComponentCard.Body>
    </BooberComponentCard>
  </>
);

export default Search;
