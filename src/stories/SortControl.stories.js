import SortControl from '../component/SortControl/SortControl';
import { action } from "@storybook/addon-actions";

export default {
  title: 'SortControl',
  component: SortControl,
};

const Template = (args) => 
    <div style={{backgroundColor: '#232323'}}><SortControl {...args} />;</div>

export const Default = Template.bind({});
Default.args = {
    sortFilters: ['TITLE', 'RELEASE DATE'],
    selectedFilter: 'TITLE',
    onSelect: action("onSelect"),
};
