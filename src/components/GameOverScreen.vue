<template>
  <div>
    <Header text="Game Over" />
    <div class="container">
      Score: {{score}}
    </div>
    <div class="smallButtonWrapper">
      <button class="container smallButton" v-on:click="restart()">Restart</button>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'

  export default {
    name: 'GameOverScreen',
    components: {
      Header
    },
    props: ['score', 'restart']
  }
</script>