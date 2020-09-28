<template>
  <div id="app">

    <div v-if="state==='playing'">
      <MainScreen v-bind:buttonText="languageData.unsortedOptions"
        v-bind:introText="languageData.introText" v-bind:languageName="languageData.languageName" v-bind:select="select" v-bind:buttonsEnabled="!displayResult" />
        <div v-if="displayResult">
          <Result v-bind:score="score" v-bind:resultMessage="resultMessage" v-bind:next="next"  />
        </div>
    </div>
    <div v-if="state==='ended'">
      <GameOverScreen v-bind:score="score" v-bind:restart="restart" />
    </div>
  </div>
</template>

<script>
  import { parse } from 'papaparse'
  import { csvString } from './data-string.vue'
  import GameOverScreen from './components/GameOverScreen.vue'
  import MainScreen from './components/MainScreen.vue'
  import Result from './components/Result.vue'
  const parsedCSV = parse(csvString)
  console.log(parsedCSV)
  console.log(parsedCSV.data.length)

  let currentRound = 1;
  let numberOfRounds = 5;

  const data = {
    resultMessage: "",
    languageData: {},
    displayResult: false,
    score: 0,
    state: "playing"
  }
  const getValues = (parsedCSV) => {
    const randomEntry = parsedCSV.data[Math.floor(Math.random() * parsedCSV.data.length)]
    const sortedOptions = [randomEntry[2],randomEntry[3], randomEntry[4]];
    const unsortedOptions = sortedOptions.sort(() => {Math.random() - 0.5});

    return {
      languageName:randomEntry[0],
      hotPotato: randomEntry[2],
      coldSpag: randomEntry[3],
      mashedBanana: randomEntry[4],
      introText: randomEntry[5],
      unsortedOptions,
    }

  }
  data.languageData = getValues(parsedCSV)

  const restart = () => {
    data.score = 0;
    currentRound = 1;
    getValues(parsedCSV);
    data.state = "playing"
  }

  const endGame = () => {
    data.state = "ended"
  }
  const next = () => {
    console.log("next")
    data.displayResult = false;
    data.languageData = getValues(parsedCSV);
    currentRound++;
    if (currentRound > numberOfRounds) {
      endGame()
    }
  }

  const select = (buttonText) => {
    console.log("selected " + buttonText)
    data.displayResult = true;

    if (buttonText === data.languageData.hotPotato) {
      data.resultMessage = "Yum! Hot potato!"
      data.score += 1
    } else if (buttonText === data.languageData.coldSpag) {
      data.resultMessage = "Eww! Cold spaghetti!"
      data.score -= 1
    }
    else {
      data.resultMessage = "Meh. Mashed banana."
    }
  }

  export default {
    name: 'App',
    data: () => data,
    components: {
      GameOverScreen,
      MainScreen,
      Result
    },
    methods: {
      select,
      next,
      restart
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    border-color: black;
    padding: 32px;
  }

  .container {
    margin-bottom: 8px;
  }

  .smallButtonWrapper {
    display: flex;
    justify-content: center;
    height: 40px;

  }

  .smallButton {
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    width: 80px;
    padding: 4px;
  }

  .smallButton:hover {
    border-width: 3px;
    border-color: black;
  }

  .smallButton:active {
    background-color: white;
  }

  .optionButton {
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    width: 120px;
    padding: 8px;
    margin: 8px 8px;
  }

  button {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .optionButton:hover {
    border-width: 3px;
    border-color: black;
  }

  .optionButton:active {
    background-color: white;
  }

  .optionButton--disabled {
    background-color: #eaeaea;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    width: 120px;
    padding: 8px;
    margin: 8px 8px;
  }

  .buttonWrapper {
    display: flex;
    justify-content: center;
    height: 80px;

  }

  .h1 {
    font-size: 2em;
    border-color: #d14747;
    background-color: #ffa1a1;
    /* padding:0 16px; */
    width: 400px;
    color: black;
    border-width: 1px;
    border-style: solid;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .h1Container {
    display: flex;
    justify-content: center;
  }
</style>