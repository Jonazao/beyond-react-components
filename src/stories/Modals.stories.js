import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Modal from '../components/Modals/AppModal';
import BeyondWrapper from '../hocs/BeyondWrapper';

const stories = storiesOf('Modals', module);

const content = [
  {
    type: 'list',
    bullets: false,
    header: 'Appeal Last Year',
    items: [
      {
        type: 'text',
        text: '$6,000.00 x 1.2 = $7,200.00',
      },
      {
        type: 'text',
        text: 'Set first Value to $7,200.00',
      },
      {
        type: 'text',
        text: '$540,000.00 is greater than limit $9,000.00 x 1.5 = $9,000.00',
      },
    ],
  },
  {
    type: 'list',
    bullets: false,
    header: 'Appeal Last Year',
    items: [
      {
        type: 'text',
        text: '$6,000.00 x 1.2 = $7,200.00',
      },
      {
        type: 'text',
        text: 'Set first Value to $7,200.00',
      },
      {
        type: 'text',
        text: '$540,000.00 is greater than limit $9,000.00 x 1.5 = $9,000.00',
      },
    ],
  },
  {
    type: 'list',
    bullets: false,
    header: 'Appeal Last Year',
    items: [
      {
        type: 'text',
        text: '$6,000.00 x 1.2 = $7,200.00',
      },
      {
        type: 'text',
        text: 'Set first Value to $7,200.00',
      },
      {
        type: 'text',
        text: '$540,000.00 is greater than limit $9,000.00 x 1.5 = $9,000.00',
      },
    ],
  },
  {
    type: 'list',
    bullets: false,
    header: 'Appeal Last Year',
    items: [
      {
        type: 'text',
        text: '$6,000.00 x 1.2 = $7,200.00',
      },
      {
        type: 'text',
        text: 'Set first Value to $7,200.00',
      },
      {
        type: 'text',
        text: '$540,000.00 is greater than limit $9,000.00 x 1.5 = $9,000.00',
      },
    ],
  },
  {
    type: 'header',
    header: 'Special Event Gift has no value, skip',
    color: '#EB5757',
  },
  {
    type: 'subtitle',
    header: 'ASK String: $9,000.00',
  },
  {
    type: 'header',
    header: 'Ask 2 = Ask 1 ($9,000.00) x 1.1 = $9,900.00',
  },
  {
    type: 'header',
    header: 'Ask 3 = Ask 1 ($9,000.00) x 1.1 = $13,900.00',
  },
  {
    type: 'header',
    header: 'Ask 4 = Ask 1 ($9,000.00) x 1.1 = $5,900.00',
  },
  {
    type: 'header',
    header: 'Ask 5 = Ask 1 ($9,000.00) x 1.1 = $17,900.00',
  },
];

stories.add('Dialog Default', () => (
  <BeyondWrapper>
    <Modal title="View Ask Logic - ID: 123456" subtitle="ASK String $9,000.00" content={content} />
  </BeyondWrapper>
));
