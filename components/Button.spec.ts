import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { Button } from "#components";

describe("Button", () => {
  it("has 'button' type attribute", () => {
    const cut = shallowMount(Button);
    expect(cut.attributes().type).toEqual("button");
  });

  it("has correct classes for label wrapper", () => {
    const slot = "<div>Test button</div>";
    const cut = shallowMount(Button, {
      slots: { default: slot },
    });
    expect(cut.find("[data-test=button-label-wrapper]").classes()).toEqual([
      "flex",
      "items-center",
      "gap-2",
    ]);
  });

  it("renders slot content", () => {
    const slot = "<div>Test button</div>";
    const cut = shallowMount(Button, {
      slots: { default: slot },
    });
    expect(cut.find("[data-test=button-label-wrapper]").html()).toContain(slot);
  });
});
