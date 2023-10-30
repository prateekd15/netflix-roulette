import Counter from "../component/Counter/Counter";
import { action } from "@storybook/addon-actions";

export default {
  title: "Counter",
  component: Counter,
  argTypes: {
    initialValue: { control: "number" },
  },
  args: {},
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
    initialValue: 15
};
