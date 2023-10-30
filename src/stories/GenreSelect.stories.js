import GenreSelect from "../component/GenreSelect/GenreSelect";
import { action } from "@storybook/addon-actions";

export default {
  title: "GenreSelect",
  component: GenreSelect,
  argTypes: {
    genres: { 
        control: {
            type: "array",
            of: { type: "string" },
        } 
    }, 
    selectedGenre: { control: "text" }
  },
  args: {},
};

const Template = (args) => 
    <GenreSelect {...args} />;

export const Default = Template.bind({});
    Default.args = {
    genres: ["Action", "Horror", "Thriller", "Romance"],
    selectedGenre: "Romance",
    onSelect: action("onSelect")
};
