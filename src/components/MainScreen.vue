<template>
  <div>

    <Header v-bind:text="languageName" />
    <div class="container">{{introText}}</div>


    <OptionButtons v-bind:buttonsEnabled="buttonsEnabled" v-bind:options="buttonText" v-bind:select="select"/>
    <br>

  </div>
</template>
<script>
  import Header from './Header.vue'
  import OptionButtons from './OptionButtons.vue'

  export default {
    name: 'MainScreen',
    components: {Header, OptionButtons},
    props: ['buttonText', 'introText', 'languageName', 'select', 'buttonsEnabled']
  }
</script>