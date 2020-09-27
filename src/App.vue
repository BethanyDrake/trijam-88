<template>
  <div id="app">
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
  </div>
</template>

<script>
import { parse } from 'papaparse'
import {csvString} from './data-string.vue'

const parsedCSV = parse(csvString)
console.log(parsedCSV)
console.log(parsedCSV.data.length)

let randomEntry, hotPotato, coldSpag,mashedBanana, buttonsEnabled;


const data = {
  resultMessage: "",
  languageName: "",
    introText: "",
    buttonText: [],
    buttonsEnabled,
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

const next = () => {
  console.log("next")
  data.buttonsEnabled = true;
  getValues();
}

const select = (buttonText) => {
  console.log("selected "+ buttonText)
  data.buttonsEnabled = false;

  if (buttonText===hotPotato) {
    data.resultMessage = "Yum! Hot potato!"
  }else if (buttonText===coldSpag) {
    data.resultMessage = "Eww! Cold spaghetti!"
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
    next
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
