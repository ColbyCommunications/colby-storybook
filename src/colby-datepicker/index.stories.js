import React, { useState } from 'react';
import DatePicker from '@colbycommunications/colby-datepicker-component';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Date Picker', decorators: [withA11y, withKnobs] };

export const Simple = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className={common.demoContainer}>
            <div>
                <label>Select date:</label>
            </div>
            <DatePicker selected={selected} onChange={setSelected} placeholderText="Enter date" />
        </div>
    );
};
