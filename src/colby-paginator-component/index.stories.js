import React, { useState } from 'react';
import Paginator from '@colbycommunications/colby-paginator-component';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Paginator', decorators: [withA11y, withKnobs] };

export const Simple = () => (
    <div className={common.demoContainer}>
        <Paginator total={10} />
    </div>
);

export const Interactive = () => {
    const [currentPage, setCurrentPage] = useState(1);

    function onPageChange(page) {
        setCurrentPage(page);
    }

    return (
        <div className={common.demoContainer}>
            <Paginator
                currentPage={currentPage}
                total={20}
                onPageChange={onPageChange}
                isAngularLinks
            />
        </div>
    );
};
