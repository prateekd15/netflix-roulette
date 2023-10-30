import SearchForm from "../component/SearchForm/SearchForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "SearchForm",
  component: SearchForm,
  argTypes: {
    initialQuery: { control: "text" },
  },
  args: {},
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithInitialQuery = Template.bind({});
WithInitialQuery.args = {
  initialQuery: "Star Wars",
  onSearch: action("onSearch")
};
