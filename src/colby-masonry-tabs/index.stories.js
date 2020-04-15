import React from 'react';
import MasonryTabs from '@colbycommunications/colby-masonry-tabs';
import 'bootstrap/dist/css/bootstrap.css?raw';
import common from '../common.css';

export default { title: 'Masonry Tabs' };

export const Simple = () => {
    return (
        <div className={`${common.demoContainer} container`}>
            <MasonryTabs
                tabList={[
                    {
                        name: 'one',
                        title: 'In The News',
                        endpoint:
                            'https://www.colby.edu/news/wp-json/wp/v2/posts/?categories=223&_embed',
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
                        endpoint: 'https://www.colby.edu/wp-json/wp/v2/posts/',
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
