import React from 'react';
import Tabs, { Pills } from '@colbycommunications/colby-tabs';
import 'bootstrap/dist/css/bootstrap.css?raw';
import common from '../common.css';

export default { title: 'Tabs' };

export const HorizontalTabs = () => (
    <div className={common.demoContainer}>
        <Tabs
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
        />
    </div>
);

export const VerticalTabs = () => (
    <div className={common.demoContainer}>
        <Tabs
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
            orientation="vertical"
        />
    </div>
);
export const HorizontalPills = () => (
    <div className={common.demoContainer}>
        <Pills
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
        />
    </div>
);

export const VerticalPills = () => (
    <div className={common.demoContainer}>
        <Pills
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
            orientation="vertical"
        />
    </div>
);

export const TabsRightAligned = () => (
    <div className={common.demoContainer}>
        <Tabs
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
            tabClasses={{
                tabContainer: 'nav nav-tabs justify-content-end',
                tabs: 'nav-item nav-link',
            }}
        />
    </div>
);

export const TabsCenterAligned = () => (
    <div className={common.demoContainer}>
        <Tabs
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
            tabClasses={{
                tabContainer: 'nav nav-tabs justify-content-center',
                tabs: 'nav-item nav-link',
            }}
        />
    </div>
);

export const PillsRightAligned = () => (
    <div className={common.demoContainer}>
        <Pills
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
            tabClasses={{
                tabContainer: 'nav nav-pills justify-content-end',
                tabs: 'nav-item nav-link',
            }}
        />
    </div>
);

export const TabsWithBadges = () => (
    <div className={common.demoContainer}>
        <Tabs
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    badge: '2',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    badge: 'hi',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    badge: '100',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
        />
    </div>
);
export const PillsWithBadges = () => (
    <div className={common.demoContainer}>
        <Pills
            tabList={[
                {
                    name: 'tab1',
                    title: 'Tab 1',
                    badge: '2',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor sagittis tempus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque eget mattis dui. Sed nec pretium erat, sed pellentesque ligula. Nunc et sapien iaculis, ornare elit vitae, ultricies ex. In fringilla urna vitae enim suscipit finibus. Integer scelerisque gravida nunc eu porta. Suspendisse lacinia justo nec aliquam egestas. Donec vulputate ornare nisi, sit amet vestibulum nisi sagittis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                },
                {
                    name: 'tab2',
                    title: 'Tab 2',
                    badge: 'hi',
                    content:
                        'Sed est arcu, ornare nec pretium nec, sodales sed augue. Pellentesque id laoreet ante. Nullam sodales accumsan tincidunt. Vestibulum at lacinia lacus, vitae bibendum nisi. Integer eleifend, nunc non sagittis dignissim, quam lectus lacinia odio, vitae lacinia nisl velit ut metus. Donec sit amet diam sit amet metus sagittis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed metus eget metus hendrerit ultricies sit amet eu dolor. Duis varius sapien odio, sit amet bibendum justo elementum at. Fusce vel hendrerit diam, sit amet vestibulum quam.',
                },
                {
                    name: 'tab3',
                    title: 'Tab 3',
                    badge: '100',
                    content:
                        'Fusce erat lectus, commodo sed imperdiet eget, posuere in turpis. Nam tristique egestas molestie. Donec cursus erat eu lorem tincidunt sollicitudin.',
                },
            ]}
        />
    </div>
);
