import React from 'react';
import { storiesOf } from '@storybook/react';
import { Requirements } from '../components/Requirements';

const stories = storiesOf('Requeriments', module);

stories.add('Default', () => {
  return <Requirements />;
});
