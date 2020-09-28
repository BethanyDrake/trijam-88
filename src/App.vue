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

  import GameOverScreen from './components/GameOverScreen.vue'
  import MainScreen from './components/MainScreen.vue'
  import Result from './components/Result.vue'
  import {getRandomLanguageData} from './LanguageDataService.vue'

  let currentRound = 1;
  let numberOfRounds = 5;

  const data = {
    resultMessage: "",
    languageData: {},
    displayResult: false,
    score: 0,
    state: "playing"
  }

  data.languageData = getRandomLanguageData()

  const restart = () => {
    data.score = 0;
    currentRound = 1;
    getRandomLanguageData();
    data.state = "playing"
  }

  const endGame = () => {
    data.state = "ended"
  }
  const next = () => {
    console.log("next")
    data.displayResult = false;
    data.languageData = getRandomLanguageData();
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
</style>