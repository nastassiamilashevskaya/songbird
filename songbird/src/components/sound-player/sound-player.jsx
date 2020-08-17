import React, { useEffect } from 'react';
import '../../../node_modules/react-soundplayer/styles/buttons.css'
import '../../../node_modules/react-soundplayer/styles/cover.css'
import '../../../node_modules/react-soundplayer/styles/icons.css'
import '../../../node_modules/react-soundplayer/styles/progress.css'
import '../../../node_modules/react-soundplayer/styles/volume.css'
import './sound-player.css'

import { PlayButton, Timer, VolumeControl, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

const streamUrl = `https://raw.githubusercontent.com/nastassiamilashevskaya/songbird-data/master/`;

const AWSSoundPlayer = withCustomAudio(props => {
  let { setPlayingAudio } = props
  useEffect(() => {
    document.querySelector('#options-container').childNodes.forEach(el => {
      el.addEventListener('click', () => {
        setPlayingAudio(props.playing)
      })
    })
  })

  return (
    <div className="p2 border navy mt1 mb3 flex rounded flex-column">
        <div className="flex-auto player-container">
          <PlayButton className="flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle custom-btn" {...props} />
          <div className='flex flex-center volume-and-progress'>
            <VolumeControl
              className='mr2 flex flex-center'
              buttonClassName="flex-none h6 button white btn-small button-outline button-grow bg-orange circle btn-square"
              {...props} />
            <Progress
              className="mt1 mb1 rounded"
              innerClassName="rounded-left"
              {...props} 
              />
            <Timer {...props} />
          </div>
        </div>
      </div>
  );
});

class SoundPlayer extends React.Component {
  render() {
    return (
      <AWSSoundPlayer
        streamUrl={streamUrl + this.props.url}
        preloadType="metadata" 
        correct={this.props.correct}
        playingAudio={this.props.playingAudio}
        setPlayingAudio={this.props.setPlayingAudio}
        />
    );
  }
}

export default SoundPlayer