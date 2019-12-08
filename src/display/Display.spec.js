import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Display from './Display';

test('renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
})

test ('displays if gate is open/closed', () => {})
test ('displays if gate is locked/unlocked', () => {})
test ('displays Closed if the closed prop is true', () => {})
test ('displays Open if closed prop is false', () => {})
test ('displays Locked if locked prop is true', () => {})
test ('displays Unlocked if locked prop is false', () => {})
test ('gate is green if open and unlocked', () => {})
test ('gate is red if closed and locked', () => {})

