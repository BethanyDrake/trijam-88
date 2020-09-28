<script>
import { csvString } from './data-string.vue'
import { parse } from 'papaparse'

const parsedCSV = parse(csvString)
export default {
  name: 'LanguageDataService',
}

export const getRandomLanguageData = () => {
  console.log("getting language data")
    const randomEntry = parsedCSV.data[Math.floor(Math.random() * parsedCSV.data.length)]
    const sortedOptions = [randomEntry[2],randomEntry[3], randomEntry[4]];
    const unsortedOptions = sortedOptions.sort(() => Math.random() - 0.5);

    return {
      languageName:randomEntry[0],
      hotPotato: randomEntry[2],
      coldSpag: randomEntry[3],
      mashedBanana: randomEntry[4],
      introText: randomEntry[5],
      unsortedOptions,
    }

  }
</script>