import React, { useState, useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styles from './App.module.css';
import Header from './components/header/header'
import Topics from './components/topics/topics'
import Question from './components/question/question'
import Options from './components/options/options'
import Answer from './components/answer/answer'
import Congrats from './components/congrats/congrats'
import data from './data'
import CorrectAudio from './audio/correct-audio.mp3'
import ErrorAudio from './audio/error-audio.mp3'

const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function App() {
  const [correct, setCorrect] = useState(false)
  const [playError, setPlayError] = useState(null)
  const [topicIndex, setTopicIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [currentOption, setCurrentOption] = useState([])
  const [mistakes, setMistakes] = useState(0)
  const [score, setScore] = useState(30)
  const [playingAudio, setPlayingAudio] = useState(false)
  const [showCongrats, setShowCongrats] = useState(true)
  const [showGreatCongrats, setShowGreatCongrats] = useState(false)
  const topicsArray = data.map(el => el.topic)

  const handleNextButtonClick = () => {
    if (topicIndex < 5) {
      setTopicIndex(topicIndex + 1)
      setQuestionIndex(randomNumber(0, 5))
      setCorrect(false)
      setCurrentOption([])
      console.log(playingAudio)
    }
  }

  const handlePlayAgainButton = () => {
    setTopicIndex(0)
    setQuestionIndex(randomNumber(0, 5))
    setCorrect(false)
    setCurrentOption([])
    setScore(0)
    setShowCongrats(false)
  }

  const handleClickError = () => {
    playError.audioEl.current.play()
  }

  useEffect(() => {
    setQuestionIndex(randomNumber(0, 5))
  }, [])

  return (
    <div className={styles.container}>
      {correct && <ReactAudioPlayer
        src={CorrectAudio}
        autoPlay
      />}
      <ReactAudioPlayer
        src={ErrorAudio}
        autoPlay={false}
        ref={(element) => setPlayError(element)}
      />
      <Header score={score} />
      <Topics topics={topicsArray} currentTopic={topicsArray[topicIndex]} />
      {!showCongrats ? <><Question
        correct={correct}
        question={data[topicIndex].songs[questionIndex]}
        playingAudio={playingAudio}
        setPlayingAudio={(a) => setPlayingAudio(a)}
      />
        <div className={styles.optionsAndAnswerContainer}>
          <Options
            options={data[topicIndex].songs}
            setCurrentOption={(option) => setCurrentOption(option)} topicIndex={topicIndex}
            correctSong={data[topicIndex].songs[questionIndex]}
            correct={correct}
            setCorrect={(c) => setCorrect(c)}
            mistakes={mistakes}
            setMistakes={(num) => setMistakes(num)}
            score={score}
            setScore={(s) => setScore(s)}
            playingAudio={playingAudio}
            handleClickError={() => handleClickError()}
            setShowCongrats={(s) => setShowCongrats(s)}
          />
          <Answer answer={currentOption} />
        </div>
        {correct ?
          <button onClick={() => handleNextButtonClick()} className={styles.nextButton} type='button'>Next level</button> :
          <button onClick={() => console.log('playError', playError)} className={styles.inactiveButton} type='button'>Next level</button>}
      </> :
        <Congrats 
        score={score} 
        handlePlayAgainButton={() => handlePlayAgainButton()}
        />}
    </div>
  );
}

export default App;
