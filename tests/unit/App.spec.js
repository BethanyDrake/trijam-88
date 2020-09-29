import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('when I click a button, it shows me my updated score', async () => {
    //const text = 'new message'
    const wrapper = mount(App)
    expect(wrapper.text()).not.toContain("Score")
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain("Score")
  })
})
