import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import NestedRoute from "@/components/NestedRoute.vue";
import routes from "@/routes.js"

const localVue = createLocalVue();
localVue.use(VueRouter);

jest.mock("@/components/NestedRoute.vue", () => ({
  name: "NestedRoute",
  render: h => h("div")
}))

describe("App", () => {
  it("renders child component via routing", async () => {
    const router = new VueRouter({ routes });
    // shallowMountすると、不必要なrouter-linkのスタブコンポーネントがレンダリングされるためmountを使用
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push("/nested-route");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(NestedRoute).exists()).toBe(true);
  });
});
