<template>
  <div id="app">

    <div v-if="state==='playing'">
      <div class="container">
    <span id="languageName">{{languageName}}</span>
  </div>
    <div class="container">{{introText}}</div>


    <div v-if="buttonsEnabled" class="container buttonWrapper" >
    <button class="optionButton" v-for="option in buttonText" :key="option" v-on:click="select(option)">
      {{option}}</button>

    </div>
    <div v-else class="container buttonWrapper">
      <button class="optionButton--disabled" disabled v-for="option in buttonText" :key="option" v-on:click="select(option)">
        {{option}}</button>
    </div>


    <br>
    <div v-if="!buttonsEnabled">
      <div class="container">{{resultMessage}}</div>
      <button class="container" v-on:click="next()">Next</button>
      <div class="container">
        Score: {{score}}
      </div>
    </div>



  </div>
  <div v-if="state==='ended'">
    <div class="container">Game Over</div>
    <div class="container">
      Score: {{score}}
    </div>
    <button class="container" v-on:click="restart()">Restart</button>
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
let numberOfRounds = 1;

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
  border-color: black;
  padding: 32px;
}

.container {
  margin-bottom: 8px;
}

.optionButton {
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  width: 100px;
  padding: 8px;
  margin: 8px 8px;
}


.optionButton:hover{
  border-width: 3px;
  border-color: black;
}
.optionButton:active{
  background-color: white;
}

.optionButton--disabled{
  background-color: #eaeaea;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  width: 100px;
  padding: 8px;
  margin: 8px 8px;
}
.buttonWrapper {
  display:flex;
  justify-content:center;
  height: 80px;

}


#languageName {
  border-color: #d14747;
  background-color: #ffa1a1;
  padding:0 8px;
  color: black;
  border-width: 1px;
  border-style: solid;
}
</style>
