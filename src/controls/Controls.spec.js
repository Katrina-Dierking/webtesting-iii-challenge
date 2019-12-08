import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';

// snapshot test
test ('renders correctly', () => {
    expect (render(<Controls />)).toMatchSnapshot();
});
// end snapshot test

test ('gate opens when clicked', () => {});
test ('gate closes when clicked', () => {});
test ('button says open when clicked', () => {});
test ('button says closed when clicked', () => {});
test ('closed button disabled when gate is locked', () => {});
test ('locked button is disabled when gate is open', () => {});

