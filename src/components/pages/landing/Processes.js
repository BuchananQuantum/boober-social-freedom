import React from 'react';
import processList from 'data/feature/processList';
import Section from 'components/common/Section';
import Process from './Process';
import SectionHeader from './SectionHeader';
import { isIterableArray } from 'helpers/utils';

const Processes = () => (
  <Section>
    <SectionHeader
      title="Welcome Thrill Seekers"
      subtitle="There's no place like home. The Boober Social Freedom Network, brought to you by UberBooty.app. May 2022... Maybe? "
    />
    {isIterableArray(processList) &&
      processList.map((process, index) => (
        <Process key={process.color} isFirst={index === 0} {...process} />
      ))}
  </Section>
);

export default Processes;
