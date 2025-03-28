import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import {
  Dropdown,
  RekaDropdownMenuItem,
  RekaDropdownMenuTrigger,
} from "#components";

describe("Dropdown", () => {
  it("renders trigger slot content", () => {
    const { cut } = setupComponent([]);
    expect(cut.text()).toContain("trigger");
  });

  it("sets passed in HTML attributes on dropdown trigger button", async () => {
    const items = ["a", "b", "c"];
    const { dropdownTrigger } = setupComponent(items);
    expect(dropdownTrigger().classes()).toContain("test-class");
  });

  it("re-emits select event with selected dropdown item in payload", async () => {
    const items = ["a", "b", "c"];
    const { cut, openDropdown, dropdownItems } = setupComponent(items);
    await openDropdown();
    await dropdownItems()[0].trigger("click");
    expect(cut.emitted()).toMatchObject({ select: [[items[0]]] });
  });

  it("renders correct number of dropdown items", async () => {
    const items = ["a", "b", "c"];
    const { openDropdown, dropdownItems } = setupComponent(items);
    await openDropdown();
    expect(dropdownItems().length).toBe(items.length);
  });
});

function setupComponent(props: unknown[]) {
  const cut = mount(Dropdown, {
    attrs: { class: "test-class" },
    props: { items: props },
    slots: {
      trigger: "<div class='trigger'>trigger content</div>",
      item: ({ item }) => `<button>${item}</button>`,
    },
  });

  async function openDropdown() {
    await cut.find(".trigger").trigger("click");
    await nextTick();
  }

  return {
    cut,
    openDropdown,
    dropdownTrigger: () => cut.findComponent(RekaDropdownMenuTrigger),
    dropdownItems: () => cut.findAllComponents(RekaDropdownMenuItem),
  };
}
