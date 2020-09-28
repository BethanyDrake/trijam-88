<template>
  <div class="container h1Container">
    <div class="container h1">{{text}}</div>
  </div>
</template>
<script>

export default {
    name: 'Header',
    props: ['text']
  }

</script>

<style scoped>

.h1 {
    font-size: 2em;
    border-color: #d14747;
    background-color: #ffa1a1;
    width: 400px;
    color: black;
    border-width: 1px;
    border-style: solid;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .h1Container {
    display: flex;
    justify-content: center;
  }
</style>