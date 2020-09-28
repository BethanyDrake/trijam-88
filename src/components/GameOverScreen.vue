<template>
  <div>
    <div class="container h1Container">
      <div class="container h1">Game Over</div>
    </div>
    <div class="container">
      Score: {{score}}
    </div>
    <div class="smallButtonWrapper">
      <button class="container smallButton" v-on:click="restart()">Restart</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameOverScreen',
    props: ['score', 'restart']
  }
</script>