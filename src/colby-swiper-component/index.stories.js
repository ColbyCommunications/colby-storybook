import React, { useState } from 'react';
import Swiper from '@colbycommunications/colby-swiper-component';
import Template from './Template';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Swiper', decorators: [withA11y, withKnobs] };

export const SimpleSlider = () => {
    const slides = [
        { content: <div>some content</div>, type: 'node' },
        {
            content: (
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
                        scelerisque, congue leo in, placerat mi. Nullam vitae enim purus. Sed
                        hendrerit turpis eget tellus hendrerit, ac facilisis turpis lacinia. Nunc
                        neque justo, ornare at accumsan vulputate, suscipit vitae ante. Quisque non
                        dolor sed quam convallis sodales. Integer vehicula nulla sit amet accumsan
                        sagittis.
                    </p>
                </div>
            ),
            type: 'node',
        },
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'image',
        },
    ];
    return (
        <div className={common.demoContainer}>
            <div>
                <Swiper slides={slides} />
            </div>
        </div>
    );
};

export const DynamicBullets = () => {
    const slides = [
        { content: <div>some content</div>, type: 'node' },
        {
            content: (
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
                        scelerisque, congue leo in, placerat mi. Nullam vitae enim purus. Sed
                        hendrerit turpis eget tellus hendrerit, ac facilisis turpis lacinia. Nunc
                        neque justo, ornare at accumsan vulputate, suscipit vitae ante. Quisque non
                        dolor sed quam convallis sodales. Integer vehicula nulla sit amet accumsan
                        sagittis.
                    </p>
                </div>
            ),
            type: 'node',
        },
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'image',
        },
    ];
    return (
        <div className={common.demoContainer}>
            <div>
                <Swiper slides={slides} dynamicBullets />
            </div>
        </div>
    );
};

export const AutoHeight = () => {
    const slides = [
        {
            content: (
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
                        scelerisque, congue leo in, placerat mi. Nullam vitae enim purus. Sed
                        hendrerit turpis eget tellus hendrerit, ac facilisis turpis lacinia. Nunc
                        neque justo, ornare at accumsan vulputate, suscipit vitae ante. Quisque non
                        dolor sed quam convallis sodales. Integer vehicula nulla sit amet accumsan
                        sagittis.
                    </p>
                </div>
            ),
            type: 'node',
        },
        {
            content: (
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac neque
                        scelerisque, congue leo in, placerat mi. Nullam vitae enim purus. Sed
                        hendrerit turpis eget tellus hendrerit, ac facilisis turpis lacinia. Nunc
                        neque justo, ornare at accumsan vulputate, suscipit vitae ante. Quisque non
                        dolor sed quam convallis sodales. Integer vehicula nulla sit amet accumsan
                        sagittis.
                    </p>
                    <p>
                        Donec malesuada sit amet massa vel bibendum. In ultricies mauris eget erat
                        ultrices imperdiet. Nulla at turpis ac erat euismod sodales. Fusce eleifend
                        quis nunc at consequat. Aenean eros purus, eleifend id enim eu, eleifend
                        iaculis quam. Sed commodo, lectus nec pellentesque convallis, orci ex
                        venenatis eros, vitae volutpat lorem tellus et elit. Sed mauris urna,
                        egestas in diam nec, scelerisque bibendum erat. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus.
                    </p>
                    <p>
                        Quisque condimentum massa urna, a euismod nisi aliquet et. Etiam nec eros
                        eleifend, blandit augue id, auctor tortor. Integer euismod nisi vitae dictum
                        congue. Nullam eget erat scelerisque, ullamcorper velit sit amet, finibus
                        nulla. In consectetur neque nec interdum viverra. Suspendisse libero sem,
                        consectetur sit amet luctus nec, cursus non nisi. Mauris pulvinar ut dolor a
                        pharetra. Donec nec mauris urna. Aenean ullamcorper pellentesque arcu sed
                        volutpat. Etiam in dolor nibh. Aenean bibendum imperdiet tristique. Sed
                        faucibus condimentum cursus. Interdum et malesuada fames ac ante ipsum
                        primis in faucibus. Ut condimentum metus vitae scelerisque feugiat. Duis
                        efficitur tincidunt quam, vel tempus eros efficitur quis. Quisque imperdiet
                        facilisis nisi, a sagittis nisi commodo dapibus. Phasellus mattis nunc
                        velit, in vulputate elit malesuada in. Nulla egestas enim ornare aliquam
                        tristique. Donec non neque egestas, cursus mi quis, fermentum odio. Nunc at
                        porttitor nulla. Nam mattis dui quis nisl varius varius. Curabitur laoreet
                        quis leo ac auctor.
                    </p>
                    <p>
                        Fusce consequat consequat scelerisque. Nulla sodales ipsum vitae erat
                        facilisis congue. Cras eget velit vitae orci euismod fringilla vitae quis
                        quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
                        nibh sit amet turpis eleifend interdum at sed sem. Integer sit amet euismod
                        diam, eu blandit lectus. Aliquam iaculis elementum purus lobortis auctor.
                        Curabitur gravida est eget dui ornare, eu pulvinar tortor tempus. Donec elit
                        velit, porta in mauris quis, posuere tempus massa. Quisque vitae eleifend
                        lacus. Donec aliquam maximus elit, vestibulum venenatis ex imperdiet quis.
                        Donec lacinia ex ut turpis auctor consectetur.
                    </p>
                </div>
            ),
            type: 'node',
        },
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'image',
        },
    ];
    return (
        <div className={common.demoContainer}>
            <div>
                <Swiper autoHeight slides={slides} />
            </div>
        </div>
    );
};

