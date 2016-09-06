/* @flow */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import StoryContainer from './StoryContainer'
import PadGrid from 'components/PadGrid'

const pads = [
  {
    color: 'green',
    name: 'Bass Drum',
    sample: 'http://localhost:3000/samples/BD0000.WAV'
  },
  {
    color: 'green',
    name: 'Snare',
    sample: 'http://localhost:3000/samples/SD0010.WAV'
  },
  {
    color: 'yellow',
    name: 'HiHat',
    sample: 'http://localhost:3000/samples/OH00.WAV'
  },
  {
    color: 'blue',
    name: 'Low Tom',
    sample: 'http://localhost:3000/samples/LT00.WAV'
  },
  {
    color: 'blue',
    name: 'Medium Tom',
    sample: 'http://localhost:3000/samples/MT00.WAV'
  },
  {
    color: 'blue',
    name: 'Hi Tom',
    sample: 'http://localhost:3000/samples/HT00.WAV'
  }
]

storiesOf('PadGrid', module)
  .add('standard', () => (
    <StoryContainer>
      <PadGrid pads={pads} />
    </StoryContainer>
  ))
  .add('error', () => (
    <StoryContainer>
      <PadGrid errorMsg="this is an error!" />
    </StoryContainer>
  ))
