import React from 'react';
import { render } from '@testing-library/react';
import MenuButton from './MenuButton';

function setUp() {
    return render(<MenuButton />);
}
describe('MenuButton', () => {
    it('Should render image with the correct alt text', () => {
        const { getByAltText } = setUp();
        const image = getByAltText('Hover Button');
        expect(image);
    });

    it('Should render Edit and Delete links', () => {
    const { getByText } = setUp();
    const editLink = getByText('Edit');
    const deleteLink = getByText('Delete');

    expect(editLink);
    expect(deleteLink);
    });
});

