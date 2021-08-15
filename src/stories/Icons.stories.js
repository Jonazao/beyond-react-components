import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import BaseSocialIcon from '../components/Buttons/Social/BaseSocialIcon';
import BeyondWrapper from '../hocs/BeyondWrapper';

const stories = storiesOf('Social Icons', module);

stories.add('Facebook', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="facebook" fontSize="large" />
  </BeyondWrapper>
));

stories.add('Twitter', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="twitter" />
  </BeyondWrapper>
));

stories.add('Google', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="google" />
  </BeyondWrapper>
));

stories.add('Instagram', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="instagram" />
  </BeyondWrapper>
));

stories.add('Pinterest', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="pinterest" />
  </BeyondWrapper>
));

stories.add('Youtube', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="youtube" />
  </BeyondWrapper>
));

stories.add('Slack', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="slack" />
  </BeyondWrapper>
));

stories.add('Dribbble', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="dribbble" />
  </BeyondWrapper>
));

stories.add('Github', () => (
  <BeyondWrapper>
    <BaseSocialIcon brand="github" />
  </BeyondWrapper>
));
