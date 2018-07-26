import Vue from 'vue'
import Hello from '@/containers/test/index.vue'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.cashierList.length)
      .to.equal(2)
    expect(vm.cashierPayList.length)
      .to.equal(2)
  })
})
