import React from 'react';
import { storiesOf } from '@storybook/react';
import BaseSocialIcon from '../components/Buttons/Social/BaseSocialIcon';
import BeyondWrapper from '../hocs/BeyondWrapper';

const stories = storiesOf('Social Buttons', module);

stories.add('Facebook', () => {
  return <BeyondWrapper><BaseSocialIcon brand='facebook'/></BeyondWrapper>;
});

stories.add('Twitter', () => {
  return <BeyondWrapper><BaseSocialIcon brand='twitter'/></BeyondWrapper>;
});

stories.add('Google', () => {
  return <BeyondWrapper><BaseSocialIcon brand='google'/></BeyondWrapper>;
});

stories.add('Instagram', () => {
  return <BeyondWrapper><BaseSocialIcon brand='instagram'/></BeyondWrapper>;
});

stories.add('Pinterest', () => {
  return <BeyondWrapper><BaseSocialIcon brand='pinterest'/></BeyondWrapper>;
});

stories.add('Youtube', () => {
  return <BeyondWrapper><BaseSocialIcon brand='youtube'/></BeyondWrapper>;
});

stories.add('Slack', () => {
  return <BeyondWrapper><BaseSocialIcon brand='slack'/></BeyondWrapper>;
});

stories.add('Dribbble', () => {
  return <BeyondWrapper><BaseSocialIcon brand='dribbble'/></BeyondWrapper>;
});

stories.add('Github', () => {
  return <BeyondWrapper><BaseSocialIcon brand='github'/></BeyondWrapper>;
});