import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withSoundCloudAudio } from '../../../node_modules/react-soundplayer/addons';
// import { PlayButton, Progress, VolumeControl } from '../../../node_modules/react-soundplayer/components';
import '../../../node_modules/react-soundplayer/styles/buttons.css'
import '../../../node_modules/react-soundplayer/styles/cover.css'
import '../../../node_modules/react-soundplayer/styles/icons.css'
import '../../../node_modules/react-soundplayer/styles/progress.css'
import '../../../node_modules/react-soundplayer/styles/volume.css'
// import { withCustomAudio } from '../../addons';
// import { PlayButton, Timer } from '../../components';

import { PlayButton, Timer, VolumeControl, Progress } from 'react-soundplayer/components';

// it's just an alias for 'withSoundCloudAudio' but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';
import { useState } from 'react';

// audio source
const streamUrl = 'https://raw.githubusercontent.com/nastassiamilashevskaya/songbird-data/master/pop/Jonas Blue - Perfect Strangers.mp3';

// some track meta information
const trackTitle = 'Great song by random artist';

const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle, volume } = props;
  const [newVolume, setNewVolume] = useState(0.3)

    useEffect(() => {
        console.log(props.volume)
        // props.volume = newVolume
        // props.setState({volume: newVolume})
        // setNewVolume(volume)
    }, [])

  return (
    <div>
      <PlayButton {...props}/>
      <h2>{trackTitle}</h2>
      <Timer {...props} />
      <VolumeControl {...props}/>
      <Progress {...props} />
    </div>
  );
});

class SoundPlayer extends React.Component {
  render() {
    return (
      <AWSSoundPlayer
        streamUrl={streamUrl}
        trackTitle={trackTitle}
        preloadType="metadata" />
    );
  }
}

export default SoundPlayer