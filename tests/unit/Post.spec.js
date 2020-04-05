// before refactoring
import Vuex from "vuex";
import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";

import Posts from "@/components/Posts.vue";
import { createRouter } from "@/createRouter";
import { createStore } from "@/createStore";

// step1: The first five line of each test are the same
// const createTestVue = () => {
//   const localVue = createLocalVue()
//   localVue.use(VueRouter)
//   localVue.use(Vuex)
//
//   const store = createStore()
//   const router = createRouter()
//   return { store, router, localVue }
// }

// step2:
// const createWrapper = (component, options = {}) => {
//   const { localVue, store, router } = createTestVue()
//   return mount(component, {
//     store,
//     router,
//     localVue,
//     ...options
//   })
// }

// step3:
const createWrapper = (component, options = {}, storeState = {}) => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(Vuex);
  const store = createStore(storeState);
  const router = createRouter();

  return mount(component, {
    store,
    router,
    localVue,
    ...options
  });
};

describe("Posts.vue", () => {
  it("renders a message if passed", () => {
    // const localVue = createLocalVue()
    // localVue.use(VueRouter)
    // localVue.use(Vuex)
    //
    // const store = createStore()
    // const router = createRouter()

    // step1
    // const { store, router, localVue } = createTestVue()
    // const wrapper = mount(Posts, {
    //   propsData: { message },
    //   store, router, localVue
    // })
    // step2
    const message = "New content coming soon!";
    const wrapper = createWrapper(Posts, {
      propsData: { message }
    });

    expect(wrapper.find("#message").text()).toBe("New content coming soon!");
  });

  it("renders posts", async () => {
    // const localVue = createLocalVue()
    // localVue.use(VueRouter)
    // localVue.use(Vuex)
    //
    // const store = createStore()
    // const router = createRouter()
    // const { store, router, localVue } = createTestVue()
    // const wrapper = mount(Posts, {
    //   store, router,
    // })

    // const wrapper = createWrapper(Posts);
    // wrapper.vm.$store.commit("ADD_POSTS", [{ id: 1, title: "Post" }]);
    // await wrapper.vm.$nextTick();

    const wrapper = createWrapper(Posts, {}, {
      posts: [{ id: 1, title: 'Post' }]
    })
    expect(wrapper.findAll(".post").length).toBe(1);
  });
});
