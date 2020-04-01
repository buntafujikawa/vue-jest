import Emitter from "@/components/Emitter.vue"
import { shallowMount } from "@vue/test-utils"

describe('Emitter', () => {
  it('emits an event with two arguments', () => {
    // mount
    // const wrapper = shallowMount(Emitter)
    // wrapper.vm.emitEvent()
    // expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"])

    // call
    const events = {}
    const $emit = (event, ...args) => { events[event] = [...args] }

    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).toEqual(["name", "password"])
  })
})
