<template>
  <div id="app">

    <div v-if="state==='playing'">
    <div>{{languageName}}</div>
    <div>{{introText}}</div>


    <div v-if="buttonsEnabled">
    <button v-for="option in buttonText" :key="option" v-on:click="select(option)">
      {{option}}</button>

    </div>
    <div v-else>
      <button disabled v-for="option in buttonText" :key="option" v-on:click="select(option)">
        {{option}}</button>
    </div>


    <div v-if="!buttonsEnabled">
      <div>{{resultMessage}}</div>
      <button v-on:click="next()">Next</button>
    </div>

    <div>
      Score: {{score}}
    </div>

  </div>
  <div v-if="state==='ended'">
    Game Over
    <div>
      Score: {{score}}
    </div>
    <button v-on:click="restart()">Restart</button>
  </div>
  </div>
</template>

<script>
import { parse } from 'papaparse'
import {csvString} from './data-string.vue'

const parsedCSV = parse(csvString)
console.log(parsedCSV)
console.log(parsedCSV.data.length)

let randomEntry, hotPotato, coldSpag, mashedBanana;

let currentRound = 1;
let numberOfRounds = 5;

const data = {
  resultMessage: "",
  languageName: "",
    introText: "",
    buttonText: [],
    buttonsEnabled: true,
    score:0,
    state: "playing"
}
const getValues = () => {
  randomEntry = parsedCSV.data[Math.floor(Math.random()*parsedCSV.data.length)]
  hotPotato = randomEntry[2]
  coldSpag = randomEntry[3]
  mashedBanana = randomEntry[4]
  data.buttonText =[hotPotato, coldSpag, mashedBanana].sort(() => Math.random() -0.5)
  data.introText = randomEntry[5]
  data.languageName = randomEntry[0]

}
getValues()

const restart = () => {
  data.score = 0;
  currentRound = 1;
  getValues();
  data.state = "playing"
}

const endGame = () => {
  data.state = "ended"
}
const next = () => {
  console.log("next")
  data.buttonsEnabled = true;
  getValues();
  currentRound++;
  if (currentRound > numberOfRounds) {
    endGame()
  }
}

const select = (buttonText) => {
  console.log("selected "+ buttonText)
  data.buttonsEnabled = false;

  if (buttonText===hotPotato) {
    data.resultMessage = "Yum! Hot potato!"
    data.score += 1
  }else if (buttonText===coldSpag) {
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
}
</style>
