<template>
  <div>

    <Header v-bind:text="languageName" />
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
  import Header from './Header.vue'

  export default {
    name: 'MainScreen',
    components: {Header},
    props: ['buttonText', 'introText', 'languageName', 'select', 'buttonsEnabled']
  }
</script>