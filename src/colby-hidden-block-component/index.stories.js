import React from 'react';
import HiddenBlock from '@colbycommunications/colby-hidden-block-component';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Hidden Block', decorators: [withA11y, withKnobs] };

export const Simple = () => (
    <div className={common.demoContainer}>
        <HiddenBlock title="Show hidden block">
            <div>Hidden Content</div>
        </HiddenBlock>
    </div>
);

export const WithComment = () => (
    <div className={common.demoContainer}>
        <HiddenBlock title="Show hidden block" comment="Comment appears here.">
            <div>Hidden Content</div>
        </HiddenBlock>
    </div>
);

export const OpenByDefault = () => (
    <div className={common.demoContainer}>
        <HiddenBlock title="Hide/Show block" show>
            <div>Hidden content shown on page load.</div>
        </HiddenBlock>
    </div>
);
