import GenreButton from "../component/GenreButton/GenreButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "GenreButton",
  component: GenreButton,
  argTypes: {
    genre: { control: "text" }, 
    buttonClass: { control: "text" }
  },
  args: {},
};

const Template = (args) => 
    <div style={{backgroundColor: '#232323'}}><GenreButton {...args} />;</div>

export const WithActiveButton = Template.bind({});
WithActiveButton.args = {
    genre: "Action",
    buttonClass: "red",
    onSelect: action("onSelect")
};

export const WithInactiveButton = Template.bind({});
WithInactiveButton.args = {
    genre: "Horror",
    buttonClass: "white",
    onSelect: action("onSelect")
};
