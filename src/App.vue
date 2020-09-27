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

    <div v-if="!buttonsEnabled">{{resultMessage}}</div>
  </div>
</template>

<script>
import { parse } from 'papaparse'
import {csvString} from './data-string.vue'

let parsedCSV = parse(csvString)
console.log(parsedCSV)
console.log(parsedCSV.data.length)

const randomEntry = parsedCSV.data[Math.floor(Math.random()*parsedCSV.data.length)]
let languageName = randomEntry[0]
let introText = randomEntry[5]

let hotPotato = randomEntry[2]
let coldSpag = randomEntry[3]
let mashedBanana = randomEntry[4]

let buttonText = [hotPotato, coldSpag, mashedBanana].sort(() => Math.random() -0.5)
let resultMessage =""
let buttonsEnabled = true;
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

const data = {
  resultMessage,
  languageName,
    introText,
    buttonText,
    buttonsEnabled,
}

//console.log(+ ": " + randomEntry[5])
export default {
  name: 'App',
  data: () => data,
  methods: {
    select
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
