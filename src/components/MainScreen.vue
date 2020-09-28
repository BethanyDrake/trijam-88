<template>
  <div>
    <div class="container h1Container">
      <div class="h1">{{languageName}}</div>
    </div>
    <div class="container">{{introText}}</div>


    <div v-if="buttonsEnabled" class="container buttonWrapper">
      <button class="optionButton" v-for="option in buttonText" :key="option" v-on:click="select(option)">
        {{option}}</button>

    </div>
    <div v-else class="container buttonWrapper">
      <button class="optionButton--disabled" disabled v-for="option in buttonText" :key="option"
        v-on:click="select(option)">
        {{option}}</button>
    </div>

    <br>

  </div>
</template>
<script>

  export default {
    name: 'MainScreen',
    props: ['buttonText', 'introText', 'languageName', 'select', 'buttonsEnabled']
  }
</script>