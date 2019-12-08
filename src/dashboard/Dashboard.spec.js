import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';



test ('Dashboard renders correctly', () => {
    const dashboard = render (<Dashboard />)
    expect (dashboard).toMatchSnapshot();
})


test ('Mocking Display', () => {
    const displayMock = jest.fn();
    displayMock('displayed');
    expect(displayMock).toHaveBeenCalled();
})

test ('Mocking Controls', () => {
    const controlsMock = jest.fn();
    controlsMock('controlled');
    expect(controlsMock).toHaveBeenCalled();
})
