import React from 'react';
import {render} from '@testing-library/react';

import Display from './Display';


// snapshot test
test('renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});
// end snapshot test



test ('gate defaults to open/ unlocked', () => {
    const {getByText} =
        render (<Display />)
        getByText(/open/i)
        getByText(/unlocked/i)
});

test ('displays if gate is open/closed', () => {
    const {getByText} =
        render (<Display />)
        getByText(/open/i)
        getByText(/closed/i)
});

test ('displays if gate is locked/unlocked', () => {
    const {getByText} = 
        render (<Display />)
        getByText(/locked/i)
        getByText(/unlocked/i)
});

test ('displays Closed if the closed prop is true', () => {
    const {getByText} = 
        render (<Display 
            closed = {true} />)
        getByText(/closed/i)
});

test ('displays Open if closed prop is false', () => {
    const {getByText} = 
        render (<Display 
            closed = {false} />)
        getByText(/open/i)
});

test ('displays Locked if locked prop is true', () => {
    const {getByText} =
        render (<Display 
            locked = {true} />)
        getByText(/locked/i)
});

test ('displays Unlocked if locked prop is false', () => {
    const {getByText} = 
        render (<Display 
            locked = {false} />)
        getByText(/unlocked/i)
});

test ('gate is green if open and unlocked', () => {
    const {queryByText} = 
        render (<Display 
            open = {true}
            unlocked = {true} />)
    
            queryByText (/open/i)
            queryByText(/unlocked/i)
        expect('open').toHaveClass('green-led')
        expect('unlocked').toHaveClass('green-led')
});

test ('gate is red if closed and locked', () => {
    const {queryByText} = 
        render (<Display
            closed = {true}
            locked = {true} />)

            queryByText (/closed/i)
            queryByText(/locked/i)
        expect('closed').toHaveClass('red-led')
        expect('locked').toHaveClass('red-led')
});
