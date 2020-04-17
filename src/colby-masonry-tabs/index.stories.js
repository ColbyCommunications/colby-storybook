import React from 'react';
import MasonryTabs from '@colbycommunications/colby-masonry-tabs';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';

export default { title: 'Masonry Tabs', decorators: [withA11y] };

export const Simple = () => {
    return (
        <div className={`${common.demoContainer} container`}>
            <MasonryTabs
                tabList={[
                    {
                        name: 'one',
                        title: 'In The News',
                        endpoint:
                            'https://www.colby.edu/news/wp-json/wp/v2/posts/?per_page=100&categories=223',
                        fields: {
                            id: 'id',
                            title: 'title.rendered',
                            excerpt: 'excerpt.rendered',
                            image: 'featured_media',
                            source: 'meta.source_name[0]',
                            link: 'link',
                        },
                        type: 'card',
                    },
                    {
                        name: 'two',
                        title: 'Homepage Slides',
                        endpoint: 'https://www.colby.edu/wp-json/wp/v2/posts/?per_page=100',
                        fields: {
                            id: 'id',
                            title: 'title.rendered',
                            excerpt: 'excerpt.rendered',
                            image: 'thumbnail[0]',
                            source: 'meta.source_name[0]',
                            link: 'link',
                        },
                        type: 'image',
                    },
                ]}
            />
        </div>
    );
};

export const Themes = () => {
    return (
        <div id="styledTabs" className={`${common.demoContainer} container`}>
            <h1>In The News</h1>
            <MasonryTabs
                tabList={[
                    {
                        name: 'one',
                        title: 'In The News',
                        endpoint:
                            'https://www.colby.edu/news/wp-json/wp/v2/posts/?per_page=100&categories=223',
                        fields: {
                            id: 'id',
                            title: 'title.rendered',
                            excerpt: 'excerpt.rendered',
                            image: 'featured_media',
                            source: 'meta.source_name[0]',
                            link: 'link',
                        },
                        type: 'card',
                    },
                    {
                        name: 'two',
                        title: 'Homepage Slides',
                        endpoint: 'https://www.colby.edu/wp-json/wp/v2/posts/?per_page=100',
                        fields: {
                            id: 'id',
                            title: 'title.rendered',
                            excerpt: 'excerpt.rendered',
                            image: 'thumbnail[0]',
                            source: 'meta.source_name[0]',
                            link: 'link',
                        },
                        type: 'image',
                    },
                ]}
            />
        </div>
    );
};
