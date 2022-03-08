import React from 'react';
import PageHeader from 'components/common/PageHeader';
import BooberComponentCard from 'components/common/BooberComponentCard';
import { Button } from 'react-bootstrap';
import ReactYoutubePlayer from 'react-player/youtube';
import ReactVimeoPlayer from 'react-player/vimeo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const youtubeCode = `<ReactYoutubePlayer
  url="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
  controls={true}
  className="react-player"
/>`;
const vimeoCode = `<ReactVimeoPlayer
  url="https://vimeo.com/90509568"
  controls={true}
  className="react-player"
/>`;

const ReactPlayerExample = () => (
  <>
    <PageHeader
      title="React Player"
      description="A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura."
      className="mb-3"
    >
      <Button
        href="https://github.com/CookPete/react-player"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React Player Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Youtube player" light={false} />
      <BooberComponentCard.Body
        code={youtubeCode}
        language="jsx"
        scope={{ ReactYoutubePlayer }}
      />
    </BooberComponentCard>

    <BooberComponentCard>
      <BooberComponentCard.Header title="Vimeo player" light={false} />
      <BooberComponentCard.Body
        code={vimeoCode}
        language="jsx"
        scope={{ ReactVimeoPlayer }}
      />
    </BooberComponentCard>
  </>
);

export default ReactPlayerExample;