export const Video = () => {
    const slides = [
        {
            content: (
                <>
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://player.vimeo.com/video/418902902?title=0&byline=0&portrait=0"
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                            }}
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                        />
                    </div>
                    <script src="https://player.vimeo.com/api/player.js" />
                </>
            ),
            type: 'video',
        },
        {
            content: (
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                        }}
                        src="https://www.youtube.com/embed/jEMYHmPlif0"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            ),
            type: 'video',
        },
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'video',
        },
    ];
    return (
        <div className={common.demoContainer}>
            <Swiper slides={slides} />
        </div>
    );
};

export const PredefinedTemplates = () => {
    const slides = [
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'image',
        },
        {
            content: (
                <img src="https://www.colby.edu/wp-content/uploads/2020/08/Will-Johnson-homepage-02-1.jpg" />
            ),
            type: 'image',
        },
        {
            content: (
                <img src="https://covid19.colby.edu/wp-content/uploads/2020/06/return-to-campus-header-pin-version.jpg" />
            ),
            type: 'image',
        },
    ];
    return (
        <div className={common.demoContainer}>
            <div>
                <h1>SOBLU</h1>
                <Swiper slides={slides} template="solbu" />
            </div>
        </div>
    );
};

export const CustomTemplate = () => {
    const slides = [
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'image',
        },
        {
            content: (
                <img src="https://www.colby.edu/wp-content/uploads/2020/08/Will-Johnson-homepage-02-1.jpg" />
            ),
            type: 'image',
        },
        {
            content: (
                <img src="https://covid19.colby.edu/wp-content/uploads/2020/06/return-to-campus-header-pin-version.jpg" />
            ),
            type: 'image',
        },
    ];
    return (
        <div className={common.demoContainer}>
            <Swiper
                params={{
                    slidesPerView: 1,
                    loop: true,
                }}
                slides={slides}
                template={Template}
            />
        </div>
    );
};

export const Multiple = () => {
    const slides = [
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'image',
        },
        {
            content: (
                <img src="https://www.colby.edu/wp-content/uploads/2020/08/Will-Johnson-homepage-02-1.jpg" />
            ),
            type: 'image',
        },
        {
            content: (
                <img src="https://covid19.colby.edu/wp-content/uploads/2020/06/return-to-campus-header-pin-version.jpg" />
            ),
            type: 'image',
        },
    ];

    const slides2 = [
        {
            content: <img src="https://covid19.colby.edu/wp-content/uploads/2020/06/quad.jpg" />,
            type: 'image',
        },
        {
            content: <img src="https://covid19.colby.edu/wp-content/uploads/2020/06/trees.jpg" />,
            type: 'image',
        },
        {
            content: (
                <img src="https://covid19.colby.edu/wp-content/uploads/2020/06/Panorama-5-cropped.jpg" />
            ),
            type: 'image',
        },
    ];
    return (
        <div className={common.demoContainer}>
            <h1>Some Section</h1>
            <Swiper slides={slides} />
            <h2 style={{ color: '#808080', marginTop: '2rem' }}>Some Sub Section</h2>
            <Swiper slides={slides2} />
        </div>
    );
};
