<template>
  <div>

    <Header v-bind:text="languageData.languageName" />
    <div class="container">{{languageData.introText}}</div>


    <OptionButtons v-bind:buttonsEnabled="buttonsEnabled" v-bind:options="languageData.unsortedOptions" v-bind:select="select"/>
    <br>
    <div v-if="displayResult">
      <Result v-bind:score="score" v-bind:resultMessage="resultMessage" v-bind:next="next" />
    </div>
  </div>
</template>
<script>
  import Header from './Header.vue'
  import OptionButtons from './OptionButtons.vue'
  import Result from './Result.vue'
  import { getRandomLanguageData } from '../LanguageDataService.vue'

  let currentRound = 1;
  const data = {
    resultMessage: "",
    languageData: getRandomLanguageData(),
    displayResult: false,
    score: 0,
    buttonsEnabled: true,
  }
  let endGame;

  const numberOfRounds = 5;

  const next = () => {
    data.displayResult = false;
    data.languageData = getRandomLanguageData();
    currentRound++;
    if (currentRound > numberOfRounds) {
      console.log("ending game -- main screen")
      endGame(data.score)
    }
  }

  const select = (buttonText) => {
    data.displayResult = true;

    if (buttonText === data.languageData.hotPotato) {
      data.resultMessage = "Yum! Hot potato!"
      data.score += 1
    } else if (buttonText === data.languageData.coldSpag) {
      data.resultMessage = "Eww! Cold spaghetti!"
      data.score -= 1
    }
    else {
      data.resultMessage = "Meh. Mashed banana."
    }
  }


  export default {
    name: 'MainScreen',
    components: {Header, OptionButtons, Result},
    props: ['endGame'],
    data: () => data,
    created: function () {
      endGame = this.endGame
    },
    mounted: function () {
      data.languageData = getRandomLanguageData();
      data.score = 0
      data.buttonsEnabled = true;
      data.displayResult = false;
      currentRound = 1;
    },
    methods: {
      next,
      select,
    }

  }
</script>