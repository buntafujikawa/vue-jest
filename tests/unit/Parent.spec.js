import { mount, shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";
import ParentWithManyChildren from "@/components/ParentWithManyChildren.vue";

describe("Parent", () => {
  it("does not render a span", () => {
    const wrapper = shallowMount(Parent);
    expect(wrapper.find("span").isVisible()).toBe(false);
  });

  it("renders a span", () => {
    const wrapper = shallowMount(Parent, {
      data() {
        return { showSpan: true };
      }
    });
    expect(wrapper.find("span").isVisible()).toBe(true);
  });

  it("does not render a Child component", () => {
    const wrapper = shallowMount(Parent);

    expect(wrapper.find(Child).exists()).toBe(false);
  });

  it("renders a Child component", () => {
    const wrapper = shallowMount(Parent, {
      data() {
        return { showChild: true };
      }
    });

    expect(wrapper.find({ name: "Child" }).exists()).toBe(true);
  });

  it("renders many children", () => {
    const wrapper = shallowMount(ParentWithManyChildren)

    expect(wrapper.findAll(Child).length).toBe(3)
  })
});
