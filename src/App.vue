<template>
  <div id="app">
    <div>{{languageName}}</div>
    <div>{{introText}}</div>
    <button>{{buttonText[0]}}</button>
    <button>{{buttonText[1]}}</button>
    <button>{{buttonText[2]}}</button>
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

//console.log(+ ": " + randomEntry[5])
export default {
  name: 'App',
  data: () => ({
    languageName,
    introText,
    buttonText,
  }),
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
