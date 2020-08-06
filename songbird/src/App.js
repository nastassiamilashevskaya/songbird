import React from 'react';
import styles from './App.module.css';
import Header from './components/header/header'
import Topics from './components/topics/topics'
import Question from './components/question/question'

const topicsArray = ['Jazz', 'Country', 'Pop', 'Hip-hop', 'Rock', 'Soundtrack']

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Topics topics={topicsArray} />
      <Question />
    </div>
  );
}

export default App;
