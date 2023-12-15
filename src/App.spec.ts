import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import App from "./App.vue";
import { nextTick } from "vue";

describe("App.vue", () => {
  const wrapper = shallowMount(App);

  test("initial render", () => {
    expect(wrapper.html()).toContain("grpc-web sandobox");
  });

  test("click button", async () => {
    wrapper.find("button").trigger("click");
    await nextTick();

    expect(wrapper.vm.msgs).toEqual(["hello"]);
    expect(wrapper.html()).toContain("grpc-web sandobox");
  });
});
