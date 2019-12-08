import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';

// snapshot test
test ('renders correctly', () => {
    expect (render(<Controls />)).toMatchSnapshot();
});
// end snapshot test



test ('gate closed and locked when clicked', () => {})
            


test ('button text = open or closed when clicked', () => {});

test ('gate cannot be opened when locked', () => {
    const gateOpenTgl = jest.fn()
    const {getByText} = 
        render (<Controls 
            gateLocked = {gateOpenTgl}
            locked = {true} />)
    const closeGateBtn = {getByText} (/close gate/i)
    fireEvent.click(closeGateBtn)
    expect(gateOpenTgl).not.toHaveBeenCalled()
});

test ('gate cannot be locked when open', () => {
    const gateLockedTgl = jest.fn()
    const {getByText} = 
        render (<Controls
            gateOpen = {gateLockedTgl}
            closed = {false} />)
    const openGateBtn = {getByText} (/lock gate/i)
    fireEvent.click(openGateBtn)
    expect(gateLockedTgl).not.toHaveBeenCalled()
});

