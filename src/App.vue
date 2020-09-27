<template>
  <div id="app">
    <div>{{languageName}}</div>
    <div>{{introText}}</div>
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
//console.log(+ ": " + randomEntry[5])
export default {
  name: 'App',
  data: () => ({
    languageName,
    introText
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
