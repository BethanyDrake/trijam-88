import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'new message'
    const wrapper = shallowMount(Header, {
      propsData: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
