import Vue from 'vue'
import ComponentA from '../../src/components/a.vue'

describe('a.vue', () => {

  // asserting JavaScript options
  it('should have correct message', () => {
    expect(ComponentA.data().msg).toBe('Hello from Component A!')
  })

  // asserting rendered result by actually rendering the component
  it('should render correct message', () => {
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': ComponentA
      }
    }).$mount()
    expect(vm.$el.querySelector('h2').textContent).toBe('Hello from Component A!')
  })

  // example testing with a mock
  it('should render with mocked message', function () {
    // https://github.com/thlorenz/proxyquireify
    const proxyquire = require('proxyquireify')(require)
    // create an instance of the component module,
    // injecting a mocked "../services/message" dependency
    const ComponentAWithMock = proxyquire('../../src/components/a.vue', {
      '../services/message': {
        getMessage () {
          return 'Hello from mock'
        }
      }
    })
    // now we can test it!
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': ComponentAWithMock
      }
    }).$mount()
    expect(vm.$el.querySelector('h2').textContent).toBe('Hello from mock')
  })
})
