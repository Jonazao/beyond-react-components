import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import BackgroundPanel from '../components/TestComponents/BackgroundPanel';
import BeyondWrapper from '../hocs/BeyondWrapper';

const stories = storiesOf('Facebook Cover', module);

stories.add('Facebook', () => (
  <BeyondWrapper>
    <BackgroundPanel />
  </BeyondWrapper>
));
