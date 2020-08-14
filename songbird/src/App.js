import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/header/header'
import Topics from './components/topics/topics'
import Question from './components/question/question'
import Options from './components/options/options'
import Answer from './components/answer/answer'
import data from './data'

const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function App() {
  const [correct, setCorrect] = useState(false)
  const [topicIndex, setTopicIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [currentOption, setCurrentOption] = useState([])
  const topicsArray = data.map(el => el.topic)

  const handleNextButtonClick = () => {
    if (topicIndex < 5) {
      setTopicIndex(topicIndex + 1)
      setQuestionIndex(randomNumber(0, 5))
      setCorrect(false)
      setCurrentOption([])  
    }
  }

  useEffect(() => {
    setQuestionIndex(randomNumber(0, 5))
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <Topics topics={topicsArray} currentTopic={topicsArray[topicIndex]} />
      <Question correct={correct} question={data[topicIndex].songs[questionIndex]}/>
      <div className={styles.optionsAndAnswerContainer}>
        <Options 
        options={data[topicIndex].songs} 
        setCurrentOption={(option) => setCurrentOption(option)} topicIndex={topicIndex}
        correctSong={data[topicIndex].songs[questionIndex]}
        correct={correct}
        setCorrect={(c) => setCorrect(c)}
        />
        <Answer answer={currentOption}/>
      </div>
      {correct ? 
      <button onClick={() => handleNextButtonClick()} className={styles.nextButton} type='button'>Next level</button> :
      <button className={styles.inactiveButton} type='button'>Next level</button>}
    </div>
  );
}

export default App;
