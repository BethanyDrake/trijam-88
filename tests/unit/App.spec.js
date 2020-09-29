import { mount} from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  test('when I click a button, it shows me my updated score', async () => {
    const wrapper = mount(App)
    expect(wrapper.text()).not.toContain("Score")
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain("Score")

  })

  test('I can click next to go to the next round', async () => {
    const wrapper = mount(App)
    expect(wrapper.text()).not.toContain("Next")
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain("Next")
  })

  test('after 5 rounds, it is game over', async () => {
    const wrapper = mount(App)
    for (let i=0; i<5;i++) {
      expect(wrapper.text()).not.toContain("Game Over")
      const button = wrapper.find('button')
      await button.trigger('click')

      const nextButton = wrapper.find('#nextButton')
      await nextButton.trigger('click')
    }
    expect(wrapper.text()).toContain("Game Over")

  })

})
