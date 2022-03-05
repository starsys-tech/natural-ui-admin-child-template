import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld/index.vue'

test("测试HelloWorld组件", () => {
    const wrapper = mount(HelloWorld)
    const hello = wrapper.get('[data-test="hello"]')
    expect(hello.text()).toBe('Hello World')
})