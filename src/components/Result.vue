<template>

  <div>
    <div class="container">{{resultMessage}}</div>
    <div class="container smallButtonWrapper">
      <button id="nextButton" class="container smallButton" v-on:click="next()">Next</button>
    </div>
    <div class="container">
      Score: {{score}}
    </div>
  </div>
</template>
<script>

 export default {
    name: 'Result',
    props: ['score', 'resultMessage', 'next']
  }
</script>