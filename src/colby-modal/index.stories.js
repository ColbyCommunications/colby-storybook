import React from 'react';
import Modal from '@colbycommunications/colby-modal';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default { title: 'Modal', decorators: [withA11y, withKnobs] };

export const Simple = () => (
    <div className={common.demoContainer}>
        <Modal
            trigger={
                <button type="button" className="btn btn-primary">
                    Open Modal
                </button>
            }
            showModalCloseButton
            title={text('Modal Title', 'I am a modal')}
        >
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        </Modal>
    </div>
);

export const LinkAsTrigger = () => (
    <div className={common.demoContainer}>
        <Modal trigger={<a href="#">Open Modal</a>} title={text('Modal Title', 'I am a modal')}>
            <div>Modal content</div>
        </Modal>
    </div>
);

export const DifferentSizes = () => (
    <div className={common.demoContainer}>
        <Modal
            trigger={
                <button type="button" className="btn btn-primary">
                    Open Small Modal
                </button>
            }
            title="I am a small modal"
            size="small"
        >
            <div>Modal content</div>
        </Modal>{' '}
        <Modal
            trigger={
                <button type="button" className="btn btn-primary">
                    Open Medium Modal
                </button>
            }
            title="I am a medium modal"
            size="medium"
        >
            <div>Modal content</div>
        </Modal>{' '}
        <Modal
            trigger={
                <button type="button" className="btn btn-primary">
                    Open Large Modal
                </button>
            }
            title="I am a large modal"
            size="large"
        >
            <div>Modal content</div>
        </Modal>
    </div>
);
