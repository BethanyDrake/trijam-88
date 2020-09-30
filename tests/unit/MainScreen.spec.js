import { mount } from '@vue/test-utils'
import MainScreen from '@/components/MainScreen.vue'
import OptionButtons from  '@/components/OptionButtons.vue'

describe('MainScreen.vue', () => {
  test('When I click an option button, the option buttons are disabled', async () => {
    const wrapper = mount(MainScreen, {
      propsData: {  }
    })
    const optionButtons = wrapper.findComponent(OptionButtons)
    expect(optionButtons.props('buttonsEnabled')).toEqual(true)
    await optionButtons.find('button').trigger('click');
    expect(optionButtons.props('buttonsEnabled')).toEqual(false)
  })
})
