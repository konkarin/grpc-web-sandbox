import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import App from "./App.vue";

describe("App.vue", () => {
  const wrapper = shallowMount(App);

  test("initial render", () => {
    expect(wrapper.html()).toContain("grpc-web sandobox");
  });

  test("exec sendMsg", async () => {
    await wrapper.vm.sendMsg("hello");
    expect(wrapper.vm.msgs.length).toBe(1);
  });
});
