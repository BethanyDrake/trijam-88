<template>
  <div id="app">
    <div v-if="state==='playing'">
      <MainScreen
        v-bind:endGame='endGame'
        />

    </div>
    <div v-if="state==='ended'">
      <GameOverScreen v-bind:score="score" v-bind:restart="restart" />
    </div>
  </div>
</template>

<script>

  import GameOverScreen from './components/GameOverScreen.vue'
  import MainScreen from './components/MainScreen.vue'


  const data = {
    state: 'playing',
    score: 0,
  }

  const endGame = (score) => {
    console.log("end game -- app")
    data.state = "ended"
    data.score = score

  }

  const restart = () => {
    console.log("restart - app")
    data.state = "playing"
  }

  export default {
    name: 'App',
    props: ['testId'],
    data: () => data,
    created: function () {
      data.score = 0,
      data.state = "playing"
     },
    components: {
      GameOverScreen,
      MainScreen,
    },
    methods: {
      restart,
      endGame,
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

  button {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>