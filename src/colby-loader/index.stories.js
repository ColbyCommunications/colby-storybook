import React from 'react';
import Loader from '@colbycommunications/colby-loader';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean} from '@storybook/addon-knobs';

export default { title: 'Loader', decorators: [withA11y, withKnobs] };

export const Global = () => (
    <div className={common.demoContainer}>
        <Loader loading={boolean('Loading', true)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis
            tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque
            ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae
            enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia
            justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi
            sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
            ac turpis egestas.
        </Loader>
    </div>
);

export const Inline = () => (
    <div className={common.demoContainer}>
        <Loader
            loading={boolean('Loading', true)}
            type="inline"
            removeChildren={boolean('Remove Children', true)}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis
            tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque
            ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae
            enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia
            justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi
            sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
            ac turpis egestas.
        </Loader>
    </div>
);
