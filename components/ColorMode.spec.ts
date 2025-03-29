import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { ColorMode, Dropdown, Icon } from "#components";

describe("ColorMode", () => {
  it("shows current theme as icon", () => {
    const { icon } = setupComponent();
    expect(icon().props()).toMatchObject({
      name: "solar:monitor-linear",
      size: "24",
    });
  });

  it("passes 3 themes details to dropdown as prop", () => {
    const { dropdown } = setupComponent();
    expect(dropdown().props()).toEqual({
      items: [
        {
          color: "",
          label: "System",
          icon: "solar:monitor-linear",
          value: "system",
        },
        {
          color: "text-yellow-500",
          label: "Light",
          icon: "solar:sun-2-linear",
          value: "light",
        },
        {
          color: "text-blue-500",
          label: "Dark",
          icon: "solar:moon-linear",
          value: "dark",
        },
      ],
    });
  });

  // Due to issue with useColorMode's "helper.removeColorScheme is not a function" the test is failing
  it.fails("changes theme on 'select' event", async () => {
    const theme = {
      color: "text-blue-500",
      label: "Dark",
      icon: "solar:moon-linear",
      value: "dark",
    };
    const { dropdown, icon } = setupComponent();
    dropdown().vm.$emit("select", theme);
    expect(icon().props()).toMatchObject({
      name: theme.icon,
      size: "24",
    });
  });
});

function setupComponent() {
  const cut = shallowMount(ColorMode, {
    global: {
      stubs: {
        Dropdown,
      },
    },
  });

  return {
    cut,
    dropdown: () => cut.findComponent({ name: "Dropdown" }),
    icon: () => cut.findComponent(Icon),
  };
}
