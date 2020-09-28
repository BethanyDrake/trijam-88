<template>

  <div>
  <div v-if="buttonsEnabled" class="container buttonWrapper">
    <button class="optionButton" v-for="option in options" :key="option" v-on:click="select(option)">
      {{option}}</button>

  </div>
  <div v-else class="container buttonWrapper">
    <button class="optionButton--disabled" disabled v-for="option in options" :key="option"
      v-on:click="select(option)">
      {{option}}</button>
  </div>

</div>

</template>

<script>
   export default {
    name: 'OptionButtons',
    props: ['buttonsEnabled', 'options', 'select']
  }

</script>

<style scoped>

.optionButton {
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    width: 120px;
    padding: 8px;
    margin: 8px 8px;
  }



  .optionButton:hover {
    border-width: 3px;
    border-color: black;
  }

  .optionButton:active {
    background-color: white;
  }

  .optionButton--disabled {
    background-color: #eaeaea;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    width: 120px;
    padding: 8px;
    margin: 8px 8px;
  }

  .buttonWrapper {
    display: flex;
    justify-content: center;
    height: 80px;

  }

</style>