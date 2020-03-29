// import { shallowMount } from "@vue/test-utils";
import NumberRenderer from "@/components/NumberRenderer";

describe("NumberRenderer", () => {
  it("renders even numbers", () => {
    // shallowMountだとレンダーしないので、vueはpropsをthisにバインドしない
    // そのため、thisを細かく設定したい場合やライフサイクルフックを実行したくない場合にはcallを使用する
    // const wrapper = shallowMount(NumberRenderer, {
    //   even: true
    // });
    // expect(wrapper.text()).toBe("2, 4, 6, 8");
    expect(NumberRenderer.computed.numbers.call({ even: true })).toBe(
      "2, 4, 6, 8"
    );
  });

  it("renders odd numbers", () => {
    // const localThis = { even: false };

    expect(NumberRenderer.computed.numbers.call({ even: false })).toBe(
      "1, 3, 5, 7, 9"
    );
  });
});
