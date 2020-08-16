import React, { Component, useEffect } from 'react';
import styles from './sound-player.module.css'
import PropTypes from 'prop-types';
import data from '../../data'
import { withSoundCloudAudio } from '../../../node_modules/react-soundplayer/addons';
import '../../../node_modules/react-soundplayer/styles/buttons.css'
import '../../../node_modules/react-soundplayer/styles/cover.css'
import '../../../node_modules/react-soundplayer/styles/icons.css'
import '../../../node_modules/react-soundplayer/styles/progress.css'
import '../../../node_modules/react-soundplayer/styles/volume.css'
import './sound-player.css'

import { PlayButton, Timer, VolumeControl, Progress } from 'react-soundplayer/components';

// it's just an alias for 'withSoundCloudAudio' but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';
import { useState } from 'react';

const streamUrl = `https://raw.githubusercontent.com/nastassiamilashevskaya/songbird-data/master/`;


const AWSSoundPlayer = withCustomAudio(props => {
  let { correct, playingAudio, setPlayingAudio } = props
  useEffect(() => {
    const player = document.querySelector('#question-audio-container').childNodes[0].childNodes[0].childNodes[0]
    document.querySelector('#options-container').childNodes.forEach(el => {
      el.addEventListener('click', () => {
        setPlayingAudio(props.playing)
        console.log('playingAudio', playingAudio)
        // if (props.playing && !correct) {
        //   console.log(correct)
        //   player.click()
        // }  
      })
    })
  })

  return (
    // <div>
    //   <PlayButton {...props}/>
    //   <h2>{trackTitle}</h2>
    //   <div className={styles.playerContainer}>
    //     <VolumeControl {...props}/>
    //     <Progress {...props} />
    //     <Timer {...props} />
    //   </div>
    // </div>
    <div className="p2 border navy mt1 mb3 flex rounded flex-column">
        {/* <div className="trackTitle">{data[2].songs[2].song}</div>
        <div className="trackArtist">{data[2].songs[2].artist}</div> */}
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
  // constructor(props) {
  //   super(props);
  //   this.state = {streamUrl: streamUrl + this.props.url};
  // }
  // componentDidMount() {
  //   const preloadAudio = async (url) => {
  //     const rawResponce = await fetch(streamUrl + url)
  //     const content = await rawResponce.json();
  //     console.log('content', content)
  //     this.setState({streamUrl: content})
  //   }    
  //   preloadAudio(this.props.url)
  // }
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