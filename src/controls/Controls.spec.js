import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';

test ('renders correctly', () => {
    expect (render(<Controls />)).toMatchSnapshot();
})

