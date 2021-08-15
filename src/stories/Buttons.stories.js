import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import BaseSocialButton from '../components/Buttons/Social/BaseSocialButton';
import BeyondWrapper from '../hocs/BeyondWrapper';

const stories = storiesOf('Social Buttons', module);

stories.add('Facebook', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="facebook" fontSize="large" variant="contained">
      Facebook
    </BaseSocialButton>
    <BaseSocialButton
      brand="facebook"
      fontSize="large"
      variant="contained"
      useIconBrandColor={false}
      color="primary"
    >
      Facebook No Brand Color
    </BaseSocialButton>
    <BaseSocialButton brand="facebook" fontSize="large" variant="outlined">
      Facebook
    </BaseSocialButton>
    <BaseSocialButton brand="facebook" fontSize="large" variant="text">
      Facebook
    </BaseSocialButton>
  </BeyondWrapper>
));

stories.add('Twitter', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="twitter" fontSize="large">
      Twitter
    </BaseSocialButton>
  </BeyondWrapper>
));

stories.add('Google', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="google" fontSize="large">
      Google
    </BaseSocialButton>
  </BeyondWrapper>
));

stories.add('Instagram', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="instagram" fontSize="large">
      Instagram
    </BaseSocialButton>
  </BeyondWrapper>
));

stories.add('Pinterest', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="pinterest" fontSize="large">
      Pinterest
    </BaseSocialButton>
  </BeyondWrapper>
));

stories.add('Youtube', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="youtube" fontSize="large">
      Youtube
    </BaseSocialButton>
  </BeyondWrapper>
));

stories.add('Slack', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="slack" fontSize="large">
      Slack
    </BaseSocialButton>
  </BeyondWrapper>
));

stories.add('Dribbble', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="dribbble" fontSize="large">
      Dribbble
    </BaseSocialButton>
  </BeyondWrapper>
));

stories.add('Github', () => (
  <BeyondWrapper>
    <BaseSocialButton brand="github" fontSize="large">
      Facebook
    </BaseSocialButton>
  </BeyondWrapper>
));
