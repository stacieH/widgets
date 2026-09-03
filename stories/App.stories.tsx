import type { Meta, StoryObj } from "@storybook/react";
import App from "../src/components/App";

const meta: Meta<typeof App> = {
  title: "Components/App",
  component: App,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    text: "Welcome back!",
  },
};
